import { Signer } from '@ethersproject/abstract-signer';
import { SaleRecord, UserSaleRecord } from './index';
import { BigNumber } from 'ethers';
import { ITransactionReceipt } from '../types';
import env from 'src/app/config';

enum Round {
  PRESALE = 'presale',
  PRIVATE = 'private',
  PUBLIC = 'public',
  ENDED = 'ended',
}

const PRIVATE_CAP = env.metronionSale.privateCap;
const PUBLIC_CAP = env.metronionSale.publicCap;

class MockFetcher {
  totalSold: number;
  privateSold: number;
  publicSold: number;
  ownerBought: number;

  userSaleRecords: Record<string, UserSaleRecord>;
  round: Round;

  constructor() {
    this.totalSold = 0;
    this.privateSold = 0;
    this.publicSold = 0;
    this.ownerBought = 0;
    this.userSaleRecords = {};

    const now = Date.now();
    if (now < env.metronionSale.privateSaleTime.getTime()) {
      this.round = Round.PRESALE;
    } else if (
      now >= env.metronionSale.privateSaleTime.getTime() &&
      now < env.metronionSale.publicSaleTime.getTime()
    ) {
      this.round = Round.PRIVATE;
    } else if (
      now >= env.metronionSale.publicSaleTime.getTime() &&
      now < env.metronionSale.endSaleTime.getTime()
    ) {
      this.round = Round.PUBLIC;
    } else {
      this.round = Round.ENDED;
      this.totalSold = 10000;
    }
  }

  async isWhitelistedAddress(__: string): Promise<boolean> {
    return false;
  }

  async getSaleRecord(): Promise<SaleRecord> {
    return {
      totalSold: this.totalSold,
      privateSold: this.privateSold,
      publicSold: this.publicSold,
      ownerBought: this.ownerBought,
    };
  }

  async getUserRecord(account: string): Promise<UserSaleRecord> {
    if (!this.userSaleRecords[account]) {
      this.userSaleRecords[account] = {
        privateBought: 0,
        publicBought: 0,
      };
    }

    return {
      privateBought: this.userSaleRecords[account].privateBought,
      publicBought: this.userSaleRecords[account].publicBought,
    };
  }

  async buyMetronion(
    signer: Signer,
    amount: BigNumber,
    __: BigNumber,
  ): Promise<ITransactionReceipt> {
    const account = await signer.getAddress();

    if (this.round === Round.PRESALE) {
      throw new Error('sale not started');
    } else if (this.round === Round.ENDED) {
      throw new Error('sale ended');
    } else if (this.round === Round.PRIVATE) {
      const bought = this.userSaleRecords[account].privateBought;
      if (amount.add(bought).gt(PRIVATE_CAP)) {
        throw new Error('amount exceed private cap');
      }
    } else if (this.round === Round.PUBLIC) {
      const bought = this.userSaleRecords[account].publicBought;
      if (amount.add(bought).gt(PUBLIC_CAP)) {
        throw new Error('amount exceed public cap');
      }
    }

    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => {
      if (this.round === Round.PRIVATE) {
        this.userSaleRecords[account].privateBought += amount.toNumber();
        this.privateSold += amount.toNumber();
      } else {
        this.userSaleRecords[account].publicBought += amount.toNumber();
        this.publicSold += amount.toNumber();
      }
      this.totalSold += amount.toNumber();

      return {
        txHash:
          '0xb7abb4c5fda4289b5697a821aaddbc6b4353670cb319511de887aa9f5bc1dedb',
        isSuccess: true,
      };
    });

    // throw new Error('node error');
  }
}

export default MockFetcher;
