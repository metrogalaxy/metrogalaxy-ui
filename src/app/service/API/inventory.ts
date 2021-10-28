import { useQuery } from 'react-query';
import axios from 'axios';

export interface FetchMetronionQuery {
  address: string;
  id?: string;
  sort?: string;
  page?: number;
  limit?: number;
}

export interface FetchMetronionItem {
  id: string;
  owner: string;
  url: string;
  price: string;
}

export interface FetchMetronionResponse {
  count: number;
  items: FetchMetronionItem[];
}

interface FetchMetronionCountResponse {
  count: number;
}
export const useFetchMetronions = (
  query: FetchMetronionQuery,
  options?: any,
) => {
  return useQuery<FetchMetronionResponse, Error>(
    [
      '/api/inventory',
      query.address,
      query.id,
      query.sort,
      query.page,
      query.limit,
    ],
    async (): Promise<FetchMetronionResponse> => {
      let endpoint = `/api/inventory?address=${query.address}&page=${query.page}&limit=${query.limit}`;
      if (query.id) {
        endpoint += `&id=${query.id}`;
      }
      if (query.sort) {
        endpoint += `&sort=${query.sort}`;
      }
      const { data } = await axios.get<FetchMetronionResponse>(endpoint);
      return data;
    },
    options,
  );
};

export const useFetchMetronionsCount = (address: string, options?: any) => {
  return useQuery<FetchMetronionCountResponse, Error>(
    ['/api/inventory/count', address],
    async (): Promise<FetchMetronionCountResponse> => {
      let endpoint = `/api/inventory/count?address=${address}`;
      const { data } = await axios.get<FetchMetronionCountResponse>(endpoint);
      return data;
    },
    options,
  );
};
