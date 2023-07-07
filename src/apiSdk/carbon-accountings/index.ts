import axios from 'axios';
import queryString from 'query-string';
import { CarbonAccountingInterface, CarbonAccountingGetQueryInterface } from 'interfaces/carbon-accounting';
import { GetQueryInterface } from '../../interfaces';

export const getCarbonAccountings = async (query?: CarbonAccountingGetQueryInterface) => {
  const response = await axios.get(`/api/carbon-accountings${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCarbonAccounting = async (carbonAccounting: CarbonAccountingInterface) => {
  const response = await axios.post('/api/carbon-accountings', carbonAccounting);
  return response.data;
};

export const updateCarbonAccountingById = async (id: string, carbonAccounting: CarbonAccountingInterface) => {
  const response = await axios.put(`/api/carbon-accountings/${id}`, carbonAccounting);
  return response.data;
};

export const getCarbonAccountingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/carbon-accountings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCarbonAccountingById = async (id: string) => {
  const response = await axios.delete(`/api/carbon-accountings/${id}`);
  return response.data;
};
