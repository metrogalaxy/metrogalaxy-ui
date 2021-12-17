import { useQuery } from 'react-query';
import { Web3Provider } from '@ethersproject/providers';
import {
  fetchMetronionBalance,
  totalSupplyWithVersionId,
} from './metronion_nft';

export function useFetchMetronionBalance(
  provider: Web3Provider | undefined,
  account: string,
  options?: any,
) {
  return useQuery<number, Error>(
    ['metronion-nft-balance', account],
    async (): Promise<number> => {
      return fetchMetronionBalance(provider, account);
    },
    options,
  );
}

export function useTotalSupplyWithVersionId(
  provider: Web3Provider | undefined,
  versionId: number,
  options?: any,
) {
  return useQuery<number, Error>(
    ['metronion-nft-total-supply-with-version', versionId],
    async (): Promise<number> => {
      return totalSupplyWithVersionId(provider, versionId);
    },
    options,
  );
}
