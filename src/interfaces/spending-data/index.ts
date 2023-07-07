import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface SpendingDataInterface {
  id?: string;
  amount: number;
  date: any;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface SpendingDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
}
