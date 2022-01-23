import { Accessories, AccessoriesResponse } from './index';
import * as AccessoriesImages from 'src/app/assets/app/accessories';

const ImgUrls = [
  AccessoriesImages.GirlBot1,
  AccessoriesImages.GirlBot2,
  AccessoriesImages.GirlTop1,
  AccessoriesImages.GirlTop2,
  AccessoriesImages.GirlTop3,
  AccessoriesImages.GirlHair1,
  AccessoriesImages.GirlHair2,
  AccessoriesImages.GirlHair3,
  AccessoriesImages.GirlHair4,
];

const AccessoriesArray: Accessories[] = ImgUrls.map((item, index) => {
  const baseCreatedAtTimestamp = 1640970000;
  const baseBlockNumber = 4746545;

  return {
    id: index,
    createAtTimestamp: baseCreatedAtTimestamp + index,
    updatedAtTimestamp: baseCreatedAtTimestamp + index,
    createdAtBlock: baseBlockNumber + index,
    updatedAtBlock: baseBlockNumber + index,
    name: `Item ${index}`,
    totalSupply: 100,
    lastPrice: 0.5,
    currency: 'AVAX',
    owner: '0x09B64e3d589AE90ACCE69C75C346722D8EbFB65D',
    uri: `https://api.metrogalaxy.io/v1.0/accessory_metadata/${index}`,
    image: item,
  };
});

class MockFetcher {
  accessoriesArray: Accessories[];

  constructor() {
    this.accessoriesArray = AccessoriesArray;
  }

  async getAccessories(account: string): Promise<Accessories[]> {
    return this.composeAccessoriesArray(account);
  }

  async getAccessoriesByPage(
    account: string,
    offset: number,
    limit: number,
  ): Promise<AccessoriesResponse> {
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });

    const data = this.composeAccessoriesArray(account);
    return {
      count: data.length,
      offset: offset,
      data: data.slice(offset * limit, offset * limit + limit),
    };
  }

  composeAccessoriesArray(account: string): Accessories[] {
    return this.accessoriesArray.map(item => {
      item.owner = account;
      return item;
    });
  }
}

export default MockFetcher;
