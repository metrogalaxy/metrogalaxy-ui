import { grpc } from '@improbable-eng/grpc-web';

import {
  MetronionFilterParams,
  MetronionInfo,
  MetronionsResponse,
  MetronionActivities,
  MetronionOffers,
} from './index';
import env from 'src/app/config';
import {
  UInt64Value,
  StringValue,
} from 'google-protobuf/google/protobuf/wrappers_pb';
import { Value, ListValue } from 'google-protobuf/google/protobuf/struct_pb';
import {
  GetMetadataRequest,
  GetMetadataResponse,
  GetListMetadataRequest,
  GetListMetadataResponse,
  GetMetronionActivitiesRequest,
  GetMetronionActivitiesResponse,
  GetMetronionOffersRequest,
  GetMetronionOffersResponse,
} from 'src/proto/metronion/v1/metronion_pb';
import { MetronionService } from 'src/proto/metronion/v1/metronion_pb_service';

class GrpcFetcher {
  grpcEndpoint: string;

  constructor() {
    this.grpcEndpoint = env.api.grpcEndpoint;
  }

  async getMetronionInfo(id: number): Promise<MetronionInfo> {
    const request = new GetMetadataRequest();
    request.setId(new UInt64Value().setValue(id));

    return new Promise<MetronionInfo>((resolve, reject) => {
      grpc.invoke(MetronionService.GetMetadata, {
        request,
        host: this.grpcEndpoint,
        onMessage: (message: GetMetadataResponse) => {
          console.log(message.toObject());
          const res = message.toObject();
          resolve({
            ...res,
            wearables: res.wearablesList,
          });
        },
        onEnd: (
          statusCode: grpc.Code,
          statusMsg: string | undefined,
          _: grpc.Metadata,
        ) => {
          console.log(statusMsg);
          if (statusCode !== grpc.Code.OK) {
            reject(statusMsg);
          }
        },
      });
    });
  }

  async getMetronionsByPage(
    offset: number,
    limit: number,
    filter: MetronionFilterParams,
  ): Promise<MetronionsResponse> {
    const request = new GetListMetadataRequest();

    if (filter.account) {
      request.setAccount(new StringValue().setValue(filter.account));
    }
    if (filter.id) {
      request.setId(new UInt64Value().setValue(filter.id));
    }
    request.setOffset(offset);
    request.setLimit(limit);
    request.setSort(filter.sort);
    request.setGenderList(filter.gender);
    request.setStatusList(filter.status);
    const statMap = request.getStatMap();

    // set stat in request
    for (const key in filter.stat) {
      const listStat = filter.stat[key].map(item => {
        return new Value().setNumberValue(item);
      });
      statMap.set(key, new ListValue().setValuesList(listStat));
    }

    return new Promise<MetronionsResponse>((resolve, reject) => {
      grpc.invoke(MetronionService.GetListMetadata, {
        request: request,
        host: this.grpcEndpoint,
        onMessage: (message: GetListMetadataResponse) => {
          const result = message.toObject();
          resolve({
            ...result,
            data: ConvertListMetadata(result.dataList),
          });
        },
        onEnd: (
          statusCode: grpc.Code,
          statusMsg: string | undefined,
          _: grpc.Metadata,
        ) => {
          if (statusCode !== grpc.Code.OK) {
            reject(statusMsg);
          }
        },
      });
    });
  }

  async getMetronionActivities(id: number): Promise<MetronionActivities[]> {
    const request = new GetMetronionActivitiesRequest();
    request.setId(new UInt64Value().setValue(id));

    return new Promise<MetronionActivities[]>((resolve, reject) => {
      grpc.invoke(MetronionService.GetMetronionActivities, {
        request,
        host: this.grpcEndpoint,
        onMessage: (message: GetMetronionActivitiesResponse) => {
          const result = message.toObject();
          resolve(result.dataList);
        },
        onEnd: (
          statusCode: grpc.Code,
          statusMsg: string | undefined,
          _: grpc.Metadata,
        ) => {
          if (statusCode !== grpc.Code.OK) {
            reject(statusMsg);
          }
        },
      });
    });
  }

  async getMetronionOffers(id: number): Promise<MetronionOffers[]> {
    const request = new GetMetronionOffersRequest();
    request.setId(new UInt64Value().setValue(id));

    return new Promise<MetronionOffers[]>((resolve, reject) => {
      grpc.invoke(MetronionService.GetMetronionOffers, {
        request,
        host: this.grpcEndpoint,
        onMessage: (message: GetMetronionOffersResponse) => {
          const result = message.toObject();
          resolve(result.dataList);
        },
        onEnd: (
          statusCode: grpc.Code,
          statusMsg: string | undefined,
          _: grpc.Metadata,
        ) => {
          if (statusCode !== grpc.Code.OK) {
            reject(statusMsg);
          }
        },
      });
    });
  }
}

export function ConvertListMetadata(
  data: GetMetadataResponse.AsObject[],
): MetronionInfo[] {
  return data.map(item => {
    return {
      ...item,
      wearables: item.wearablesList,
    };
  });
}

// export function ConvertMetadataResponse(
//   data: GetMetadataResponse,
// ): MetronionInfo {
//   return {
//     id: data.getId(),
//     createdAtTimestamp: data.getCreatedAtTimestamp(),
//     updatedAtTimestamp: data.getUpdatedAtTimestamp(),
//     createdAtBlock: data.getCreatedAtBlock(),
//     updatedAtBlock: data.getUpdatedAtBlock(),
//     name: data.getName(),
//     owner: data.getOwner(),
//     versionId: data.getVersionId(),
//     type: data.getType(),
//     gender: data.getGender(),
//     lastPrice: data.getLastPrice(),
//     currentPrice: data.getCurrentPrice(),
//     topBid: data.getTopBid(),
//     listedBy: data.getListedBy(),
//     image: data.getImage(),
//     baseStats: ConvertMetronionStats(data.getBaseStats()),
//     specialStats: ConvertMetronionStats(data.getSpecialStats()),
//     star: data.getStar(),
//     specialStar: data.getSpecialStar(),
//     wearables: data.getWearablesList().map(item => item.toObject()),
//   };
// }

// export function ConvertMetronionStats(
//   data: MetronionStats | undefined,
// ): Stats | undefined {
//   if (data) {
//     return data.toObject();
//   }
//   return undefined;
// }

export default GrpcFetcher;
