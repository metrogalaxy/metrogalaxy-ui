import * as React from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthCredential,
  User,
  AuthErrorCodes,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getFirestore,
  onSnapshot,
  getDoc,
  updateDoc,
  deleteField,
} from 'firebase/firestore';
import { Web3Provider } from '@ethersproject/providers';
import { useDispatch } from 'react-redux';
import { globalActions } from 'src/app/globalSlice';

// init
const provider = new GoogleAuthProvider();

const db = getFirestore();

const USER_COLLECTION_NAME = 'users';

export interface GoogleSignInResponse {
  userCredential: UserCredential;
  googleCredential: OAuthCredential | null;
}

export async function signUpWithEmailPassword(
  email: string,
  password: string,
  name: string,
): Promise<UserCredential> {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  // create user in firestore
  await setDoc(
    doc(db, USER_COLLECTION_NAME, email),
    {
      email: email,
      name: name,
    },
    { merge: true },
  );

  return userCredential;
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
    return await signer.signMessage('Connect web3 wallet with user account');
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

interface UserInfo {
  email: string;
  name: string;
  address: string;
  signature: string;
}

export async function useWatchUser(user: User | null) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (user && user.email) {
      console.log('fetch user info');
      fetchUserInfo(user.email).then(userInfo => {
        dispatch(globalActions.setUserName(userInfo.name));
        dispatch(globalActions.setUserWeb3Address(userInfo.address));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (user && user.email) {
      const docRef = doc(db, USER_COLLECTION_NAME, user.email);
      console.log('subscribe watch user');
      const unsub = onSnapshot(docRef, doc => {
        const docData = doc.data() as UserInfo;
        dispatch(globalActions.setUserName(docData.name));
        dispatch(globalActions.setUserWeb3Address(docData.address));
      });
      return () => {
        console.log('unsubscribe watch user');
        unsub();
      };
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

async function fetchUserInfo(email: string): Promise<UserInfo> {
  const docRef = doc(db, USER_COLLECTION_NAME, email);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data() as UserInfo;
  } else {
    throw new Error('user did not exist');
  }
}
