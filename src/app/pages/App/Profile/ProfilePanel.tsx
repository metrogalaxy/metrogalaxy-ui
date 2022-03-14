import * as React from 'react';
import {
  Box,
  Stack,
  StackDivider,
  Text,
  Icon,
  Flex,
  Button,
  Avatar,
  Link,
  Spinner,
  useBoolean,
} from '@chakra-ui/react';
import { AiOutlineWallet, AiOutlineGoogle } from 'react-icons/ai';
import { FcApproval } from 'react-icons/fc';
import { useButtonSize } from 'src/app/hooks';
import {
  signOut,
  signMessageToConnectWeb3,
  signInWithGoogle,
  setAccountWeb3Wallet,
  disconnectAccountWeb3Wallet,
  useWatchUser,
} from 'src/app/service/Auth';
import { parseFirebaseAuthError } from 'src/utils';
import { toast } from 'react-toastify';
import { ToastConfig } from 'src/app/config';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { accountActions } from 'src/app/components/Account/slice';
import { useGlobalState, globalActions } from 'src/app/globalSlice';
import { useAccount } from 'src/app/hooks';
import { useEthers } from '@quangkeu1995/dappcore';
import { Web3Provider } from '@ethersproject/providers';

export function ProfilePanel() {
  const { user, userName, userWeb3Address } = useGlobalState();
  const buttonSize = useButtonSize();
  const dispatch = useDispatch();
  const { isActivated } = useAccount();
  const { account, library } = useEthers();
  const provider = library as Web3Provider;
  const [isGoogleLoginPending, setIsGoogleLoginPending] = useBoolean();

  let providerIds: string[] = [];

  if (user && user.providerData) {
    providerIds = user.providerData.map(item => {
      return item.providerId;
    });
  }

  const isGoogleAccountConnected =
    providerIds.filter(item => item === GoogleAuthProvider.PROVIDER_ID).length >
    0;

  useWatchUser(user);

  const logout = async () => {
    try {
      await signOut();
      return;
    } catch (error) {
      const err = parseFirebaseAuthError(error);
      toast.dismiss();
      toast.error(err.message, ToastConfig);
      return;
    }
  };

  const connectGoogleAccount = async () => {
    if (isGoogleLoginPending) {
      return;
    }
    setIsGoogleLoginPending.on();
    try {
      await signInWithGoogle();
      setIsGoogleLoginPending.off();
      const auth = getAuth();
      dispatch(globalActions.setUserProfile(auth.currentUser));
      return;
    } catch (error) {
      toast.dismiss();
      const err = parseFirebaseAuthError(error);
      toast.error(err.message, ToastConfig);
      setIsGoogleLoginPending.off();
      return;
    }
  };

  const connectWeb3Wallet = async () => {
    if (!isActivated) {
      dispatch(accountActions.setIsShowModal(true));
      return;
    }
    const signature = await signMessageToConnectWeb3(provider, account);
    try {
      await setAccountWeb3Wallet(account!, signature);
      return;
    } catch (error) {
      const err = parseFirebaseAuthError(error);
      toast.dismiss();
      toast.error(err.message, ToastConfig);
      return;
    }
  };

  const disconnectWeb3Wallet = async () => {
    if (user && user.email) {
      try {
        await disconnectAccountWeb3Wallet(user.email);
        toast.dismiss();
        toast.success('Disconnect web3 wallet success', ToastConfig);
        return;
      } catch (error) {
        const err = parseFirebaseAuthError(error);
        toast.dismiss();
        toast.error(err.message, ToastConfig);
        return;
      }
    } else {
      toast.dismiss();
      toast.error('cannot get current user', ToastConfig);
      return;
    }
  };

  const username = userName || user?.displayName;

  return (
    <Box>
      {!user && <Text textStyle="appTitle">Error loading account profile</Text>}
      {user && (
        <Stack gap={8} divider={<StackDivider borderColor="gray.600" />}>
          <Stack gap={2}>
            <Text textStyle="appTitle" textTransform="capitalize">
              User Profile
            </Text>
            {/* Photo */}
            <Avatar src={user.photoURL!} size="lg" />

            {/* Email */}
            <Stack>
              <Text textStyle="appTitle" textTransform="capitalize">
                Email
              </Text>
              <Text textStyle="appNormal">{user.email}</Text>
            </Stack>
            {/* Name */}
            <Stack>
              <Text textStyle="appTitle" textTransform="capitalize">
                Name
              </Text>
              <Text
                textStyle="appNormal"
                color={username ? 'white' : 'whiteBlur.100'}
              >
                {username ? username : 'None'}
              </Text>
            </Stack>
            {/* Email Verified */}
            <Stack>
              <Text textStyle="appTitle" textTransform="capitalize">
                Email Verification
              </Text>
              {user.emailVerified ? (
                <Flex>
                  <Text textStyle="appNormal" textTransform="capitalize" mr={2}>
                    Verified
                  </Text>
                  <Icon as={FcApproval} width="24px" height="24px" />
                </Flex>
              ) : (
                <Button size={buttonSize} variant="outline" maxWidth="150px">
                  Verify
                </Button>
              )}
            </Stack>
          </Stack>
          {/* Linked Accounts */}
          <Stack gap={2}>
            <Text textStyle="appTitle" textTransform="capitalize">
              Linked Accounts
            </Text>
            {isGoogleAccountConnected ? (
              <Flex>
                <Icon
                  as={AiOutlineGoogle}
                  width="24px"
                  height="24px"
                  mr={2}
                  color={isGoogleAccountConnected ? 'green.200' : 'white.100'}
                />
                <Text textStyle="appNormal">Google account connected</Text>
              </Flex>
            ) : (
              <Link color="white" onClick={connectGoogleAccount}>
                <Icon as={AiOutlineGoogle} width="24px" height="24px" mr={2} />
                Connect Google account
                {isGoogleLoginPending && <Spinner size="sm" ml={2} />}
              </Link>
            )}

            {userWeb3Address ? (
              <Flex>
                <Icon
                  as={AiOutlineWallet}
                  width="24px"
                  height="24px"
                  mr={2}
                  color="green.200"
                />
                <Text textStyle="appNormal">
                  Web3 wallet connected: {userWeb3Address}
                </Text>
                <Button
                  size="xs"
                  variant="outline"
                  ml={2}
                  onClick={disconnectWeb3Wallet}
                >
                  Disconnect
                </Button>
              </Flex>
            ) : (
              <Link color="white" onClick={connectWeb3Wallet}>
                <Icon as={AiOutlineWallet} width="24px" height="24px" mr={2} />
                Connect web3 wallet
              </Link>
            )}
          </Stack>
          {/* Logout */}
          <Button
            size={buttonSize}
            variant="outline"
            maxWidth="150px"
            onClick={logout}
          >
            Log out
          </Button>
        </Stack>
      )}
    </Box>
  );
}
