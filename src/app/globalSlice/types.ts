/* --- STATE --- */
// import { User } from 'firebase/auth';
import { UserInfo } from '../service/Auth';

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
  userInfo: UserInfo | null;
}
