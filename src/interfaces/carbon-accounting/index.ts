import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CarbonAccountingInterface {
  id?: string;
  carbon_footprint: number;
  date: any;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface CarbonAccountingGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
}
