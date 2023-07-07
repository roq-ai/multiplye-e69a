import axios from 'axios';
import queryString from 'query-string';
import { SpendingDataInterface, SpendingDataGetQueryInterface } from 'interfaces/spending-data';
import { GetQueryInterface } from '../../interfaces';

export const getSpendingData = async (query?: SpendingDataGetQueryInterface) => {
  const response = await axios.get(`/api/spending-data${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createSpendingData = async (spendingData: SpendingDataInterface) => {
  const response = await axios.post('/api/spending-data', spendingData);
  return response.data;
};

export const updateSpendingDataById = async (id: string, spendingData: SpendingDataInterface) => {
  const response = await axios.put(`/api/spending-data/${id}`, spendingData);
  return response.data;
};

export const getSpendingDataById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/spending-data/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSpendingDataById = async (id: string) => {
  const response = await axios.delete(`/api/spending-data/${id}`);
  return response.data;
};
