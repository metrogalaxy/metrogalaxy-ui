import { useQuery } from 'react-query';
import axios from 'axios';

export interface FetchInventoryQuery {
  address: string;
  id?: string;
  sort?: string;
  page?: number;
  limit?: number;
}

export interface FetchInventoryItem {
  id: string;
  owner: string;
  url: string;
  price: string;
}

export interface FetchInventoryResponse {
  count: number;
  items: FetchInventoryItem[];
}

interface FetchInventoryCountResponse {
  count: number;
}
export const useFetchInventory = (
  query: FetchInventoryQuery,
  options?: any,
) => {
  return useQuery<FetchInventoryResponse, Error>(
    [
      '/api/inventory',
      query.address,
      query.id,
      query.sort,
      query.page,
      query.limit,
    ],
    async (): Promise<FetchInventoryResponse> => {
      let endpoint = `/api/inventory?address=${query.address}&page=${query.page}&limit=${query.limit}`;
      if (query.id) {
        endpoint += `&id=${query.id}`;
      }
      if (query.sort) {
        endpoint += `&sort=${query.sort}`;
      }
      const { data } = await axios.get<FetchInventoryResponse>(endpoint);
      return data;
    },
    options,
  );
};

export const useFetchInventoryCount = (address: string, options?: any) => {
  return useQuery<FetchInventoryCountResponse, Error>(
    ['/api/inventory/count', address],
    async (): Promise<FetchInventoryCountResponse> => {
      let endpoint = `/api/inventory/count?address=${address}`;
      const { data } = await axios.get<FetchInventoryCountResponse>(endpoint);
      return data;
    },
    options,
  );
};
