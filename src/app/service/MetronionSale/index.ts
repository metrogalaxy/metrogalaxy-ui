import env from 'src/app/config';
import { Web3Provider } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from 'ethers';
import { ITransactionReceipt } from '../types';

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

/**
 =========== Methods
 */

export interface MetronionSaleFetcher {
  isWhitelistedAddress: (
    provider: Web3Provider | undefined,
    account: string,
  ) => Promise<boolean>;
  getSaleRecord: (provider: Web3Provider | undefined) => Promise<SaleRecord>;
  getUserRecord: (
    provider: Web3Provider | undefined,
    account: string,
  ) => Promise<UserSaleRecord>;
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
