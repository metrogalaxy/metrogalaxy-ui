import { useQuery } from 'react-query';
import env from 'src/app/config';
import {
  ACCESSORY_TYPE,
  RARITY,
  GENDER,
  DEFAULT_SORT,
} from 'src/app/config/constants';
import { Stats } from 'src/app/service/types';

/**
 ========= Interfaces
 */

export interface Accessories {
  id: string;
  onChainId: number;
  name: string;
  type: string;
  createAtTimestamp: number;
  updatedAtTimestamp: number;
  createdAtBlock: number;
  updatedAtBlock: number;
  totalSupply: number;
  lastPrice: number;
  gender: string;
  rarity: string;
  changeable: boolean;
  isOrigin: boolean;
  isRequired: boolean;
  image: string;
  stats?: Stats;
}

export interface AccessoriesFilterParams {
  account?: string;
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
  data: Accessories[];
}

export interface AccessoriesFetcher {
  getAccessoriesByPage: (
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
  // const Fetcher = require('./api.ts').default;
  const Fetcher = require('./grpc.ts').default;
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
  offset: number,
  limit: number,
  filter: AccessoriesFilterParams,
  options?: any,
) {
  return useQuery<AccessoriesResponse, Error>(
    ['accessories-get-accessories-by-page', offset, limit, filter],
    async (): Promise<AccessoriesResponse> => {
      return fetcher.getAccessoriesByPage(offset, limit, filter);
    },
    options,
  );
}
