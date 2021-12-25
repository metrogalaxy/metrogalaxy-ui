import { useQuery } from 'react-query';
import axios from 'axios';
import { AttributeType } from 'src/app/config/constants';

export interface AttributeInfo {
  id?: string;
  url: string;
  description: string;
  type: AttributeType;
  rarity: number;
}

export interface FetchMetronionInfoResponse {
  id: string;
  url: string;
  listPrice?: string;
  attributes: AttributeInfo[];
}

export interface FetchMetronionHistoryResponse {}

export const useFetchMetronionInfo = (id: string, options?: any) => {
  return useQuery<FetchMetronionInfoResponse, Error>(
    ['/api/metronion', id],
    async (): Promise<FetchMetronionInfoResponse> => {
      let endpoint = `/api/metronion/${id}`;
      const { data } = await axios.get<FetchMetronionInfoResponse>(endpoint);
      // await new Promise(resolve => setTimeout(resolve, 100000));
      return data;
    },
    options,
  );
};

export const useFetchMetronionHistory = (id: string, options?: any) => {
  return useQuery<FetchMetronionHistoryResponse, Error>(
    ['/api/metronion-history', id],
    async (): Promise<FetchMetronionHistoryResponse> => {
      let endpoint = `api/metronion-history/${id}`;
      const { data } = await axios.get<FetchMetronionHistoryResponse>(endpoint);
      return data;
    },
    options,
  );
};
