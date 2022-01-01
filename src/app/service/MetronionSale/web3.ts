import env from 'src/app/config';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { MetronionSale__factory } from 'src/app/contracts/';
import {
  MetronionSale,
  UserRecordStructOutput,
  SaleRecordStructOutput,
} from 'src/app/contracts/MetronionSale';
import { Signer } from '@ethersproject/abstract-signer';
import { SaleRecord, UserSaleRecord } from './index';
import { BigNumber } from 'ethers';
import { ITransactionReceipt } from '../types';

class Web3Fetcher {
  metronionSaleContract: string;
  metronionSaleABI: ethers.utils.Interface;

  constructor() {
    this.metronionSaleContract = env.metronionSale.contractAddress;
    this.metronionSaleABI = new ethers.utils.Interface(
      MetronionSale__factory.abi,
    );
  }

  getMetronionSaleContract(provider: Web3Provider | undefined): MetronionSale {
    return new ethers.Contract(
      this.metronionSaleContract,
      this.metronionSaleABI,
      provider,
    ) as MetronionSale;
  }

  async isWhitelistedAddress(
    provider: Web3Provider | undefined,
    account: string,
  ): Promise<boolean> {
    const contract = this.getMetronionSaleContract(provider);
    const response: boolean = await contract.isWhitelistedAddress(account);
    return response;
  }

  async getSaleRecord(provider: Web3Provider | undefined): Promise<SaleRecord> {
    const contract = this.getMetronionSaleContract(provider);
    const response: SaleRecordStructOutput = await contract.getSaleRecord();

    return {
      totalSold: response.totalSold.toNumber(),
      privateSold: response.privateSold.toNumber(),
      publicSold: response.publicSold.toNumber(),
      ownerBought: response.ownerBought.toNumber(),
    };
  }

  async getUserRecord(
    provider: Web3Provider | undefined,
    account: string,
  ): Promise<UserSaleRecord> {
    const contract = this.getMetronionSaleContract(provider);
    const response: UserRecordStructOutput = await contract.getUserRecord(
      account,
    );
    return {
      privateBought: response.privateBought.toNumber(),
      publicBought: response.publicBought.toNumber(),
    };
  }

  async buyMetronion(
    signer: Signer,
    amount: BigNumber,
    totalPaid: BigNumber,
  ): Promise<ITransactionReceipt> {
    if (!signer.provider) {
      throw new Error('provider not found');
    }
    const contract = this.getMetronionSaleContract(
      signer.provider as Web3Provider,
    );
    const tx = await contract.connect(signer).buy(amount, {
      value: ethers.utils.parseEther(totalPaid.toString()),
    });

    const txReceipt = await tx.wait(1);
    return {
      txHash: txReceipt.transactionHash,
      isSuccess: true,
    };
  }
}

export default Web3Fetcher;
