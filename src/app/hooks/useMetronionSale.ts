import { useQuery, useMutation } from 'react-query';
import { Web3Provider } from '@ethersproject/providers';
import Fetcher, {
  UserSaleRecord,
  SaleRecord,
} from 'src/app/service/MetronionSale';
import { BigNumber } from 'ethers';

export interface BuyMetronionParams {
  amount: BigNumber;
  totalPaid: BigNumber;
}

export function useIsWhitelistedAddress(
  provider: Web3Provider | undefined,
  account: string,
  options?: any,
) {
  return useQuery<boolean, Error>(
    ['metronion-sale-is-whitelisted', account],
    async (): Promise<boolean> => {
      return Fetcher.isWhitelistedAddress(provider, account);
    },
    options,
  );
}

export function useGetUserRecord(
  provider: Web3Provider | undefined,
  account: string,
  options?: any,
) {
  return useQuery<UserSaleRecord, Error>(
    ['metronion-sale-user-sale-record', account],
    async (): Promise<UserSaleRecord> => {
      return Fetcher.getUserRecord(provider, account);
    },
    options,
  );
}

export function useGetSaleRecord(
  provider: Web3Provider | undefined,
  options?: any,
) {
  return useQuery<SaleRecord, Error>(
    ['metronion-sale-sale-record'],
    async (): Promise<SaleRecord> => {
      return Fetcher.getSaleRecord(provider);
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
      return Fetcher.buyMetronion(signer, params.amount, params.totalPaid);
    }
    return Promise.reject('web3 not connected');
  });
}
