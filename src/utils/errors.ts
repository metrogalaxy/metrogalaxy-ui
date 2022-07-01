import { AuthErrorCodes } from 'firebase/auth';

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

export interface FirebaseErrorResponse {
  code: string;
  message: string;
}

export function parseFirebaseAuthError(error: any): FirebaseErrorResponse {
  const err = error as FirebaseErrorResponse;
  switch (err.code) {
    case AuthErrorCodes.INVALID_PASSWORD:
      return {
        code: err.code,
        message: 'Wrong password',
      };
    case AuthErrorCodes.UNVERIFIED_EMAIL:
      return {
        code: err.code,
        message: 'Unverified email',
      };
    case AuthErrorCodes.USER_DELETED:
      return {
        code: err.code,
        message: 'User not found',
      };
    case AuthErrorCodes.EMAIL_EXISTS:
      return {
        code: err.code,
        message: 'Email already in use',
      };
    default:
      return err;
  }
}

export interface GameServerApiErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}

export function parseGameServerApiError(
  error: any,
): GameServerApiErrorResponse {
  const err = error.response.data as GameServerApiErrorResponse;
  return err;
}
