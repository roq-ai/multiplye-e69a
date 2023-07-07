import { CarbonAccountingInterface } from 'interfaces/carbon-accounting';
import { SpendingDataInterface } from 'interfaces/spending-data';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  carbon_accounting?: CarbonAccountingInterface[];
  spending_data?: SpendingDataInterface[];
  user?: UserInterface;
  _count?: {
    carbon_accounting?: number;
    spending_data?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
