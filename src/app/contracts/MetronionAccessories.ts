/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type AccessoriesStruct = {
  name: string;
  maxSupply: BigNumberish;
  minted: BigNumberish;
  burnt: BigNumberish;
  accessoriesType: BigNumberish;
  rarity: BigNumberish;
};

export type AccessoriesStructOutput = [
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  number
] & {
  name: string;
  maxSupply: BigNumber;
  minted: BigNumber;
  burnt: BigNumber;
  accessoriesType: BigNumber;
  rarity: number;
};

export interface MetronionAccessoriesInterface extends utils.Interface {
  functions: {
    "accessoriesTypeName(uint256)": FunctionFragment;
    "addAccessoriesTypes(string[])": FunctionFragment;
    "addOperator(address)": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "burn(address,uint256,uint256)": FunctionFragment;
    "createAccessory(string,uint256,uint256,uint8)": FunctionFragment;
    "getAccessory(uint256)": FunctionFragment;
    "getAccessoryType(uint256)": FunctionFragment;
    "getAccessoryTypeName(uint256)": FunctionFragment;
    "getAllAccessoryType()": FunctionFragment;
    "getEquippedBalance(address,uint256)": FunctionFragment;
    "getLatestAccessoryId()": FunctionFragment;
    "getOperators()": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "isBatchAmountSupported()": FunctionFragment;
    "isOperator(address)": FunctionFragment;
    "mint(uint256,uint256,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeOperator(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "returnAccessories(address,uint256[])": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setBaseURI(string)": FunctionFragment;
    "storeAccessories(address,uint256[])": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferEquippedAccessories(address,address,uint256[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uri(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accessoriesTypeName",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addAccessoriesTypes",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "addOperator", values: [string]): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccessory",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccessory",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccessoryType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccessoryTypeName",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllAccessoryType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEquippedBalance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestAccessoryId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOperators",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isBatchAmountSupported",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isOperator", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeOperator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnAccessories",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
  encodeFunctionData(
    functionFragment: "storeAccessories",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferEquippedAccessories",
    values: [string, string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: "accessoriesTypeName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAccessoriesTypes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAccessory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccessory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccessoryType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccessoryTypeName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllAccessoryType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEquippedBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestAccessoryId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOperators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBatchAmountSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOperator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnAccessories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "storeAccessories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferEquippedAccessories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;

  events: {
    "AccessoryBurnt(address,uint256,uint256)": EventFragment;
    "AccessoryCreated(uint256,string,uint256,uint256,uint8)": EventFragment;
    "AccessoryMint(address,uint256,uint256)": EventFragment;
    "AccessoryReturn(address,uint256[])": EventFragment;
    "AccessoryStore(address,uint256[])": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccessoryBurnt"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccessoryCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccessoryMint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccessoryReturn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccessoryStore"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export type AccessoryBurntEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { from: string; id: BigNumber; amount: BigNumber }
>;

export type AccessoryBurntEventFilter = TypedEventFilter<AccessoryBurntEvent>;

export type AccessoryCreatedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, number],
  {
    id: BigNumber;
    name: string;
    maxSupply: BigNumber;
    accessoriesType: BigNumber;
    rarity: number;
  }
>;

export type AccessoryCreatedEventFilter =
  TypedEventFilter<AccessoryCreatedEvent>;

export type AccessoryMintEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { to: string; id: BigNumber; amount: BigNumber }
>;

export type AccessoryMintEventFilter = TypedEventFilter<AccessoryMintEvent>;

export type AccessoryReturnEvent = TypedEvent<
  [string, BigNumber[]],
  { to: string; accessoryIds: BigNumber[] }
>;

export type AccessoryReturnEventFilter = TypedEventFilter<AccessoryReturnEvent>;

export type AccessoryStoreEvent = TypedEvent<
  [string, BigNumber[]],
  { from: string; accessoryIds: BigNumber[] }
>;

export type AccessoryStoreEventFilter = TypedEventFilter<AccessoryStoreEvent>;

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  { account: string; operator: string; approved: boolean }
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type TransferBatchEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber[]],
  {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
  }
>;

export type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;

export type TransferSingleEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
  }
>;

export type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;

export type URIEvent = TypedEvent<
  [string, BigNumber],
  { value: string; id: BigNumber }
>;

export type URIEventFilter = TypedEventFilter<URIEvent>;

export interface MetronionAccessories extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MetronionAccessoriesInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    accessoriesTypeName(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    addAccessoriesTypes(
      names: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      account: string,
      assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    burn(
      account: string,
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createAccessory(
      name: string,
      maxSupply: BigNumberish,
      accessoriesType: BigNumberish,
      rarity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAccessory(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[AccessoriesStructOutput]>;

    getAccessoryType(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAccessoryTypeName(
      accessoriesType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAllAccessoryType(overrides?: CallOverrides): Promise<[string[]]>;

    getEquippedBalance(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLatestAccessoryId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getOperators(overrides?: CallOverrides): Promise<[string[]]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isBatchAmountSupported(overrides?: CallOverrides): Promise<[boolean]>;

    isOperator(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    mint(
      id: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    returnAccessories(
      account: string,
      accessoryIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,uint256)"(
      from: string,
      to: string,
      assetId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBaseURI(
      newuri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    storeAccessories(
      account: string,
      accessoryIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferEquippedAccessories(
      from: string,
      to: string,
      accessoryIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uri(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  accessoriesTypeName(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  addAccessoriesTypes(
    names: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addOperator(
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    account: string,
    assetId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  burn(
    account: string,
    id: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createAccessory(
    name: string,
    maxSupply: BigNumberish,
    accessoriesType: BigNumberish,
    rarity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAccessory(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<AccessoriesStructOutput>;

  getAccessoryType(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAccessoryTypeName(
    accessoriesType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getAllAccessoryType(overrides?: CallOverrides): Promise<string[]>;

  getEquippedBalance(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLatestAccessoryId(overrides?: CallOverrides): Promise<BigNumber>;

  getOperators(overrides?: CallOverrides): Promise<string[]>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isBatchAmountSupported(overrides?: CallOverrides): Promise<boolean>;

  isOperator(account: string, overrides?: CallOverrides): Promise<boolean>;

  mint(
    id: BigNumberish,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeOperator(
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  returnAccessories(
    account: string,
    accessoryIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,uint256)"(
    from: string,
    to: string,
    assetId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,uint256,bytes)"(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBaseURI(
    newuri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  storeAccessories(
    account: string,
    accessoryIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferEquippedAccessories(
    from: string,
    to: string,
    accessoryIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uri(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    accessoriesTypeName(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    addAccessoriesTypes(
      names: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    addOperator(operator: string, overrides?: CallOverrides): Promise<void>;

    balanceOf(
      account: string,
      assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    burn(
      account: string,
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createAccessory(
      name: string,
      maxSupply: BigNumberish,
      accessoriesType: BigNumberish,
      rarity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getAccessory(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<AccessoriesStructOutput>;

    getAccessoryType(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccessoryTypeName(
      accessoriesType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getAllAccessoryType(overrides?: CallOverrides): Promise<string[]>;

    getEquippedBalance(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLatestAccessoryId(overrides?: CallOverrides): Promise<BigNumber>;

    getOperators(overrides?: CallOverrides): Promise<string[]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isBatchAmountSupported(overrides?: CallOverrides): Promise<boolean>;

    isOperator(account: string, overrides?: CallOverrides): Promise<boolean>;

    mint(
      id: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeOperator(operator: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    returnAccessories(
      account: string,
      accessoryIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,uint256)"(
      from: string,
      to: string,
      assetId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setBaseURI(newuri: string, overrides?: CallOverrides): Promise<void>;

    storeAccessories(
      account: string,
      accessoryIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferEquippedAccessories(
      from: string,
      to: string,
      accessoryIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uri(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AccessoryBurnt(address,uint256,uint256)"(
      from?: null,
      id?: null,
      amount?: null
    ): AccessoryBurntEventFilter;
    AccessoryBurnt(
      from?: null,
      id?: null,
      amount?: null
    ): AccessoryBurntEventFilter;

    "AccessoryCreated(uint256,string,uint256,uint256,uint8)"(
      id?: null,
      name?: null,
      maxSupply?: null,
      accessoriesType?: null,
      rarity?: null
    ): AccessoryCreatedEventFilter;
    AccessoryCreated(
      id?: null,
      name?: null,
      maxSupply?: null,
      accessoriesType?: null,
      rarity?: null
    ): AccessoryCreatedEventFilter;

    "AccessoryMint(address,uint256,uint256)"(
      to?: null,
      id?: null,
      amount?: null
    ): AccessoryMintEventFilter;
    AccessoryMint(
      to?: null,
      id?: null,
      amount?: null
    ): AccessoryMintEventFilter;

    "AccessoryReturn(address,uint256[])"(
      to?: null,
      accessoryIds?: null
    ): AccessoryReturnEventFilter;
    AccessoryReturn(to?: null, accessoryIds?: null): AccessoryReturnEventFilter;

    "AccessoryStore(address,uint256[])"(
      from?: null,
      accessoryIds?: null
    ): AccessoryStoreEventFilter;
    AccessoryStore(from?: null, accessoryIds?: null): AccessoryStoreEventFilter;

    "ApprovalForAll(address,address,bool)"(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "TransferBatch(address,address,address,uint256[],uint256[])"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TransferBatchEventFilter;
    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TransferBatchEventFilter;

    "TransferSingle(address,address,address,uint256,uint256)"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TransferSingleEventFilter;
    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TransferSingleEventFilter;

    "URI(string,uint256)"(
      value?: null,
      id?: BigNumberish | null
    ): URIEventFilter;
    URI(value?: null, id?: BigNumberish | null): URIEventFilter;
  };

  estimateGas: {
    accessoriesTypeName(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addAccessoriesTypes(
      names: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(
      account: string,
      assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      account: string,
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createAccessory(
      name: string,
      maxSupply: BigNumberish,
      accessoriesType: BigNumberish,
      rarity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAccessory(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccessoryType(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccessoryTypeName(
      accessoriesType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllAccessoryType(overrides?: CallOverrides): Promise<BigNumber>;

    getEquippedBalance(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLatestAccessoryId(overrides?: CallOverrides): Promise<BigNumber>;

    getOperators(overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBatchAmountSupported(overrides?: CallOverrides): Promise<BigNumber>;

    isOperator(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      id: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    returnAccessories(
      account: string,
      accessoryIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,uint256)"(
      from: string,
      to: string,
      assetId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBaseURI(
      newuri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    storeAccessories(
      account: string,
      accessoryIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferEquippedAccessories(
      from: string,
      to: string,
      accessoryIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uri(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accessoriesTypeName(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addAccessoriesTypes(
      names: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      account: string,
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createAccessory(
      name: string,
      maxSupply: BigNumberish,
      accessoriesType: BigNumberish,
      rarity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAccessory(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccessoryType(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccessoryTypeName(
      accessoriesType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllAccessoryType(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEquippedBalance(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLatestAccessoryId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOperators(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBatchAmountSupported(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOperator(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      id: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    returnAccessories(
      account: string,
      accessoryIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,uint256)"(
      from: string,
      to: string,
      assetId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBaseURI(
      newuri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    storeAccessories(
      account: string,
      accessoryIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferEquippedAccessories(
      from: string,
      to: string,
      accessoryIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uri(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
