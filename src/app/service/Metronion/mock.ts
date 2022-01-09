import { MetronionFilterParams, Metronions, MetronionsResponse } from './index';
import * as MetronionImages from 'src/app/pages/LandingPage/assets/metronion';
import env from 'src/app/config';

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

  return {
    id: index,
    createAtTimestamp: baseCreatedAtTimestamp + index,
    updatedAtTimestamp: baseCreatedAtTimestamp + index,
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

    return {
      count: data.length,
      offset: offset,
      data: data.slice(offset * limit, offset * limit + limit),
    };
  }

  composeMetronionArray(account: string): Metronions[] {
    return this.metronionsArray.map(item => {
      item.owner = account;
      return item;
    });
  }
}

export default MockFetcher;
