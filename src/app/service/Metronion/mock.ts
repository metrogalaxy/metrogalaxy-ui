import {
  MetronionFilterParams,
  MetronionInfo,
  Metronions,
  MetronionsResponse,
  MetronionActivities,
  MetronionOffers,
} from './index';
import * as MetronionImages from 'src/app/pages/LandingPage/assets/metronion';
import env from 'src/app/config';
import { ACTIVITIY_TYPE } from 'src/app/config/constants';

const ImgUrls = [
  MetronionImages.MetronionMale1,
  MetronionImages.MetronionFemale1,
  MetronionImages.MetronionMale2,
  MetronionImages.MetronionFemale2,
  MetronionImages.MetronionMale3,
  MetronionImages.MetronionFemale3,
  MetronionImages.MetronionMale4,
  MetronionImages.MetronionFemale4,
  MetronionImages.MetronionMale5,
  MetronionImages.MetronionFemale5,
];

const MetronionsArray: Metronions[] = ImgUrls.map((item, index) => {
  const baseCreatedAtTimestamp = 1640970000;
  const baseBlockNumber = 4746545;

  return {
    id: index,
    createAtTimestamp: baseCreatedAtTimestamp + index,
    updatedAtTimestamp: baseCreatedAtTimestamp + index,
    createdAtBlock: baseBlockNumber + index,
    updatedAtBlock: baseBlockNumber + index,
    name: `Metronion ${index}`,
    versionId: 0,
    gender: index % 2 === 0 ? 'male' : 'female',
    owner: '0x09B64e3d589AE90ACCE69C75C346722D8EbFB65D',
    lastPrice: 1 + index * 0.1,
    currency: env.chainToken,
    uri: `https://api.metrogalaxy.io/v1.0/metronion_metadata/${index}`,
    image: item,
    accessoryIds: [],
  };
});

class MockFetcher {
  metronionsArray: Metronions[];
  constructor() {
    this.metronionsArray = MetronionsArray;
  }

  async getMetronionInfo(id: number): Promise<MetronionInfo> {
    const results = this.metronionsArray.filter(item => item.id === id);
    if (results.length === 0) {
      throw new Error('no metronion found');
    }
    const item = results[0];
    return {
      id: item.id,
      createAtTimestamp: item.createAtTimestamp,
      updatedAtTimestamp: item.updatedAtTimestamp,
      createdAtBlock: item.createdAtBlock,
      updatedAtBlock: item.updatedAtBlock,
      name: item.name,
      versionId: item.versionId,
      gender: item.gender,
      owner: item.owner,
      lastPrice: item.lastPrice,
      currency: item.currency,
      uri: item.uri,
      image:
        'https://metrogalaxy-storage.s3.ap-southeast-1.amazonaws.com/S_1.png',
      accessoryIds: item.accessoryIds,
    };
  }

  async getMetronions(account: string): Promise<Metronions[]> {
    return this.composeMetronionArray(account);
  }

  async getMetronionsByPage(
    account: string,
    offset: number,
    limit: number,
    filter: MetronionFilterParams,
  ): Promise<MetronionsResponse> {
    console.log(filter);

    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });

    const data = this.composeMetronionArray(account);

    // return {
    //   timestamp: 1640970000,
    //   count: 0,
    //   data: [],
    // };

    return {
      timestamp: 1640970000,
      count: data.length,
      data: data.slice(offset * limit, offset * limit + limit),
    };
  }

  async getMetronionActivities(id: number): Promise<MetronionActivities[]> {
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    return [
      {
        id: id,
        activityType: ACTIVITIY_TYPE.MINT,
        from: '0x09B64e3d589AE90ACCE69C75C346722D8EbFB65D',
        to: '0x2CDbB4ae2bc4CBa896FD8aBc526D4ac0F459C33B',
        timestamp: 1640970000,
        blockNumber: 4746545,
      },
      {
        id: id,
        activityType: ACTIVITIY_TYPE.TRANSFER,
        from: '0x2CDbB4ae2bc4CBa896FD8aBc526D4ac0F459C33B',
        to: '0x9bA0E58997182E6d09B736F3de9Dc58F93250578',
        timestamp: 1642416665,
        blockNumber: 4766545,
      },
      {
        id: id,
        activityType: ACTIVITIY_TYPE.OFFER,
        from: '0x6Af3E39171611c3659df320Ae98cb9f2be3209FD',
        to: '0x9bA0E58997182E6d09B736F3de9Dc58F93250578',
        timestamp: 1642417016,
        blockNumber: 4768545,
        price: 1.2,
      },
    ];
  }

  async getMetronionOffers(id: number): Promise<MetronionOffers[]> {
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });

    console.log(id);
    return [
      {
        id: id,
        from: '0x09B64e3d589AE90ACCE69C75C346722D8EbFB65D',
        to: '0x2CDbB4ae2bc4CBa896FD8aBc526D4ac0F459C33B',
        price: 0.12345,
        timestamp: 1640970000,
        blockNumber: 4746545,
      },
      {
        id: id,
        from: '0x6Af3E39171611c3659df320Ae98cb9f2be3209FD',
        to: '0x2CDbB4ae2bc4CBa896FD8aBc526D4ac0F459C33B',
        price: 1.24565,
        timestamp: 1642416665,
        blockNumber: 4766545,
      },
    ];
  }

  composeMetronionArray(account: string): Metronions[] {
    return this.metronionsArray.map(item => {
      item.owner = account;
      return item;
    });
  }
}

export default MockFetcher;
