/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export type SaleConfigStruct = {
  privateTime: BigNumberish;
  publicTime: BigNumberish;
  endTime: BigNumberish;
};

export type SaleConfigStructOutput = [BigNumber, BigNumber, BigNumber] & {
  privateTime: BigNumber;
  publicTime: BigNumber;
  endTime: BigNumber;
};

export type SaleRecordStruct = {
  totalSold: BigNumberish;
  privateSold: BigNumberish;
  publicSold: BigNumberish;
  ownerBought: BigNumberish;
};

export type SaleRecordStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  totalSold: BigNumber;
  privateSold: BigNumber;
  publicSold: BigNumber;
  ownerBought: BigNumber;
};

export type UserRecordStruct = {
  privateBought: BigNumberish;
  publicBought: BigNumberish;
};

export type UserRecordStructOutput = [BigNumber, BigNumber] & {
  privateBought: BigNumber;
  publicBought: BigNumber;
};

export interface MetronionSaleInterface extends ethers.utils.Interface {
  functions: {
    "CAP_OWNER_INITIAL_MINT()": FunctionFragment;
    "CAP_PER_ADDRESS()": FunctionFragment;
    "CAP_PER_PRIVATE_ADDRESS()": FunctionFragment;
    "SALE_PRICE()": FunctionFragment;
    "buy(uint256,uint64)": FunctionFragment;
    "countWhitelistedGroup(uint256)": FunctionFragment;
    "getSaleConfig(uint256)": FunctionFragment;
    "getSaleRecord(uint256)": FunctionFragment;
    "getUserRecord(uint256,address)": FunctionFragment;
    "getWhitelistedGroup(uint256)": FunctionFragment;
    "isTokenWithdrawable(address)": FunctionFragment;
    "isWhitelistedAddress(uint256,address)": FunctionFragment;
    "maxWhitelistSize(uint256)": FunctionFragment;
    "nftContract()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateMaxWhitelistSize(uint256,uint256)": FunctionFragment;
    "updateWhitelistTokens(address[],bool)": FunctionFragment;
    "updateWhitelistedGroup(uint256,address[],bool)": FunctionFragment;
    "whitelistTokens(address)": FunctionFragment;
    "withdrawSaleFunds(address,uint256)": FunctionFragment;
    "withdrawToken(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "CAP_OWNER_INITIAL_MINT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CAP_PER_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CAP_PER_PRIVATE_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SALE_PRICE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "countWhitelistedGroup",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSaleConfig",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSaleRecord",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserRecord",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelistedGroup",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isTokenWithdrawable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelistedAddress",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "maxWhitelistSize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nftContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateMaxWhitelistSize",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateWhitelistTokens",
    values: [string[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "updateWhitelistedGroup",
    values: [BigNumberish, string[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawSaleFunds",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "CAP_OWNER_INITIAL_MINT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CAP_PER_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CAP_PER_PRIVATE_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SALE_PRICE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "countWhitelistedGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSaleConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSaleRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelistedGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTokenWithdrawable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelistedAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxWhitelistSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nftContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateMaxWhitelistSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateWhitelistTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateWhitelistedGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawSaleFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "MetronionMint(address,uint256,uint256)": EventFragment;
    "OwnerBought(address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "PrivateBought(address,uint256,uint256)": EventFragment;
    "PublicBought(address,uint256,uint256)": EventFragment;
    "ReceiveETH(address,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "UpdateWhitelistToken(address,bool)": EventFragment;
    "UpdateWhitelistedAddress(uint256,address,bool)": EventFragment;
    "WithdrawSaleFunds(address,uint256)": EventFragment;
    "WithdrawToken(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MetronionMint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerBought"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PrivateBought"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublicBought"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceiveETH"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateWhitelistToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateWhitelistedAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawSaleFunds"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawToken"): EventFragment;
}

export type MetronionMintEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { owner: string; versionId: BigNumber; amount: BigNumber }
>;

export type MetronionMintEventFilter = TypedEventFilter<MetronionMintEvent>;

export type OwnerBoughtEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { buyer: string; versionId: BigNumber; totalWeiPaid: BigNumber }
>;

export type OwnerBoughtEventFilter = TypedEventFilter<OwnerBoughtEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type PrivateBoughtEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { buyer: string; versionId: BigNumber; totalWeiPaid: BigNumber }
>;

export type PrivateBoughtEventFilter = TypedEventFilter<PrivateBoughtEvent>;

export type PublicBoughtEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { buyer: string; versionId: BigNumber; totalWeiPaid: BigNumber }
>;

export type PublicBoughtEventFilter = TypedEventFilter<PublicBoughtEvent>;

export type ReceiveETHEvent = TypedEvent<
  [string, BigNumber],
  { from: string; amount: BigNumber }
>;

export type ReceiveETHEventFilter = TypedEventFilter<ReceiveETHEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export type UpdateWhitelistTokenEvent = TypedEvent<
  [string, boolean],
  { token: string; isWhitelist: boolean }
>;

export type UpdateWhitelistTokenEventFilter =
  TypedEventFilter<UpdateWhitelistTokenEvent>;

export type UpdateWhitelistedAddressEvent = TypedEvent<
  [BigNumber, string, boolean],
  { versionId: BigNumber; account: string; isWhitelisted: boolean }
>;

export type UpdateWhitelistedAddressEventFilter =
  TypedEventFilter<UpdateWhitelistedAddressEvent>;

export type WithdrawSaleFundsEvent = TypedEvent<
  [string, BigNumber],
  { recipient: string; amount: BigNumber }
>;

export type WithdrawSaleFundsEventFilter =
  TypedEventFilter<WithdrawSaleFundsEvent>;

export type WithdrawTokenEvent = TypedEvent<
  [string, BigNumber],
  { token: string; amount: BigNumber }
>;

export type WithdrawTokenEventFilter = TypedEventFilter<WithdrawTokenEvent>;

export interface MetronionSale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MetronionSaleInterface;

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
    CAP_OWNER_INITIAL_MINT(overrides?: CallOverrides): Promise<[BigNumber]>;

    CAP_PER_ADDRESS(overrides?: CallOverrides): Promise<[BigNumber]>;

    CAP_PER_PRIVATE_ADDRESS(overrides?: CallOverrides): Promise<[BigNumber]>;

    SALE_PRICE(overrides?: CallOverrides): Promise<[BigNumber]>;

    buy(
      versionId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    countWhitelistedGroup(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSaleConfig(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[SaleConfigStructOutput] & { config: SaleConfigStructOutput }>;

    getSaleRecord(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [SaleRecordStructOutput] & { saleRecord: SaleRecordStructOutput }
    >;

    getUserRecord(
      versionId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<
      [UserRecordStructOutput] & { userRecord: UserRecordStructOutput }
    >;

    getWhitelistedGroup(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { accounts: string[] }>;

    isTokenWithdrawable(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isWhitelistedAddress(
      versionId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxWhitelistSize(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nftContract(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateMaxWhitelistSize(
      versionId: BigNumberish,
      maxSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateWhitelistTokens(
      listTokens: string[],
      isWhitelist: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateWhitelistedGroup(
      versionId: BigNumberish,
      accounts: string[],
      isWhitelisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelistTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdrawSaleFunds(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawToken(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  CAP_OWNER_INITIAL_MINT(overrides?: CallOverrides): Promise<BigNumber>;

  CAP_PER_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

  CAP_PER_PRIVATE_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

  SALE_PRICE(overrides?: CallOverrides): Promise<BigNumber>;

  buy(
    versionId: BigNumberish,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  countWhitelistedGroup(
    versionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSaleConfig(
    versionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<SaleConfigStructOutput>;

  getSaleRecord(
    versionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<SaleRecordStructOutput>;

  getUserRecord(
    versionId: BigNumberish,
    account: string,
    overrides?: CallOverrides
  ): Promise<UserRecordStructOutput>;

  getWhitelistedGroup(
    versionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  isTokenWithdrawable(
    token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isWhitelistedAddress(
    versionId: BigNumberish,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxWhitelistSize(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nftContract(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateMaxWhitelistSize(
    versionId: BigNumberish,
    maxSize: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateWhitelistTokens(
    listTokens: string[],
    isWhitelist: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateWhitelistedGroup(
    versionId: BigNumberish,
    accounts: string[],
    isWhitelisted: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelistTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  withdrawSaleFunds(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawToken(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CAP_OWNER_INITIAL_MINT(overrides?: CallOverrides): Promise<BigNumber>;

    CAP_PER_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    CAP_PER_PRIVATE_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    SALE_PRICE(overrides?: CallOverrides): Promise<BigNumber>;

    buy(
      versionId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    countWhitelistedGroup(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSaleConfig(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<SaleConfigStructOutput>;

    getSaleRecord(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<SaleRecordStructOutput>;

    getUserRecord(
      versionId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<UserRecordStructOutput>;

    getWhitelistedGroup(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    isTokenWithdrawable(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isWhitelistedAddress(
      versionId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxWhitelistSize(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nftContract(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateMaxWhitelistSize(
      versionId: BigNumberish,
      maxSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateWhitelistTokens(
      listTokens: string[],
      isWhitelist: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    updateWhitelistedGroup(
      versionId: BigNumberish,
      accounts: string[],
      isWhitelisted: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelistTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    withdrawSaleFunds(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawToken(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MetronionMint(address,uint256,uint256)"(
      owner?: null,
      versionId?: null,
      amount?: null
    ): MetronionMintEventFilter;
    MetronionMint(
      owner?: null,
      versionId?: null,
      amount?: null
    ): MetronionMintEventFilter;

    "OwnerBought(address,uint256,uint256)"(
      buyer?: string | null,
      versionId?: null,
      totalWeiPaid?: null
    ): OwnerBoughtEventFilter;
    OwnerBought(
      buyer?: string | null,
      versionId?: null,
      totalWeiPaid?: null
    ): OwnerBoughtEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "PrivateBought(address,uint256,uint256)"(
      buyer?: string | null,
      versionId?: null,
      totalWeiPaid?: null
    ): PrivateBoughtEventFilter;
    PrivateBought(
      buyer?: string | null,
      versionId?: null,
      totalWeiPaid?: null
    ): PrivateBoughtEventFilter;

    "PublicBought(address,uint256,uint256)"(
      buyer?: string | null,
      versionId?: null,
      totalWeiPaid?: null
    ): PublicBoughtEventFilter;
    PublicBought(
      buyer?: string | null,
      versionId?: null,
      totalWeiPaid?: null
    ): PublicBoughtEventFilter;

    "ReceiveETH(address,uint256)"(
      from?: null,
      amount?: null
    ): ReceiveETHEventFilter;
    ReceiveETH(from?: null, amount?: null): ReceiveETHEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "UpdateWhitelistToken(address,bool)"(
      token?: null,
      isWhitelist?: null
    ): UpdateWhitelistTokenEventFilter;
    UpdateWhitelistToken(
      token?: null,
      isWhitelist?: null
    ): UpdateWhitelistTokenEventFilter;

    "UpdateWhitelistedAddress(uint256,address,bool)"(
      versionId?: null,
      account?: null,
      isWhitelisted?: null
    ): UpdateWhitelistedAddressEventFilter;
    UpdateWhitelistedAddress(
      versionId?: null,
      account?: null,
      isWhitelisted?: null
    ): UpdateWhitelistedAddressEventFilter;

    "WithdrawSaleFunds(address,uint256)"(
      recipient?: string | null,
      amount?: null
    ): WithdrawSaleFundsEventFilter;
    WithdrawSaleFunds(
      recipient?: string | null,
      amount?: null
    ): WithdrawSaleFundsEventFilter;

    "WithdrawToken(address,uint256)"(
      token?: null,
      amount?: null
    ): WithdrawTokenEventFilter;
    WithdrawToken(token?: null, amount?: null): WithdrawTokenEventFilter;
  };

  estimateGas: {
    CAP_OWNER_INITIAL_MINT(overrides?: CallOverrides): Promise<BigNumber>;

    CAP_PER_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    CAP_PER_PRIVATE_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    SALE_PRICE(overrides?: CallOverrides): Promise<BigNumber>;

    buy(
      versionId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    countWhitelistedGroup(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSaleConfig(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSaleRecord(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserRecord(
      versionId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelistedGroup(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTokenWithdrawable(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWhitelistedAddress(
      versionId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxWhitelistSize(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nftContract(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateMaxWhitelistSize(
      versionId: BigNumberish,
      maxSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateWhitelistTokens(
      listTokens: string[],
      isWhitelist: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateWhitelistedGroup(
      versionId: BigNumberish,
      accounts: string[],
      isWhitelisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelistTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawSaleFunds(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawToken(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CAP_OWNER_INITIAL_MINT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CAP_PER_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CAP_PER_PRIVATE_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SALE_PRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buy(
      versionId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    countWhitelistedGroup(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSaleConfig(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSaleRecord(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserRecord(
      versionId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWhitelistedGroup(
      versionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTokenWithdrawable(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWhitelistedAddress(
      versionId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxWhitelistSize(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nftContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateMaxWhitelistSize(
      versionId: BigNumberish,
      maxSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateWhitelistTokens(
      listTokens: string[],
      isWhitelist: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateWhitelistedGroup(
      versionId: BigNumberish,
      accounts: string[],
      isWhitelisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelistTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawSaleFunds(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
