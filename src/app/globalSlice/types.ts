/* --- STATE --- */
import { User } from 'firebase/auth';

export enum LoginType {
  EMAIL = 'email',
  GOOGLE = 'google',
}

export interface GoogleUserProfile {
  email: string;
  name: string;
  avatarUrl: string;
  googleId: string;
  tokenId: string;
}

export interface GlobalState {
  avaxPrice: number;
  metroPrice: number;
  user: User | null;
  userName: string;
  userWeb3Address: string;
}
