import { useQuery } from 'react-query';
import { Web3Provider } from '@ethersproject/providers';
import {
  fetchSaleConfig,
  SaleConfig,
  UserSaleRecord,
  getSaleRecord,
  getUserRecord,
  isWhitelistedAddress,
  SaleRecord,
} from './metronion_sale';

export function useFetchSaleConfig(
  provider: Web3Provider | undefined,
  versionId: number,
  options?: any,
) {
  return useQuery<SaleConfig, Error>(
    ['metronion-sale-config', versionId],
    async (): Promise<SaleConfig> => {
      return fetchSaleConfig(provider, versionId);
    },
    options,
  );
}

export function useIsWhitelistedAddress(
  provider: Web3Provider | undefined,
  versionId: number,
  address: string,
  options?: any,
) {
  return useQuery<boolean, Error>(
    ['metronion-is-whitelisted-address', versionId, address],
    async (): Promise<boolean> => {
      return isWhitelistedAddress(provider, versionId, address);
    },
    options,
  );
}

export function useGetUserRecord(
  provider: Web3Provider | undefined,
  versionId: number,
  address: string,
  options?: any,
) {
  return useQuery<UserSaleRecord, Error>(
    ['metronion-user-sale-record', versionId, address],
    async (): Promise<UserSaleRecord> => {
      return getUserRecord(provider, versionId, address);
    },
    options,
  );
}

export function useGetSaleRecord(
  provider: Web3Provider | undefined,
  versionId: number,
  options?: any,
) {
  return useQuery<SaleRecord, Error>(
    ['metronion-sale-record', versionId],
    async (): Promise<SaleRecord> => {
      return getSaleRecord(provider, versionId);
    },
    options,
  );
}
