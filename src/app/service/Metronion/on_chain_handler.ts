import { Signer } from '@ethersproject/abstract-signer';
import { ITransactionReceipt } from '../types';
import { ethers, BigNumber } from 'ethers';
import env from 'src/app/config';
import {
  MetroGalaxyMarketplace,
  MetroGalaxyMarketplace__factory,
  MetronionNFT,
  MetronionNFT__factory,
  MetroToken,
  MetroToken__factory,
} from 'src/app/contracts';
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers';
import { DEFAULT_TX_CONFIRMATION_BLOCK } from 'src/app/config/constants';

class MetronionOnChainHandler {
  marketplaceContract: string;
  marketplaceContractABI: ethers.utils.Interface;
  metronionNFTContract: string;
  metronionNFTContractABI: ethers.utils.Interface;
  metroTokenContract: string;
  metroTokenContractABI: ethers.utils.Interface;
  provider: ethers.providers.Provider;
  constructor() {
    this.marketplaceContract = env.marketplace.contractAddress;
    this.marketplaceContractABI = new ethers.utils.Interface(
      MetroGalaxyMarketplace__factory.abi,
    );
    this.metronionNFTContract = env.metronionNFT.contractAddress;
    this.metronionNFTContractABI = new ethers.utils.Interface(
      MetronionNFT__factory.abi,
    );
    this.metroTokenContract = env.metroToken.contractAddress;
    this.metroTokenContractABI = new ethers.utils.Interface(
      MetroToken__factory.abi,
    );
    this.provider = new JsonRpcProvider(env.nodeUrl);
  }

  getMarketplaceContract(
    provider?: ethers.providers.Provider,
  ): MetroGalaxyMarketplace {
    return new ethers.Contract(
      this.marketplaceContract,
      this.marketplaceContractABI,
      provider ? provider : this.provider,
    ) as MetroGalaxyMarketplace;
  }

  getMetronionNFTContract(provider?: ethers.providers.Provider): MetronionNFT {
    return new ethers.Contract(
      this.metronionNFTContract,
      this.metronionNFTContractABI,
      provider ? provider : this.provider,
    ) as MetronionNFT;
  }

  getMetroTokenContract(provider?: ethers.providers.Provider): MetroToken {
    return new ethers.Contract(
      this.metroTokenContract,
      this.metroTokenContractABI,
      provider ? provider : this.provider,
    ) as MetroToken;
  }

  async listMetronion(
    signer: Signer,
    metronionId: BigNumber,
    price: BigNumber,
  ): Promise<ITransactionReceipt> {
    if (!signer.provider) {
      throw new Error('provider not found');
    }
    const marketplaceContract = this.getMarketplaceContract(
      signer.provider as Web3Provider,
    );
    const metronionNFTContract = this.getMetronionNFTContract(
      signer.provider as Web3Provider,
    );

    const account = await signer.getAddress();
    const isApproved = await metronionNFTContract.isApprovedForAll(
      account,
      this.marketplaceContract,
    );

    if (!isApproved) {
      const tx = await metronionNFTContract
        .connect(signer)
        .setApprovalForAll(this.marketplaceContract, true);
      await tx.wait(1);
    }

    const tx = await marketplaceContract
      .connect(signer)
      .list(this.metronionNFTContract, metronionId, price, 1);
    const txReceipt = await tx.wait(DEFAULT_TX_CONFIRMATION_BLOCK);

    return {
      txHash: txReceipt.transactionHash,
      isSuccess: true,
    };
  }

  async delistMetronion(
    signer: Signer,
    metronionId: BigNumber,
  ): Promise<ITransactionReceipt> {
    const marketplaceContract = this.getMarketplaceContract(
      signer.provider as Web3Provider,
    );

    const tx = await marketplaceContract
      .connect(signer)
      .delist(this.metronionNFTContract, metronionId);
    const txReceipt = await tx.wait(DEFAULT_TX_CONFIRMATION_BLOCK);

    return {
      txHash: txReceipt.transactionHash,
      isSuccess: true,
    };
  }

  async offerMetronion(
    signer: Signer,
    metronionId: BigNumber,
    price: BigNumber,
  ): Promise<ITransactionReceipt> {
    const marketplaceContract = this.getMarketplaceContract(
      signer.provider as Web3Provider,
    );
    const metroTokenContract = this.getMetroTokenContract(
      signer.provider as Web3Provider,
    );

    const account = await signer.getAddress();
    const allowance = await metroTokenContract.allowance(
      account,
      this.marketplaceContract,
    );
    if (allowance.lt(price)) {
      const tx = await metroTokenContract
        .connect(signer)
        .approve(this.marketplaceContract, ethers.constants.MaxUint256);
      await tx.wait(1);
    }

    const tx = await marketplaceContract
      .connect(signer)
      .offer(this.metronionNFTContract, metronionId, price, 1);
    const txReceipt = await tx.wait(DEFAULT_TX_CONFIRMATION_BLOCK);

    return {
      txHash: txReceipt.transactionHash,
      isSuccess: true,
    };
  }

  async cancelOfferMetronion(
    signer: Signer,
    metronionId: BigNumber,
  ): Promise<ITransactionReceipt> {
    const marketplaceContract = this.getMarketplaceContract(
      signer.provider as Web3Provider,
    );

    const tx = await marketplaceContract
      .connect(signer)
      .cancelOffer(this.metronionNFTContract, metronionId);
    const txReceipt = await tx.wait(DEFAULT_TX_CONFIRMATION_BLOCK);

    return {
      txHash: txReceipt.transactionHash,
      isSuccess: true,
    };
  }

  async takeOfferMetronion(
    signer: Signer,
    metronionId: BigNumber,
    price: BigNumber,
    buyer: string,
  ): Promise<ITransactionReceipt> {
    const marketplaceContract = this.getMarketplaceContract(
      signer.provider as Web3Provider,
    );
    const metronionNFTContract = this.getMetronionNFTContract(
      signer.provider as Web3Provider,
    );

    const account = await signer.getAddress();
    const isApproved = await metronionNFTContract.isApprovedForAll(
      account,
      this.marketplaceContract,
    );

    if (!isApproved) {
      const tx = await metronionNFTContract
        .connect(signer)
        .setApprovalForAll(this.marketplaceContract, true);
      await tx.wait(1);
    }

    const tx = await marketplaceContract
      .connect(signer)
      .takeOffer(this.metronionNFTContract, metronionId, price, 1, buyer);
    const txReceipt = await tx.wait(DEFAULT_TX_CONFIRMATION_BLOCK);

    return {
      txHash: txReceipt.transactionHash,
      isSuccess: true,
    };
  }

  async buyMetronion(
    signer: Signer,
    metronionId: BigNumber,
    price: BigNumber,
    seller: string,
  ): Promise<ITransactionReceipt> {
    const marketplaceContract = this.getMarketplaceContract(
      signer.provider as Web3Provider,
    );
    const metroTokenContract = this.getMetroTokenContract(
      signer.provider as Web3Provider,
    );

    const account = await signer.getAddress();
    const allowance = await metroTokenContract.allowance(
      account,
      this.marketplaceContract,
    );
    if (allowance.lt(price)) {
      const tx = await metroTokenContract
        .connect(signer)
        .approve(this.marketplaceContract, ethers.constants.MaxUint256);
      await tx.wait(1);
    }

    const tx = await marketplaceContract
      .connect(signer)
      .buy(this.metronionNFTContract, metronionId, seller, price, 1, {
        value: 0,
      });
    const txReceipt = await tx.wait(DEFAULT_TX_CONFIRMATION_BLOCK);

    return {
      txHash: txReceipt.transactionHash,
      isSuccess: true,
    };
  }
}

export default MetronionOnChainHandler;
