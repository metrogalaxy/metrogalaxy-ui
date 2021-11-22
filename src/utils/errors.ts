export interface ErrorResponse {
  code: number;
  message: string;
  stack?: string;
  data?: {
    code: number;
    message: string;
  };
}

export function parseError(error: any): ErrorResponse {
  return error as ErrorResponse;
}
