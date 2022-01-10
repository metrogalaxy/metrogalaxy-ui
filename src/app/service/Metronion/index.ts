import { useQuery } from 'react-query';
import env from 'src/app/config';
import { GENDER, DEFAULT_SORT } from 'src/app/config/constants';

/**
 ========= Interfaces
 */

export interface Metronions {
  id: number;
  createAtTimestamp: number;
  updatedAtTimestamp: number;
  name: string;
  versionId: number;
  gender: string;
  owner: string;
  lastPrice: number;
  currency: string;
  uri: string;
  image: string;
  accessoryIds: number[];
}

export interface MetronionInfo {
  id: number;
  createAtTimestamp: number;
  updatedAtTimestamp: number;
  name: string;
  versionId: number;
  gender: string;
  owner: string;
  lastPrice: number;
  currency: string;
  uri: string;
  image: string;
  accessoryIds: number[];
}

export interface MetronionFilterParams {
  sort: string;
  id: number | undefined;
  gender: GENDER[];
  stat: Record<string, number[]>;
}

export const DEFAULT_METRONION_FILTER_PARAMS = {
  sort: DEFAULT_SORT,
  id: undefined,
  gender: [],
  stat: {},
};

export interface MetronionsResponse {
  count: number;
  offset: number;
  data: Metronions[];
}

export interface MetronionFetcher {
  getMetronionInfo: (id: number) => Promise<MetronionInfo>;
  getMetronions: (account: string) => Promise<Metronions[]>;
  getMetronionsByPage: (
    account: string,
    offset: number,
    limit: number,
    filter: MetronionFilterParams,
  ) => Promise<MetronionsResponse>;
}

let fetcher: MetronionFetcher;

if (env.useMockData) {
  const Fetcher = require('./mock.ts').default;
  fetcher = new Fetcher();
} else {
  const Fetcher = require('./api.ts').default;
  fetcher = new Fetcher();
}

/**
 =========== Methods
 */

export function useGetMetronionInfo(id: number, options?: any) {
  return useQuery<MetronionInfo, Error>(
    ['metronion-get-metronion-info', id],
    async (): Promise<MetronionInfo> => {
      return fetcher.getMetronionInfo(id);
    },
    options,
  );
}

export function useGetMetronions(account: string, options?: any) {
  return useQuery<Metronions[], Error>(
    ['metronion-get-metronions', account],
    async (): Promise<Metronions[]> => {
      return fetcher.getMetronions(account);
    },
    options,
  );
}

export function useGetMetronionsByPage(
  account: string,
  offset: number,
  limit: number,
  filter: MetronionFilterParams,
  options?: any,
) {
  return useQuery<MetronionsResponse, Error>(
    ['metronion-get-metronions-by-page', account, offset, limit, filter],
    async (): Promise<MetronionsResponse> => {
      return fetcher.getMetronionsByPage(account, offset, limit, filter);
    },
    options,
  );
}
