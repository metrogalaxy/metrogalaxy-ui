import * as React from 'react';
import {
  Box,
  Stack,
  StackDivider,
  Text,
  Icon,
  Flex,
  Avatar,
  Link,
} from '@chakra-ui/react';
import { AiOutlineWallet } from 'react-icons/ai';
import { useAccount } from 'src/app/hooks';
import { useGlobalState } from 'src/app/globalSlice';
import { useEthers } from '@quangkeu1995/dappcore';
import { useWatchUser } from 'src/app/service/Auth';

export function ProfilePanel() {
  const { userInfo } = useGlobalState();
  // const dispatch = useDispatch();
  const { isActivated } = useAccount();
  const { account } = useEthers();
  // const provider = library as Web3Provider;
  // const [isGoogleLoginPending, setIsGoogleLoginPending] = useBoolean();

  // let providerIds: string[] = [];

  // if (user && user.providerData) {
  //   providerIds = user.providerData.map(item => {
  //     return item.providerId;
  //   });
  // }

  // const isGoogleAccountConnected =
  //   providerIds.filter(item => item === GoogleAuthProvider.PROVIDER_ID).length >
  //   0;

  // useWatchUser(account);

  // const logout = async () => {
  //   try {
  //     await signOut();
  //     return;
  //   } catch (error) {
  //     const err = parseFirebaseAuthError(error);
  //     toast.dismiss();
  //     toast.error(err.message, ToastConfig);
  //     return;
  //   }
  // };

  // const connectGoogleAccount = async () => {
  //   if (isGoogleLoginPending) {
  //     return;
  //   }
  //   setIsGoogleLoginPending.on();
  //   try {
  //     await signInWithGoogle();
  //     setIsGoogleLoginPending.off();
  //     const auth = getAuth();
  //     dispatch(globalActions.setUserProfile(auth.currentUser));
  //     return;
  //   } catch (error) {
  //     toast.dismiss();
  //     const err = parseFirebaseAuthError(error);
  //     toast.error(err.message, ToastConfig);
  //     setIsGoogleLoginPending.off();
  //     return;
  //   }
  // };

  // const connectWeb3Wallet = async () => {
  //   if (!isActivated) {
  //     dispatch(accountActions.setIsShowModal(true));
  //     return;
  //   }
  //   const signature = await signMessageToConnectWeb3(provider, account);
  //   try {
  //     await setAccountWeb3Wallet(account!, signature);
  //     return;
  //   } catch (error) {
  //     const err = parseFirebaseAuthError(error);
  //     toast.dismiss();
  //     toast.error(err.message, ToastConfig);
  //     return;
  //   }
  // };

  // const disconnectWeb3Wallet = async () => {
  //   if (user && user.email) {
  //     try {
  //       await disconnectAccountWeb3Wallet(user.email);
  //       toast.dismiss();
  //       toast.success('Disconnect web3 wallet success', ToastConfig);
  //       return;
  //     } catch (error) {
  //       const err = parseFirebaseAuthError(error);
  //       toast.dismiss();
  //       toast.error(err.message, ToastConfig);
  //       return;
  //     }
  //   } else {
  //     toast.dismiss();
  //     toast.error('cannot get current user', ToastConfig);
  //     return;
  //   }
  // };

  // const resendEmail = async () => {
  //   setIsSubmitting.on();
  //   try {
  //     await sendVerificationEmail();
  //     toast.dismiss();
  //     toast.success('Verification email sent!', ToastConfig);
  //   } catch (error) {
  //     const err = parseFirebaseAuthError(error);
  //     toast.dismiss();
  //     toast.error(err.message, ToastConfig);
  //   }
  //   setIsSubmitting.off();
  // };

  useWatchUser(account);

  if (!isActivated) {
    return (
      <Box>
        <Text textStyle="appNormal" color="white">
          Wallet is not connected
        </Text>
      </Box>
    );
  }

  if (!userInfo) {
    return (
      <Flex>
        <Text textStyle="appNormal" color="white" mr={2}>
          Account profile is not registered yet!!
        </Text>
        <Link href="/signup" color="green.200" textStyle="appNormal">
          Sign Up
        </Link>
      </Flex>
    );
  }

  const username = userInfo ? userInfo.username : '';
  return (
    <Box>
      {!userInfo && (
        <Text textStyle="appTitle">Error loading account profile</Text>
      )}
      {userInfo && (
        <Stack gap={8} divider={<StackDivider borderColor="gray.600" />}>
          <Stack gap={2}>
            <Text textStyle="appTitle" textTransform="capitalize">
              User Profile
            </Text>
            {/* Photo */}
            <Avatar src={undefined} size="lg" />

            {/* Email */}
            <Stack>
              <Text textStyle="appTitle" textTransform="capitalize">
                Email
              </Text>
              <Text textStyle="appNormal">{userInfo.email}</Text>
            </Stack>
            {/* Name */}
            <Stack>
              <Text textStyle="appTitle" textTransform="capitalize">
                Username
              </Text>
              <Text
                textStyle="appNormal"
                color={username ? 'white' : 'whiteBlur.100'}
              >
                {username ? username : 'None'}
              </Text>
            </Stack>
            {/* Email Verified */}
            {/* <Stack>
              <Text textStyle="appTitle" textTransform="capitalize">
                Email Verification
              </Text>
              {user && user.emailVerified ? (
                <Flex>
                  <Text textStyle="appNormal" textTransform="capitalize" mr={2}>
                    Verified
                  </Text>
                  <Icon as={FcApproval} width="24px" height="24px" />
                </Flex>
              ) : (
                <Button
                  size={buttonSize}
                  variant="outline"
                  maxWidth="250px"
                  onClick={resendEmail}
                  disabled={isSubmitting}
                  rightIcon={
                    isSubmitting ? (
                      <Spinner size="sm" color="white" />
                    ) : undefined
                  }
                >
                  Send Verification Email
                </Button>
              )}
            </Stack> */}
          </Stack>
          {/* Linked Accounts */}
          <Stack gap={2}>
            <Text textStyle="appTitle" textTransform="capitalize">
              Linked Accounts
            </Text>
            {/* {isGoogleAccountConnected ? (
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
            )} */}

            <Flex>
              <Icon
                as={AiOutlineWallet}
                width="24px"
                height="24px"
                mr={2}
                color="green.200"
              />
              <Text textStyle="appNormal">
                Web3 wallet connected: {account}
              </Text>
            </Flex>
          </Stack>
          {/* Logout */}
          {/* <Button
            size={buttonSize}
            variant="outline"
            maxWidth="150px"
            onClick={logout}
          >
            Log out
          </Button> */}
        </Stack>
      )}
    </Box>
  );
}
