export interface ITransactionReceipt {
  txHash: string;
  isSuccess: boolean;
  error?: string;
}
