import * as yup from 'yup';

export const spendingDataValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  date: yup.date().required(),
  company_id: yup.string().nullable().required(),
});
