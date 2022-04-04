import hmacSHA256 from 'crypto-js/hmac-sha256';

const key = process.env.REACT_APP_FIREBASE_HASH_KEY || '';

export function hashEmailPassword(email: string, password: string): string {
  if (key === '') {
    throw new Error('error hash key not found');
  }
  return hmacSHA256(
    email.concat(password),
    email.concat(password).concat(key),
  ).toString();
}
