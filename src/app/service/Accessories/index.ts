import { useQuery } from 'react-query';
import env from 'src/app/config';
import {
  ACCESSORY_TYPE,
  RARITY,
  GENDER,
  DEFAULT_SORT,
} from 'src/app/config/constants';

/**
 ========= Interfaces
 */

export interface Accessories {
  id: number;
  createAtTimestamp: number;
  updatedAtTimestamp: number;
  createdAtBlock: number;
  updatedAtBlock: number;
  name: string;
  totalSupply: number;
  owner: string;
  lastPrice?: number;
  currency: string;
  uri: string;
  image?: string;
}

export interface AccessoriesFilterParams {
  sort: string;
  id: number | undefined;
  accessoryType: ACCESSORY_TYPE | undefined;
  rarity: RARITY | undefined;
  gender: GENDER[];
  stat: Record<string, number[]>;
}

export const DEFAULT_ACCESSORIES_FILTER_PARAMS = {
  sort: DEFAULT_SORT,
  id: undefined,
  accessoryType: undefined,
  rarity: undefined,
  gender: [],
  stat: {},
};

export interface AccessoriesResponse {
  count: number;
  offset: number;
  data: Accessories[];
}

export interface AccessoriesFetcher {
  getAccessoriesByPage: (
    account: string,
    offset: number,
    limit: number,
    filter: AccessoriesFilterParams,
  ) => Promise<AccessoriesResponse>;
}

let fetcher: AccessoriesFetcher;

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

// export function useGetAccessories(account: string, options?: any) {
//   return useQuery<Accessories[], Error>(
//     ['accessories-get-acceesories', account],
//     async (): Promise<Accessories[]> => {
//       return fetcher.getAccessories(account);
//     },
//     options,
//   );
// }

export function useGetAccessoriesByPage(
  account: string,
  offset: number,
  limit: number,
  filter: AccessoriesFilterParams,
  options?: any,
) {
  return useQuery<AccessoriesResponse, Error>(
    ['accessories-get-accessories-by-page', account, offset, limit, filter],
    async (): Promise<AccessoriesResponse> => {
      console.log('receive request');
      console.log(filter);
      return fetcher.getAccessoriesByPage(account, offset, limit, filter);
    },
    options,
  );
}
