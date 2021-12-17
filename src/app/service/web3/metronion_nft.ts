import { ethers } from 'ethers';
import ENV from 'src/app/config/env';
import { MetronionNFT__factory } from 'src/app/contracts/';
import { MetronionNFT } from 'src/app/contracts/MetronionNFT';
import { Web3Provider } from '@ethersproject/providers';

const metronionNFTInterface = new ethers.utils.Interface(
  MetronionNFT__factory.abi,
);

function getMetronionNFTContract(
  provider: Web3Provider | undefined,
): MetronionNFT {
  return new ethers.Contract(
    ENV.METRONION_NFT_CONTRACT,
    metronionNFTInterface,
    provider,
  ) as MetronionNFT;
}

/**
 =========== Methods
 */
export async function fetchMetronionBalance(
  provider: Web3Provider | undefined,
  account: string,
): Promise<number> {
  const contract = getMetronionNFTContract(provider);

  const response: ethers.BigNumber = await contract.balanceOf(account);
  return response.toNumber();
}

export async function totalSupplyWithVersionId(
  provider: Web3Provider | undefined,
  versionId: number,
): Promise<number> {
  const contract = getMetronionNFTContract(provider);

  const response: ethers.BigNumber = await contract.totalSupplyWithVersionId(
    versionId,
  );
  return response.toNumber();
}
