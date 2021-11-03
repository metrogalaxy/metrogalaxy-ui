export interface ErrorResponse {
  error: string;
}

export function newErrorResponse(msg: string): ErrorResponse {
  return {
    error: msg,
  };
}

export function generateArray(from: number, to: number): number[] {
  return Array.from({ length: to - from + 1 }, (_, i) => i + from);
}
