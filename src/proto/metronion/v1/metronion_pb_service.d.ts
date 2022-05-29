// package: proto.metronion.v1
// file: proto/metronion/v1/metronion.proto

import * as proto_metronion_v1_metronion_pb from "../../../proto/metronion/v1/metronion_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MetronionServiceGetMetadata = {
  readonly methodName: string;
  readonly service: typeof MetronionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_metronion_v1_metronion_pb.GetMetadataRequest;
  readonly responseType: typeof proto_metronion_v1_metronion_pb.GetMetadataResponse;
};

type MetronionServiceGetListMetadata = {
  readonly methodName: string;
  readonly service: typeof MetronionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_metronion_v1_metronion_pb.GetListMetadataRequest;
  readonly responseType: typeof proto_metronion_v1_metronion_pb.GetListMetadataResponse;
};

type MetronionServiceGetMetronionActivities = {
  readonly methodName: string;
  readonly service: typeof MetronionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_metronion_v1_metronion_pb.GetMetronionActivitiesRequest;
  readonly responseType: typeof proto_metronion_v1_metronion_pb.GetMetronionActivitiesResponse;
};

type MetronionServiceGetMetronionListing = {
  readonly methodName: string;
  readonly service: typeof MetronionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_metronion_v1_metronion_pb.GetMetronionListingRequest;
  readonly responseType: typeof proto_metronion_v1_metronion_pb.GetMetronionListingResponse;
};

type MetronionServiceGetMetronionOffers = {
  readonly methodName: string;
  readonly service: typeof MetronionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_metronion_v1_metronion_pb.GetMetronionOffersRequest;
  readonly responseType: typeof proto_metronion_v1_metronion_pb.GetMetronionOffersResponse;
};

export class MetronionService {
  static readonly serviceName: string;
  static readonly GetMetadata: MetronionServiceGetMetadata;
  static readonly GetListMetadata: MetronionServiceGetListMetadata;
  static readonly GetMetronionActivities: MetronionServiceGetMetronionActivities;
  static readonly GetMetronionListing: MetronionServiceGetMetronionListing;
  static readonly GetMetronionOffers: MetronionServiceGetMetronionOffers;
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

export class MetronionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getMetadata(
    requestMessage: proto_metronion_v1_metronion_pb.GetMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_metronion_v1_metronion_pb.GetMetadataResponse|null) => void
  ): UnaryResponse;
  getMetadata(
    requestMessage: proto_metronion_v1_metronion_pb.GetMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: proto_metronion_v1_metronion_pb.GetMetadataResponse|null) => void
  ): UnaryResponse;
  getListMetadata(
    requestMessage: proto_metronion_v1_metronion_pb.GetListMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_metronion_v1_metronion_pb.GetListMetadataResponse|null) => void
  ): UnaryResponse;
  getListMetadata(
    requestMessage: proto_metronion_v1_metronion_pb.GetListMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: proto_metronion_v1_metronion_pb.GetListMetadataResponse|null) => void
  ): UnaryResponse;
  getMetronionActivities(
    requestMessage: proto_metronion_v1_metronion_pb.GetMetronionActivitiesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_metronion_v1_metronion_pb.GetMetronionActivitiesResponse|null) => void
  ): UnaryResponse;
  getMetronionActivities(
    requestMessage: proto_metronion_v1_metronion_pb.GetMetronionActivitiesRequest,
    callback: (error: ServiceError|null, responseMessage: proto_metronion_v1_metronion_pb.GetMetronionActivitiesResponse|null) => void
  ): UnaryResponse;
  getMetronionListing(
    requestMessage: proto_metronion_v1_metronion_pb.GetMetronionListingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_metronion_v1_metronion_pb.GetMetronionListingResponse|null) => void
  ): UnaryResponse;
  getMetronionListing(
    requestMessage: proto_metronion_v1_metronion_pb.GetMetronionListingRequest,
    callback: (error: ServiceError|null, responseMessage: proto_metronion_v1_metronion_pb.GetMetronionListingResponse|null) => void
  ): UnaryResponse;
  getMetronionOffers(
    requestMessage: proto_metronion_v1_metronion_pb.GetMetronionOffersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_metronion_v1_metronion_pb.GetMetronionOffersResponse|null) => void
  ): UnaryResponse;
  getMetronionOffers(
    requestMessage: proto_metronion_v1_metronion_pb.GetMetronionOffersRequest,
    callback: (error: ServiceError|null, responseMessage: proto_metronion_v1_metronion_pb.GetMetronionOffersResponse|null) => void
  ): UnaryResponse;
}

