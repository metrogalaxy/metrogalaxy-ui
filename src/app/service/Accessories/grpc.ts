import { grpc } from '@improbable-eng/grpc-web';
import env from 'src/app/config';
import {
  GetListWearablesRequest,
  GetListWearablesResponse,
} from 'src/proto/wearables/v1/wearables_pb';
import { WearablesService } from 'src/proto/wearables/v1/wearables_pb_service';
import { AccessoriesFilterParams, AccessoriesResponse } from './index';

class GrpcFetcher {
  grpcEndpoint: string;

  constructor() {
    this.grpcEndpoint = env.api.grpcEndpoint;
  }

  async getAccessoriesByPage(
    offset: number,
    limit: number,
    filter: AccessoriesFilterParams,
  ): Promise<AccessoriesResponse> {
    const request = new GetListWearablesRequest();
    // TODO implement adding request params

    console.log(offset);
    console.log(limit);
    console.log(filter);
    return new Promise<AccessoriesResponse>((resolve, reject) => {
      grpc.invoke(WearablesService.GetListWearables, {
        request,
        host: this.grpcEndpoint,
        onMessage: (message: GetListWearablesResponse) => {
          const result = message.toObject();
          console.log(result);
          resolve({
            count: 0,
            data: [],
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
}

export default GrpcFetcher;
