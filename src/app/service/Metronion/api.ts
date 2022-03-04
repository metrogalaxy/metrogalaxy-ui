import {
  MetronionFilterParams,
  MetronionInfo,
  MetronionsResponse,
  MetronionInfoResponse,
  MetronionActivities,
  MetronionActivitiesResponse,
  MetronionOffers,
  MetronionOffersResponse,
} from './index';
import axios from 'axios';
import {
  GENDER,
  STATUS,
  DEFAULT_TX_CONFIRMATION_BLOCK,
} from 'src/app/config/constants';
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
import { Signer } from '@ethersproject/abstract-signer';
import { ITransactionReceipt } from '../types';

export interface IGetMetronionByPageParams {
  account?: string;
  offset: number;
  limit: number;
  sort: string;
  id?: number;
  gender?: GENDER[];
  status?: STATUS[];
  stat?: Record<string, number[]>;
}

class ApiFetcher {
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

  async getMetronionsByPage(
    offset: number,
    limit: number,
    filter: MetronionFilterParams,
  ): Promise<MetronionsResponse> {
    const params: IGetMetronionByPageParams = {
      offset,
      limit,
      sort: filter.sort,
    };

    if (filter.account) {
      params.account = filter.account;
    }
    if (filter.id !== undefined && filter.id !== null) {
      if (typeof filter.id === 'string') {
        params.id = parseInt(filter.id);
      } else {
        params.id = filter.id;
      }
    }
    if (filter.gender && filter.gender.length > 0) {
      params.gender = filter.gender;
    }
    if (filter.status && filter.status.length > 0) {
      params.status = filter.status;
    }
    if (filter.stat && filter.gender.length > 0) {
      params.stat = filter.stat;
    }

    const response = await axios.post<MetronionsResponse>(
      '/v1/metronion/list',
      params,
    );
    return response.data;
  }

  async getMetronionInfo(id: number): Promise<MetronionInfo> {
    const response = await axios.get<MetronionInfoResponse>(
      '/v1/metronion/metronionInfo',
      {
        params: {
          id: id,
        },
      },
    );
    return response.data.data;
  }

  async getMetronionActivities(id: number): Promise<MetronionActivities[]> {
    const response = await axios.get<MetronionActivitiesResponse>(
      '/v1/metronion/activities',
      {
        params: {
          id: id,
        },
      },
    );
    return response.data.data;
  }

  async getMetronionOffers(id: number): Promise<MetronionOffers[]> {
    const response = await axios.get<MetronionOffersResponse>(
      '/v1/metronion/offers',
      {
        params: {
          id: id,
        },
      },
    );
    return response.data.data;
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

export default ApiFetcher;
