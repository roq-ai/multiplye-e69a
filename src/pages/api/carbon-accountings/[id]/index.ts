import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { carbonAccountingValidationSchema } from 'validationSchema/carbon-accountings';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.carbon_accounting
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getCarbonAccountingById();
    case 'PUT':
      return updateCarbonAccountingById();
    case 'DELETE':
      return deleteCarbonAccountingById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCarbonAccountingById() {
    const data = await prisma.carbon_accounting.findFirst(convertQueryToPrismaUtil(req.query, 'carbon_accounting'));
    return res.status(200).json(data);
  }

  async function updateCarbonAccountingById() {
    await carbonAccountingValidationSchema.validate(req.body);
    const data = await prisma.carbon_accounting.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteCarbonAccountingById() {
    const data = await prisma.carbon_accounting.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
