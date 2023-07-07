import * as yup from 'yup';

export const carbonAccountingValidationSchema = yup.object().shape({
  carbon_footprint: yup.number().integer().required(),
  date: yup.date().required(),
  company_id: yup.string().nullable().required(),
});
