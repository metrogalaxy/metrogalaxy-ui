export interface ITransactionReceipt {
  txHash: string;
  isSuccess: boolean;
  error?: string;
}

export interface BaseResponse {
  timestamp: number;
}
