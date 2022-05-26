import {
  MetronionFilterParams,
  MetronionInfo,
  MetronionsResponse,
  MetronionActivities,
  MetronionOffers,
} from './index';
import { Signer } from '@ethersproject/abstract-signer';
import { ITransactionReceipt } from '../types';
import { BigNumber } from 'ethers';

import MockListMetronion from './mock_list_metronion.json';
import MockMetronionActivities from './mock_list_activities.json';
import MockMetronionOffers from './mock_list_offers.json';

class MockFetcher {
  async getMetronionInfo(id: number): Promise<MetronionInfo> {
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });
    console.log(id);

    // const filterList = MockListMetronion.data.filter(item => item.id === id);
    // if (filterList.length > 0) {
    //   return {
    //     ...filterList[0],
    //   };
    // }
    throw new Error('metronion not found');
  }

  async getMetronionsByPage(
    _: number,
    __: number,
    filter: MetronionFilterParams,
  ): Promise<MetronionsResponse> {
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });
    console.log(filter);

    // if (filter.account) {
    //   return {
    //     timestamp: MockListMetronion.timestamp,
    //     count: MockListMetronion.count,
    //     data: MockListMetronion.data.map(item => ({
    //       ...item,
    //       owner: filter.account!,
    //     })),
    //   };
    // }
    // return MockListMetronion;
    throw new Error('not implemented');
  }

  async getMetronionActivities(id: number): Promise<MetronionActivities[]> {
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });

    console.log(id);
    throw new Error('not implemented');
    // return MockMetronionActivities.data.map(item => ({
    //   ...item,
    //   id: id,
    // }));
  }

  async getMetronionOffers(id: number): Promise<MetronionOffers[]> {
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });

    console.log(id);
    throw new Error('not implemented');
    // return MockMetronionOffers.data.map(item => ({
    //   ...item,
    //   id: id,
    // }));
  }

  async listMetronion(
    _: Signer,
    metronionId: BigNumber,
    price: BigNumber,
  ): Promise<ITransactionReceipt> {
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    console.log(
      `list metronion, metronionId = ${metronionId}, price = ${price}`,
    );
    return {
      txHash:
        '0xb7abb4c5fda4289b5697a821aaddbc6b4353670cb319511de887aa9f5bc1dedb',
      isSuccess: true,
    };
  }

  async delistMetronion(
    _: Signer,
    metronionId: BigNumber,
  ): Promise<ITransactionReceipt> {
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    console.log(`delist metronion, metronionId = ${metronionId}`);

    return {
      txHash:
        '0xb7abb4c5fda4289b5697a821aaddbc6b4353670cb319511de887aa9f5bc1dedb',
      isSuccess: true,
    };
  }

  async offerMetronion(
    _: Signer,
    metronionId: BigNumber,
    price: BigNumber,
  ): Promise<ITransactionReceipt> {
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    console.log(
      `offer metronion, metronionId = ${metronionId}, price = ${price}`,
    );

    return {
      txHash:
        '0xb7abb4c5fda4289b5697a821aaddbc6b4353670cb319511de887aa9f5bc1dedb',
      isSuccess: true,
    };
  }

  async cancelOfferMetronion(
    _: Signer,
    metronionId: BigNumber,
  ): Promise<ITransactionReceipt> {
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    console.log(`cancel offer metronion, metronionId = ${metronionId},`);
    return {
      txHash:
        '0xb7abb4c5fda4289b5697a821aaddbc6b4353670cb319511de887aa9f5bc1dedb',
      isSuccess: true,
    };
  }

  async takeOfferMetronion(
    _: Signer,
    metronionId: BigNumber,
    price: BigNumber,
    buyer: string,
  ): Promise<ITransactionReceipt> {
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    console.log(
      `take offer metronion, metronionId = ${metronionId}, price = ${price}, buyer = ${buyer}`,
    );

    return {
      txHash:
        '0xb7abb4c5fda4289b5697a821aaddbc6b4353670cb319511de887aa9f5bc1dedb',
      isSuccess: true,
    };
  }

  async buyMetronion(
    _: Signer,
    metronionId: BigNumber,
    price: BigNumber,
    seller: string,
  ): Promise<ITransactionReceipt> {
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    console.log(
      `buy metronion, metronionId = ${metronionId}, price = ${price}, seller = ${seller}`,
    );

    return {
      txHash:
        '0xb7abb4c5fda4289b5697a821aaddbc6b4353670cb319511de887aa9f5bc1dedb',
      isSuccess: true,
    };
  }
}

export default MockFetcher;
