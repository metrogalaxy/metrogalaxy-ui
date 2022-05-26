import { useMutation, useQuery } from 'react-query';
import { Web3Provider } from '@ethersproject/providers';
import env from 'src/app/config';
import { GENDER, DEFAULT_SORT, STATUS } from 'src/app/config/constants';
import { BaseResponse, Stats } from 'src/app/service/types';
import { Signer } from '@ethersproject/abstract-signer';
import { ITransactionReceipt } from '../types';
import { BigNumber } from 'ethers';
import { default as MetronionOnChainHandlerImpl } from './on_chain_handler';

/**
 ========= Interfaces
 */

export interface MetronionInfo {
  id: number;
  name: string;
  versionId: number;
  createdAtTimestamp: number;
  updatedAtTimestamp: number;
  createdAtBlock: number;
  updatedAtBlock: number;
  owner: string;
  lastPrice: number;
  currentPrice: number;
  topBid: number;
  listedBy: string;
  image: string;
  gender: string;
  type: string;
  star: number;
  specialStar: number;
  baseStats?: Stats;
  specialStats?: Stats;
  wearables: MetronionWearables[];
}

export interface MetronionWearables {
  id: string;
  type: string;
  name: string;
  gender: string;
  rarity: string;
  changeable: boolean;
  isOrigin: boolean;
  isRequired: boolean;
  image: string;
  stats?: Stats;
}

export interface MetronionActivities {
  id: number;
  type: string;
  price: number;
  fromAccount: string;
  toAccount: string;
  timestamp: number;
  blockNumber: number;
  txHash: string;
}

export interface MetronionOffers {
  id: number;
  price: number;
  fromAccount: string;
  timestamp: number;
  blockNumber: number;
  txHash: string;
}

export interface MetronionFilterParams {
  account?: string;
  sort: string;
  id: number | undefined;
  gender: GENDER[];
  status: STATUS[];
  stat: Record<string, number[]>;
}

export const DEFAULT_METRONION_FILTER_PARAMS = {
  sort: DEFAULT_SORT,
  id: undefined,
  gender: [],
  status: [],
  stat: {},
};

export interface MetronionsResponse extends BaseResponse {
  count: number;
  data: MetronionInfo[];
}

export interface MetronionInfoResponse extends MetronionInfo {}

export interface MetronionActivitiesResponse extends BaseResponse {
  data: MetronionActivities[];
}

export interface MetronionOffersResponse extends BaseResponse {
  data: MetronionOffers[];
}

export interface MetronionFetcher {
  getMetronionInfo: (id: number) => Promise<MetronionInfo>;
  getMetronionsByPage: (
    offset: number,
    limit: number,
    filter: MetronionFilterParams,
  ) => Promise<MetronionsResponse>;
  getMetronionActivities: (id: number) => Promise<MetronionActivities[]>;
  getMetronionOffers: (id: number) => Promise<MetronionOffers[]>;
}

export interface MetronionOnChainHandler {
  listMetronion: (
    signer: Signer,
    metronionId: BigNumber,
    price: BigNumber,
  ) => Promise<ITransactionReceipt>;
  delistMetronion: (
    signer: Signer,
    metronionId: BigNumber,
  ) => Promise<ITransactionReceipt>;
  offerMetronion: (
    signer: Signer,
    metronionId: BigNumber,
    price: BigNumber,
  ) => Promise<ITransactionReceipt>;
  cancelOfferMetronion: (
    signer: Signer,
    metronionId: BigNumber,
  ) => Promise<ITransactionReceipt>;
  takeOfferMetronion: (
    signer: Signer,
    metronionId: BigNumber,
    price: BigNumber,
    buyer: string,
  ) => Promise<ITransactionReceipt>;
  buyMetronion: (
    signer: Signer,
    metronionId: BigNumber,
    price: BigNumber,
    seller: string,
  ) => Promise<ITransactionReceipt>;
}

let fetcher: MetronionFetcher;
let onChainHandler: MetronionOnChainHandler = new MetronionOnChainHandlerImpl();

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

export function useGetMetronionInfo(id: number, options?: any) {
  return useQuery<MetronionInfo, Error>(
    ['metronion-get-metronion-info', id],
    async (): Promise<MetronionInfo> => {
      return fetcher.getMetronionInfo(id);
    },
    options,
  );
}

export function useGetMetronionsByPage(
  offset: number,
  limit: number,
  filter: MetronionFilterParams,
  options?: any,
) {
  return useQuery<MetronionsResponse, Error>(
    ['metronion-get-metronions-by-page', offset, limit, filter],
    async (): Promise<MetronionsResponse> => {
      return fetcher.getMetronionsByPage(offset, limit, filter);
    },
    options,
  );
}

export interface ListMetronionParams {
  metronionId: BigNumber;
  price: BigNumber;
}

export function useListMetronion(
  provider: Web3Provider | undefined,
  account: string | null | undefined,
  options?: any,
) {
  return useMutation((params: ListMetronionParams) => {
    if (provider && account) {
      const signer = provider.getSigner(account);
      return onChainHandler.listMetronion(
        signer,
        params.metronionId,
        params.price,
      );
    }
    return Promise.reject('web3 not connected');
  }, options);
}

export interface DelistMetronionParams {
  metronionId: BigNumber;
}

export function useDelistMetronion(
  provider: Web3Provider | undefined,
  account: string | null | undefined,
  options?: any,
) {
  return useMutation((params: DelistMetronionParams) => {
    if (provider && account) {
      const signer = provider.getSigner(account);
      return onChainHandler.delistMetronion(signer, params.metronionId);
    }
    return Promise.reject('web3 not connected');
  }, options);
}

export interface OfferMetronionParams {
  metronionId: BigNumber;
  price: BigNumber;
}

export interface OfferMetronionParams {
  metronionId: BigNumber;
  price: BigNumber;
}

export function useOfferMetronion(
  provider: Web3Provider | undefined,
  account: string | null | undefined,
  options?: any,
) {
  return useMutation((params: OfferMetronionParams) => {
    if (provider && account) {
      const signer = provider.getSigner(account);
      return onChainHandler.offerMetronion(
        signer,
        params.metronionId,
        params.price,
      );
    }
    return Promise.reject('web3 not connected');
  }, options);
}

export interface CancelOfferMetronionParams {
  metronionId: BigNumber;
}

export function useCancelOfferMetronion(
  provider: Web3Provider | undefined,
  account: string | null | undefined,
  options?: any,
) {
  return useMutation((params: CancelOfferMetronionParams) => {
    if (provider && account) {
      const signer = provider.getSigner(account);
      return onChainHandler.cancelOfferMetronion(signer, params.metronionId);
    }
    return Promise.reject('web3 not connected');
  }, options);
}

export interface TakeOfferMetronionParams {
  metronionId: BigNumber;
  price: BigNumber;
  buyer: string;
}

export function useTakeOfferMetronion(
  provider: Web3Provider | undefined,
  account: string | null | undefined,
  options?: any,
) {
  return useMutation((params: TakeOfferMetronionParams) => {
    if (provider && account) {
      const signer = provider.getSigner(account);
      return onChainHandler.takeOfferMetronion(
        signer,
        params.metronionId,
        params.price,
        params.buyer,
      );
    }
    return Promise.reject('web3 not connected');
  }, options);
}

export interface BuyMetronionParams {
  metronionId: BigNumber;
  price: BigNumber;
  seller: string;
}

export function useBuyMetronion(
  provider: Web3Provider | undefined,
  account: string | null | undefined,
  options?: any,
) {
  return useMutation((params: BuyMetronionParams) => {
    if (provider && account) {
      const signer = provider.getSigner(account);
      return onChainHandler.buyMetronion(
        signer,
        params.metronionId,
        params.price,
        params.seller,
      );
    }
    return Promise.reject('web3 not connected');
  }, options);
}

export function useGetMetronionActivities(id: number, options?: any) {
  return useQuery<MetronionActivities[], Error>(
    ['metronion-get-metronion-activities', id],
    async (): Promise<MetronionActivities[]> => {
      return fetcher.getMetronionActivities(id);
    },
    options,
  );
}

export function useGetMetronionOffers(id: number, options?: any) {
  return useQuery<MetronionOffers[], Error>(
    ['metronion-get-metronion-offers', id],
    async (): Promise<MetronionOffers[]> => {
      return fetcher.getMetronionOffers(id);
    },
    options,
  );
}
