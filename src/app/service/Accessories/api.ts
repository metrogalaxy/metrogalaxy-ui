import { AccessoriesResponse, AccessoriesFilterParams } from './index';
import { ACCESSORY_TYPE, RARITY, GENDER } from 'src/app/config/constants';
import axios from 'axios';

export interface IGetAccessoriesByPageParams {
  account: string;
  offset: number;
  limit: number;
  sort: string;
  id?: number;
  gender?: GENDER[];
  stat?: Record<string, number[]>;
  accessoryType?: ACCESSORY_TYPE;
  rarity?: RARITY;
}

class ApiFetcher {
  async getAccessoriesByPage(
    account: string,
    offset: number,
    limit: number,
    filter: AccessoriesFilterParams,
  ): Promise<AccessoriesResponse> {
    const params: IGetAccessoriesByPageParams = {
      account,
      offset,
      limit,
      sort: filter.sort,
    };

    if (filter.id) {
      params.id = filter.id;
    }
    if (filter.gender && filter.gender.length > 0) {
      params.gender = filter.gender;
    }
    if (filter.stat && filter.gender.length > 0) {
      params.stat = filter.stat;
    }
    if (filter.accessoryType) {
      params.accessoryType = filter.accessoryType;
    }
    if (filter.rarity) {
      params.rarity = filter.rarity;
    }

    const response = await axios.post<AccessoriesResponse>(
      '/v1/accessories/list',
      params,
    );
    return response.data;
  }
}

export default ApiFetcher;
