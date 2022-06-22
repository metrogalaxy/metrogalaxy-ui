// package: proto.metronion.v1
// file: proto/metronion/v1/metronion.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class MetronionStats extends jspb.Message {
  getCreativity(): number;
  setCreativity(value: number): void;

  getCharisma(): number;
  setCharisma(value: number): void;

  getResolve(): number;
  setResolve(value: number): void;

  getFitness(): number;
  setFitness(value: number): void;

  getIntellect(): number;
  setIntellect(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetronionStats.AsObject;
  static toObject(includeInstance: boolean, msg: MetronionStats): MetronionStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetronionStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetronionStats;
  static deserializeBinaryFromReader(message: MetronionStats, reader: jspb.BinaryReader): MetronionStats;
}

export namespace MetronionStats {
  export type AsObject = {
    creativity: number,
    charisma: number,
    resolve: number,
    fitness: number,
    intellect: number,
  }
}

export class Wearables extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getName(): string;
  setName(value: string): void;

  getGender(): string;
  setGender(value: string): void;

  getRarity(): string;
  setRarity(value: string): void;

  getChangeable(): boolean;
  setChangeable(value: boolean): void;

  getIsOrigin(): boolean;
  setIsOrigin(value: boolean): void;

  getIsRequired(): boolean;
  setIsRequired(value: boolean): void;

  getImage(): string;
  setImage(value: string): void;

  hasStats(): boolean;
  clearStats(): void;
  getStats(): MetronionStats | undefined;
  setStats(value?: MetronionStats): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wearables.AsObject;
  static toObject(includeInstance: boolean, msg: Wearables): Wearables.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Wearables, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wearables;
  static deserializeBinaryFromReader(message: Wearables, reader: jspb.BinaryReader): Wearables;
}

export namespace Wearables {
  export type AsObject = {
    id: string,
    type: string,
    name: string,
    gender: string,
    rarity: string,
    changeable: boolean,
    isOrigin: boolean,
    isRequired: boolean,
    image: string,
    stats?: MetronionStats.AsObject,
  }
}

export class MetronionActivity extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getType(): string;
  setType(value: string): void;

  getFromAccount(): string;
  setFromAccount(value: string): void;

  getToAccount(): string;
  setToAccount(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getBlockNumber(): number;
  setBlockNumber(value: number): void;

  getTxHash(): string;
  setTxHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetronionActivity.AsObject;
  static toObject(includeInstance: boolean, msg: MetronionActivity): MetronionActivity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetronionActivity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetronionActivity;
  static deserializeBinaryFromReader(message: MetronionActivity, reader: jspb.BinaryReader): MetronionActivity;
}

export namespace MetronionActivity {
  export type AsObject = {
    id: number,
    type: string,
    fromAccount: string,
    toAccount: string,
    price: number,
    timestamp: number,
    blockNumber: number,
    txHash: string,
  }
}

export class MetronionOffers extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFromAccount(): string;
  setFromAccount(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getBlockNumber(): number;
  setBlockNumber(value: number): void;

  getTxHash(): string;
  setTxHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetronionOffers.AsObject;
  static toObject(includeInstance: boolean, msg: MetronionOffers): MetronionOffers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetronionOffers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetronionOffers;
  static deserializeBinaryFromReader(message: MetronionOffers, reader: jspb.BinaryReader): MetronionOffers;
}

export namespace MetronionOffers {
  export type AsObject = {
    id: number,
    fromAccount: string,
    price: number,
    timestamp: number,
    blockNumber: number,
    txHash: string,
  }
}

export class MetronionListing extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFromAccount(): string;
  setFromAccount(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getBlockNumber(): number;
  setBlockNumber(value: number): void;

  getTxHash(): string;
  setTxHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetronionListing.AsObject;
  static toObject(includeInstance: boolean, msg: MetronionListing): MetronionListing.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetronionListing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetronionListing;
  static deserializeBinaryFromReader(message: MetronionListing, reader: jspb.BinaryReader): MetronionListing;
}

export namespace MetronionListing {
  export type AsObject = {
    id: number,
    fromAccount: string,
    price: number,
    timestamp: number,
    blockNumber: number,
    txHash: string,
  }
}

export class GetMetadataRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetadataRequest): GetMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetadataRequest;
  static deserializeBinaryFromReader(message: GetMetadataRequest, reader: jspb.BinaryReader): GetMetadataRequest;
}

export namespace GetMetadataRequest {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class GetMetadataResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getVersionId(): number;
  setVersionId(value: number): void;

  getCreatedAtTimestamp(): number;
  setCreatedAtTimestamp(value: number): void;

  getUpdatedAtTimestamp(): number;
  setUpdatedAtTimestamp(value: number): void;

  getCreatedAtBlock(): number;
  setCreatedAtBlock(value: number): void;

  getUpdatedAtBlock(): number;
  setUpdatedAtBlock(value: number): void;

  getOwner(): string;
  setOwner(value: string): void;

  getLastPrice(): number;
  setLastPrice(value: number): void;

  getCurrentPrice(): number;
  setCurrentPrice(value: number): void;

  getTopBid(): number;
  setTopBid(value: number): void;

  getListedBy(): string;
  setListedBy(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  getGender(): string;
  setGender(value: string): void;

  getType(): string;
  setType(value: string): void;

  getStar(): number;
  setStar(value: number): void;

  getSpecialStar(): number;
  setSpecialStar(value: number): void;

  hasBaseStats(): boolean;
  clearBaseStats(): void;
  getBaseStats(): MetronionStats | undefined;
  setBaseStats(value?: MetronionStats): void;

  hasSpecialStats(): boolean;
  clearSpecialStats(): void;
  getSpecialStats(): MetronionStats | undefined;
  setSpecialStats(value?: MetronionStats): void;

  clearWearablesList(): void;
  getWearablesList(): Array<Wearables>;
  setWearablesList(value: Array<Wearables>): void;
  addWearables(value?: Wearables, index?: number): Wearables;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetadataResponse): GetMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetadataResponse;
  static deserializeBinaryFromReader(message: GetMetadataResponse, reader: jspb.BinaryReader): GetMetadataResponse;
}

export namespace GetMetadataResponse {
  export type AsObject = {
    id: number,
    name: string,
    versionId: number,
    createdAtTimestamp: number,
    updatedAtTimestamp: number,
    createdAtBlock: number,
    updatedAtBlock: number,
    owner: string,
    lastPrice: number,
    currentPrice: number,
    topBid: number,
    listedBy: string,
    image: string,
    gender: string,
    type: string,
    star: number,
    specialStar: number,
    baseStats?: MetronionStats.AsObject,
    specialStats?: MetronionStats.AsObject,
    wearablesList: Array<Wearables.AsObject>,
  }
}

export class GetListMetadataRequest extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAccount(value?: google_protobuf_wrappers_pb.StringValue): void;

  getSort(): string;
  setSort(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  clearGenderList(): void;
  getGenderList(): Array<string>;
  setGenderList(value: Array<string>): void;
  addGender(value: string, index?: number): string;

  clearStatusList(): void;
  getStatusList(): Array<string>;
  setStatusList(value: Array<string>): void;
  addStatus(value: string, index?: number): string;

  getStatMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearStatMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetListMetadataRequest): GetListMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetListMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListMetadataRequest;
  static deserializeBinaryFromReader(message: GetListMetadataRequest, reader: jspb.BinaryReader): GetListMetadataRequest;
}

export namespace GetListMetadataRequest {
  export type AsObject = {
    account?: google_protobuf_wrappers_pb.StringValue.AsObject,
    sort: string,
    offset: number,
    limit: number,
    id?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    genderList: Array<string>,
    statusList: Array<string>,
    statMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }
}

export class GetListMetadataResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<GetMetadataResponse>;
  setDataList(value: Array<GetMetadataResponse>): void;
  addData(value?: GetMetadataResponse, index?: number): GetMetadataResponse;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetListMetadataResponse): GetListMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetListMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListMetadataResponse;
  static deserializeBinaryFromReader(message: GetListMetadataResponse, reader: jspb.BinaryReader): GetListMetadataResponse;
}

export namespace GetListMetadataResponse {
  export type AsObject = {
    dataList: Array<GetMetadataResponse.AsObject>,
    count: number,
  }
}

export class GetMetronionActivitiesRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  getSort(): string;
  setSort(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetronionActivitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetronionActivitiesRequest): GetMetronionActivitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetronionActivitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetronionActivitiesRequest;
  static deserializeBinaryFromReader(message: GetMetronionActivitiesRequest, reader: jspb.BinaryReader): GetMetronionActivitiesRequest;
}

export namespace GetMetronionActivitiesRequest {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    sort: string,
  }
}

export class GetMetronionActivitiesResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<MetronionActivity>;
  setDataList(value: Array<MetronionActivity>): void;
  addData(value?: MetronionActivity, index?: number): MetronionActivity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetronionActivitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetronionActivitiesResponse): GetMetronionActivitiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetronionActivitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetronionActivitiesResponse;
  static deserializeBinaryFromReader(message: GetMetronionActivitiesResponse, reader: jspb.BinaryReader): GetMetronionActivitiesResponse;
}

export namespace GetMetronionActivitiesResponse {
  export type AsObject = {
    dataList: Array<MetronionActivity.AsObject>,
  }
}

export class GetMetronionListingRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetronionListingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetronionListingRequest): GetMetronionListingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetronionListingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetronionListingRequest;
  static deserializeBinaryFromReader(message: GetMetronionListingRequest, reader: jspb.BinaryReader): GetMetronionListingRequest;
}

export namespace GetMetronionListingRequest {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class GetMetronionListingResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): MetronionListing | undefined;
  setData(value?: MetronionListing): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetronionListingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetronionListingResponse): GetMetronionListingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetronionListingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetronionListingResponse;
  static deserializeBinaryFromReader(message: GetMetronionListingResponse, reader: jspb.BinaryReader): GetMetronionListingResponse;
}

export namespace GetMetronionListingResponse {
  export type AsObject = {
    data?: MetronionListing.AsObject,
  }
}

export class GetMetronionOffersRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  getSort(): string;
  setSort(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetronionOffersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetronionOffersRequest): GetMetronionOffersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetronionOffersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetronionOffersRequest;
  static deserializeBinaryFromReader(message: GetMetronionOffersRequest, reader: jspb.BinaryReader): GetMetronionOffersRequest;
}

export namespace GetMetronionOffersRequest {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    sort: string,
  }
}

export class GetMetronionOffersResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<MetronionOffers>;
  setDataList(value: Array<MetronionOffers>): void;
  addData(value?: MetronionOffers, index?: number): MetronionOffers;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetronionOffersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetronionOffersResponse): GetMetronionOffersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetronionOffersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetronionOffersResponse;
  static deserializeBinaryFromReader(message: GetMetronionOffersResponse, reader: jspb.BinaryReader): GetMetronionOffersResponse;
}

export namespace GetMetronionOffersResponse {
  export type AsObject = {
    dataList: Array<MetronionOffers.AsObject>,
  }
}

