export interface ITransactionReceipt {
  txHash: string;
  isSuccess: boolean;
  error?: string;
}

export interface BaseResponse {
  timestamp: number;
}

export interface Stats {
  creativity: number;
  charisma: number;
  resolve: number;
  fitness: number;
  intellect: number;
}
