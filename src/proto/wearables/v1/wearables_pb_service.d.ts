// package: proto.wearables.v1
// file: proto/wearables/v1/wearables.proto

import * as proto_wearables_v1_wearables_pb from "../../../proto/wearables/v1/wearables_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WearablesServiceGetWearables = {
  readonly methodName: string;
  readonly service: typeof WearablesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_wearables_v1_wearables_pb.GetWearablesRequest;
  readonly responseType: typeof proto_wearables_v1_wearables_pb.GetWearablesResponse;
};

type WearablesServiceGetListWearables = {
  readonly methodName: string;
  readonly service: typeof WearablesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_wearables_v1_wearables_pb.GetListWearablesRequest;
  readonly responseType: typeof proto_wearables_v1_wearables_pb.GetListWearablesResponse;
};

export class WearablesService {
  static readonly serviceName: string;
  static readonly GetWearables: WearablesServiceGetWearables;
  static readonly GetListWearables: WearablesServiceGetListWearables;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class WearablesServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getWearables(
    requestMessage: proto_wearables_v1_wearables_pb.GetWearablesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_wearables_v1_wearables_pb.GetWearablesResponse|null) => void
  ): UnaryResponse;
  getWearables(
    requestMessage: proto_wearables_v1_wearables_pb.GetWearablesRequest,
    callback: (error: ServiceError|null, responseMessage: proto_wearables_v1_wearables_pb.GetWearablesResponse|null) => void
  ): UnaryResponse;
  getListWearables(
    requestMessage: proto_wearables_v1_wearables_pb.GetListWearablesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_wearables_v1_wearables_pb.GetListWearablesResponse|null) => void
  ): UnaryResponse;
  getListWearables(
    requestMessage: proto_wearables_v1_wearables_pb.GetListWearablesRequest,
    callback: (error: ServiceError|null, responseMessage: proto_wearables_v1_wearables_pb.GetListWearablesResponse|null) => void
  ): UnaryResponse;
}

