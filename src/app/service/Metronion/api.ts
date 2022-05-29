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
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {}

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
      '/api/v1/metronion/list',
      params,
    );
    return response.data;
  }

  async getMetronionInfo(id: number): Promise<MetronionInfo> {
    const response = await axios.get<MetronionInfoResponse>(
      `/api/v1/metronion/${id}`,
    );
    return response.data;
  }

  async getMetronionActivities(id: number): Promise<MetronionActivities[]> {
    const response = await axios.get<MetronionActivitiesResponse>(
      '/api/v1/metronion/activities',
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
      '/api/v1/metronion/offers',
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
