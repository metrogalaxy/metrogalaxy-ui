import env from 'src/app/config';
import { Web3Provider } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from 'ethers';
import { ITransactionReceipt } from '../types';
import { useQuery, useMutation } from 'react-query';

/**
 ========= Interfaces
 */

export interface SaleConfig {
  privateTime: Date;
  publicTime: Date;
  endTime: Date;
}

export interface UserSaleRecord {
  privateBought: number;
  publicBought: number;
}

export interface SaleRecord {
  totalSold: number;
  privateSold: number;
  publicSold: number;
  ownerBought: number;
}

export interface MetronionSaleFetcher {
  isWhitelistedAddress: (account: string) => Promise<boolean>;
  getSaleRecord: () => Promise<SaleRecord>;
  getUserRecord: (account: string) => Promise<UserSaleRecord>;
  buyMetronion: (
    signer: Signer,
    amount: BigNumber,
    totalPaid: BigNumber,
  ) => Promise<ITransactionReceipt>;
}

let fetcher: MetronionSaleFetcher;

if (env.useMockData) {
  const Fetcher = require('./mock.ts').default;
  fetcher = new Fetcher();
} else {
  const Fetcher = require('./web3.ts').default;
  fetcher = new Fetcher();
}

export default fetcher;

/**
 =========== Methods
 */

export interface BuyMetronionParams {
  amount: BigNumber;
  totalPaid: BigNumber;
}

export function useIsWhitelistedAddress(account: string, options?: any) {
  return useQuery<boolean, Error>(
    ['metronion-sale-is-whitelisted', account],
    async (): Promise<boolean> => {
      return fetcher.isWhitelistedAddress(account);
    },
    options,
  );
}

export function useGetUserRecord(account: string, options?: any) {
  return useQuery<UserSaleRecord, Error>(
    ['metronion-sale-user-sale-record', account],
    async (): Promise<UserSaleRecord> => {
      return fetcher.getUserRecord(account);
    },
    options,
  );
}

export function useGetSaleRecord(options?: any) {
  return useQuery<SaleRecord, Error>(
    ['metronion-sale-sale-record'],
    async (): Promise<SaleRecord> => {
      return fetcher.getSaleRecord();
    },
    options,
  );
}

export function useBuyMetronion(
  provider: Web3Provider | undefined,
  account: string | null | undefined,
) {
  return useMutation((params: BuyMetronionParams) => {
    if (provider && account) {
      const signer = provider.getSigner(account);
      return fetcher.buyMetronion(signer, params.amount, params.totalPaid);
    }
    return Promise.reject('web3 not connected');
  });
}
