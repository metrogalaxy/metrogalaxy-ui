import * as React from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthCredential,
  AuthErrorCodes,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {
  doc,
  collection,
  setDoc,
  getFirestore,
  getDocs,
  updateDoc,
  deleteField,
  query,
  where,
} from 'firebase/firestore';
import { Web3Provider } from '@ethersproject/providers';
import { useDispatch } from 'react-redux';
import { globalActions } from 'src/app/globalSlice';
import axios from 'axios';
import ENV from 'src/app/config';
import { HttpStatusCode } from 'src/mocks/constants';
import { parseGameServerApiError } from 'src/utils';

const WalletSignMessage = 'Connect web3 wallet with MetroGalaxy user account';

// init
const provider = new GoogleAuthProvider();

const db = getFirestore();

const USER_COLLECTION_NAME = 'users';

export interface GoogleSignInResponse {
  userCredential: UserCredential;
  googleCredential: OAuthCredential | null;
}

// SignUpFormData to register new user
export interface SignUpFormData {
  wallet: string;
  email: string;
  password: string;
  username: string;
  walletSignature: string;
}

interface SignupResponse {
  id: string;
  wallet: string;
  email: string;
  password: string;
  username: string;
  walletSignature: string;
}

export async function signUpWithEmailPassword(
  formData: SignUpFormData,
): Promise<SignupResponse> {
  const gameServerApiSignupUrl = new URL(
    '/auth/signup',
    ENV.api.gameServerApiEndpoint,
  );

  try {
    const response = await axios.post<SignupResponse>(
      gameServerApiSignupUrl.toString(),
      formData,
    );
    if (
      response.status !== HttpStatusCode.Success &&
      response.status !== HttpStatusCode.Created
    ) {
      throw new Error('error signing up');
    }
    return response.data;
  } catch (error: any) {
    const err = parseGameServerApiError(error);
    throw new Error(err.message);
  }
}

export async function signInWithGoogle(): Promise<GoogleSignInResponse> {
  const auth = getAuth();
  const result = await signInWithPopup(auth, provider);
  if (result) {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    return {
      userCredential: result,
      googleCredential: credential,
    };
  } else {
    throw new Error('error cannot receive user information');
  }
}

export async function sendVerificationEmail(): Promise<void> {
  const auth = getAuth();
  if (!auth.currentUser) {
    throw new Error('user not found');
  }

  return sendEmailVerification(auth.currentUser);
}

export async function signInWithEmailPassword(
  email: string,
  password: string,
): Promise<UserCredential> {
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  if (auth.currentUser && auth.currentUser.emailVerified) {
    return userCredential;
  }
  // eslint-disable-next-line no-throw-literal
  throw {
    code: AuthErrorCodes.UNVERIFIED_EMAIL,
    message: 'Unverified email',
  };
}

export async function signOut(): Promise<void> {
  const auth = getAuth();
  return auth.signOut();
}

export async function resetPassword(email: string): Promise<void> {
  const auth = getAuth();
  return sendPasswordResetEmail(auth, email);
}

export async function signMessageToConnectWeb3(
  provider: Web3Provider | undefined,
  account: string | null | undefined,
): Promise<string> {
  if (provider && account) {
    const signer = provider.getSigner(account);
    return await signer.signMessage(WalletSignMessage);
  } else {
    return Promise.reject('web3 not connected');
  }
}

export async function setAccountWeb3Wallet(
  address: string,
  signature: string,
): Promise<void> {
  const auth = getAuth();
  if (auth.currentUser && auth.currentUser.email) {
    await setDoc(
      doc(db, USER_COLLECTION_NAME, auth.currentUser.email),
      {
        address: address,
        signature: signature,
      },
      { merge: true },
    );
    return;
  }
  throw new Error('error get current user');
}

export async function disconnectAccountWeb3Wallet(
  email: string,
): Promise<void> {
  return await updateDoc(doc(db, USER_COLLECTION_NAME, email), {
    address: deleteField(),
    signature: deleteField(),
  });
}

export interface UserInfo {
  userId: string;
  email: string;
  username: string;
  wallet: string;
  signature: string;
}

export async function useWatchUser(walletAddress: string | null | undefined) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const initialFetch = async function () {
      try {
        if (walletAddress) {
          console.log('fetch user info');
          const userInfo = await fetchUserInfo(walletAddress);
          dispatch(globalActions.setUserInfo(userInfo));
        }
      } catch (error) {
        dispatch(globalActions.setUserInfo(null));
      }
    };

    initialFetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletAddress]);

  // React.useEffect(() => {
  //   if (walletAddress) {
  //     const docRef = doc(db, USER_COLLECTION_NAME, walletAddress);
  //     console.log('subscribe watch user');
  //     const unsub = onSnapshot(docRef, doc => {
  //       const docData = doc.data() as UserInfo;
  //       dispatch(globalActions.setUserInfo(docData));
  //     });
  //     return () => {
  //       console.log('unsubscribe watch user');
  //       unsub();
  //     };
  //   }
  //   return () => {};
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [walletAddress]);
}

export async function fetchUserInfo(wallet: string): Promise<UserInfo> {
  const coll = collection(db, USER_COLLECTION_NAME);
  const q = query(coll, where('wallet', '==', wallet));

  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty || querySnapshot.docs.length === 0) {
    throw new Error('user not found');
  }
  const queryRes = querySnapshot.docs[0];
  return {
    userId: queryRes.get('userId'),
    email: queryRes.get('email'),
    username: queryRes.get('username'),
    wallet: queryRes.get('wallet'),
    signature: queryRes.get('signature'),
  };
}

export async function isUsernameExist(username: string): Promise<void> {
  const coll = collection(db, USER_COLLECTION_NAME);
  const q = query(coll, where('username', '==', username));

  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty || querySnapshot.docs.length > 0) {
    throw new Error('username is used');
  }
}

export * from './hashing';
