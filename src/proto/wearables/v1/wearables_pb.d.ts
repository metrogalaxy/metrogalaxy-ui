// package: proto.wearables.v1
// file: proto/wearables/v1/wearables.proto

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

export class GetWearablesRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWearablesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWearablesRequest): GetWearablesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWearablesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWearablesRequest;
  static deserializeBinaryFromReader(message: GetWearablesRequest, reader: jspb.BinaryReader): GetWearablesRequest;
}

export namespace GetWearablesRequest {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class GetWearablesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWearablesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWearablesResponse): GetWearablesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWearablesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWearablesResponse;
  static deserializeBinaryFromReader(message: GetWearablesResponse, reader: jspb.BinaryReader): GetWearablesResponse;
}

export namespace GetWearablesResponse {
  export type AsObject = {
  }
}

export class GetListWearablesRequest extends jspb.Message {
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

  getRarity(): string;
  setRarity(value: string): void;

  getType(): string;
  setType(value: string): void;

  getStatMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearStatMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListWearablesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetListWearablesRequest): GetListWearablesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetListWearablesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListWearablesRequest;
  static deserializeBinaryFromReader(message: GetListWearablesRequest, reader: jspb.BinaryReader): GetListWearablesRequest;
}

export namespace GetListWearablesRequest {
  export type AsObject = {
    account?: google_protobuf_wrappers_pb.StringValue.AsObject,
    sort: string,
    offset: number,
    limit: number,
    id?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    genderList: Array<string>,
    statusList: Array<string>,
    rarity: string,
    type: string,
    statMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }
}

export class GetListWearablesResponse extends jspb.Message {
  clearWearablesList(): void;
  getWearablesList(): Array<Wearables>;
  setWearablesList(value: Array<Wearables>): void;
  addWearables(value?: Wearables, index?: number): Wearables;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListWearablesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetListWearablesResponse): GetListWearablesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetListWearablesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListWearablesResponse;
  static deserializeBinaryFromReader(message: GetListWearablesResponse, reader: jspb.BinaryReader): GetListWearablesResponse;
}

export namespace GetListWearablesResponse {
  export type AsObject = {
    wearablesList: Array<Wearables.AsObject>,
    count: number,
  }
}

