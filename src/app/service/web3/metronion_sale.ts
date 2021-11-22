import { ethers } from 'ethers';
import ENV from 'src/app/config/env';
import { MetronionSale__factory } from 'src/app/contracts/';
import {
  MetronionSale,
  SaleConfigStructOutput,
  UserRecordStructOutput,
  SaleRecordStructOutput,
} from 'src/app/contracts/MetronionSale';
import { Web3Provider } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';

const metronionSaleInterface = new ethers.utils.Interface(
  MetronionSale__factory.abi,
);

function getMetronionSaleContract(
  provider: Web3Provider | undefined,
): MetronionSale {
  return new ethers.Contract(
    ENV.METRONION_SALE_CONTRACT,
    metronionSaleInterface,
    provider,
  ) as MetronionSale;
}

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

export async function fetchSaleConfig(
  provider: Web3Provider | undefined,
  versionId: number,
): Promise<SaleConfig> {
  const contract = getMetronionSaleContract(provider);

  const response: SaleConfigStructOutput = await contract.getSaleConfig(
    versionId,
  );
  const saleConfig: SaleConfig = {
    privateTime: new Date(response.privateTime.toNumber() * 1000),
    publicTime: new Date(response.publicTime.toNumber() * 1000),
    endTime: new Date(response.endTime.toNumber() * 1000),
  };

  return saleConfig;
}

export async function isWhitelistedAddress(
  provider: Web3Provider | undefined,
  versionId: number,
  address: string,
): Promise<boolean> {
  const contract = getMetronionSaleContract(provider);
  const response: boolean = await contract.isWhitelistedAddress(
    versionId,
    address,
  );
  return response;
}

export async function getUserRecord(
  provider: Web3Provider | undefined,
  versionId: number,
  address: string,
): Promise<UserSaleRecord> {
  const contract = getMetronionSaleContract(provider);
  const response: UserRecordStructOutput = await contract.getUserRecord(
    versionId,
    address,
  );
  return {
    privateBought: response.privateBought.toNumber(),
    publicBought: response.publicBought.toNumber(),
  };
}

export async function getSaleRecord(
  provider: Web3Provider | undefined,
  versionId: number,
): Promise<SaleRecord> {
  const contract = getMetronionSaleContract(provider);
  const response: SaleRecordStructOutput = await contract.getSaleRecord(
    versionId,
  );

  return {
    totalSold: response.totalSold.toNumber(),
    privateSold: response.privateSold.toNumber(),
    publicSold: response.publicSold.toNumber(),
    ownerBought: response.ownerBought.toNumber(),
  };
}

export async function buyMetronion(
  signer: Signer,
  versionId: number,
  amount: string,
  totalPaid: string,
): Promise<string> {
  const contract = new ethers.Contract(
    ENV.METRONION_SALE_CONTRACT,
    metronionSaleInterface,
  ) as MetronionSale;

  const tx = await contract.connect(signer).buy(versionId, amount, {
    value: ethers.utils.parseEther(totalPaid),
  });

  const txReceipt = await tx.wait(1);
  return txReceipt.transactionHash;
}
