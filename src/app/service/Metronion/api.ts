import {
  MetronionFilterParams,
  MetronionInfo,
  Metronions,
  MetronionsResponse,
  MetronionInfoResponse,
  MetronionActivities,
  MetronionActivitiesResponse,
  MetronionOffers,
  MetronionOffersResponse,
} from './index';
import axios from 'axios';
import { GENDER } from 'src/app/config/constants';

export interface IGetMetronionByPageParams {
  account: string;
  offset: number;
  limit: number;
  sort: string;
  id?: number;
  gender?: GENDER[];
  stat?: Record<string, number[]>;
}

class ApiFetcher {
  async getMetronionsByPage(
    account: string,
    offset: number,
    limit: number,
    filter: MetronionFilterParams,
  ): Promise<MetronionsResponse> {
    const params: IGetMetronionByPageParams = {
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

    const response = await axios.post<MetronionsResponse>(
      '/v1/metronion/metronionByOwner',
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
}

export default ApiFetcher;
