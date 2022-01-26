import env from 'src/app/config';
import { ethers } from 'ethers';
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';
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
  provider: ethers.providers.Provider;

  constructor() {
    this.metronionSaleContract = env.metronionSale.contractAddress;
    this.metronionSaleABI = new ethers.utils.Interface(
      MetronionSale__factory.abi,
    );
    this.provider = new JsonRpcProvider(env.nodeUrl);
  }

  getMetronionSaleContract(
    provider?: ethers.providers.Provider,
  ): MetronionSale {
    return new ethers.Contract(
      this.metronionSaleContract,
      this.metronionSaleABI,
      provider ? provider : this.provider,
    ) as MetronionSale;
  }

  async isWhitelistedAddress(account: string): Promise<boolean> {
    const contract = this.getMetronionSaleContract();
    const response: boolean = await contract.isWhitelistedAddress(account);
    return response;
  }

  async getSaleRecord(): Promise<SaleRecord> {
    const contract = this.getMetronionSaleContract();
    const response: SaleRecordStructOutput = await contract.getSaleRecord();

    return {
      totalSold: response.totalSold.toNumber(),
      privateSold: response.privateSold.toNumber(),
      publicSold: response.publicSold.toNumber(),
      ownerBought: response.ownerBought.toNumber(),
    };
  }

  async getUserRecord(account: string): Promise<UserSaleRecord> {
    const contract = this.getMetronionSaleContract();
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
