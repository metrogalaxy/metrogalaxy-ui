import * as React from 'react';
import {
  Container,
  Stack,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Link,
  Button,
  Spinner,
  useBoolean,
} from '@chakra-ui/react';
import { useButtonSize } from 'src/app/hooks';
import { useForm } from 'react-hook-form';
import {
  signUpWithEmailPassword,
  sendVerificationEmail,
  fetchUserInfo,
} from 'src/app/service/Auth';
import { toast } from 'react-toastify';
import { ToastConfig } from 'src/app/config';
import { parseFirebaseAuthError } from 'src/utils/errors';
import { VerifyEmail } from './VerifyEmail';
import { ConnectWallet } from './ConnectWallet';
import { useAccount } from 'src/app/hooks';
import { useEthers } from '@quangkeu1995/dappcore';
import {
  SignUpFormData,
  signMessageToConnectWeb3,
} from 'src/app/service/Auth/';
import { Web3Provider } from '@ethersproject/providers';

export function SignUpForm() {
  const buttonSize = useButtonSize();
  const [isSubmitting, setIsSubmitting] = useBoolean();
  const [userEmail, setUserEmail] = React.useState<string>('');
  const { register, formState, handleSubmit, setValue } =
    useForm<SignUpFormData>();
  const { isActivated } = useAccount();
  const { account, library } = useEthers();
  const provider = library as Web3Provider;

  // register field wallet manually
  register('wallet', {
    required: true,
    validate: value => value !== '' && isActivated,
  });

  React.useEffect(() => {
    setValue('wallet', account ? account : '');
  }, [account, setValue]);

  const onSubmit = async (data: SignUpFormData) => {
    setIsSubmitting.on();

    // verify that user wallet is not used
    try {
      const userInfo = await fetchUserInfo(account!);
      if (userInfo) {
        toast.error('wallet address is already used', ToastConfig);
        setIsSubmitting.off();
        return;
      }
    } catch (error) {}

    try {
      // get user signature
      const signature = await signMessageToConnectWeb3(provider, account);
      data.signature = signature;

      const response = await signUpWithEmailPassword(data);
      if (response.user.email) {
        setUserEmail(response.user.email);
        if (!response.user.emailVerified) {
          // send email verification
          await sendVerificationEmail();
        }
      }
      setIsSubmitting.off();
    } catch (error: any) {
      toast.dismiss();
      const err = parseFirebaseAuthError(error);
      toast.error(err.message, ToastConfig);
      setIsSubmitting.off();
      return;
    }
  };

  // const onGoogleSignup = async () => {
  //   setIsSubmittingGoogle.on();
  //   try {
  //     await signInWithGoogle();
  //     setIsSubmittingGoogle.off();
  //     navigate('/profile');
  //   } catch (error) {
  //     toast.dismiss();
  //     const err = parseFirebaseAuthError(error);
  //     toast.error(err.message, ToastConfig);
  //     setIsSubmitting.off();
  //     return;
  //   }
  // };

  const isMissingEmail =
    formState.errors.email && formState.errors.email.type === 'required';
  const isInvalidEmail =
    formState.errors.email && formState.errors.email.type === 'pattern';
  const isMissingPassword =
    formState.errors.password && formState.errors.password.type === 'required';
  const isInvalidPassword =
    formState.errors.password && formState.errors.password.type === 'pattern';
  const isMissingUsername =
    formState.errors.username && formState.errors.username.type === 'required';
  const isInvalidUsername =
    formState.errors.username && formState.errors.username.type === 'pattern';
  const isMissingWallet =
    formState.errors.wallet &&
    (formState.errors.wallet.type === 'required' ||
      formState.errors.wallet.type === 'validate');

  if (userEmail) {
    return <VerifyEmail />;
  }

  return (
    <Container
      maxW="md"
      bgColor="gray.400"
      borderRadius="20px"
      py={10}
      px={10}
      zIndex={2}
    >
      <Text textStyle="appTitle" textAlign="center" textTransform="uppercase">
        Sign Up
      </Text>
      <Stack mt={10} gap={2}>
        {/* Connect Wallet */}
        <FormControl isInvalid={isMissingWallet}>
          <FormLabel
            textStyle="appNormal"
            htmlFor="wallet"
            fontFamily="Acrom-Bold"
          >
            Wallet
          </FormLabel>
          <ConnectWallet />
          {isMissingWallet && (
            <FormErrorMessage>Wallet is not connected</FormErrorMessage>
          )}
        </FormControl>

        {/* Email */}
        <FormControl isRequired isInvalid={isMissingEmail || isInvalidEmail}>
          <FormLabel
            textStyle="appNormal"
            htmlFor="email"
            fontFamily="Acrom-Bold"
          >
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            bgColor="gray.500"
            color="white"
            _focus={
              isMissingEmail || isInvalidEmail
                ? {
                    borderColor: 'transparent',
                  }
                : {
                    borderColor: 'greenBlur.100',
                  }
            }
            _placeholder={{
              color: 'white.100',
            }}
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {isMissingEmail && (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
          {isInvalidEmail && (
            <FormErrorMessage>Invalid email.</FormErrorMessage>
          )}
        </FormControl>
        {/* Password */}
        <FormControl
          isRequired
          isInvalid={isMissingPassword || isInvalidPassword}
        >
          <FormLabel
            textStyle="appNormal"
            htmlFor="password"
            fontFamily="Acrom-Bold"
          >
            Password
          </FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            bgColor="gray.500"
            color="white"
            _focus={
              isMissingPassword || isInvalidPassword
                ? {
                    borderColor: 'transparent',
                  }
                : {
                    borderColor: 'greenBlur.100',
                  }
            }
            _placeholder={{
              color: 'white.100',
            }}
            {...register('password', {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/, // min eight characters, at least one uppercase letter, one lowercase letter and one number
            })}
          />
          {isMissingPassword && (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
          {isInvalidPassword && (
            <FormErrorMessage>
              Passwords must have at least 8 characters and contain at least one
              uppercase letter, one lowercase letter and one numbers.
            </FormErrorMessage>
          )}
        </FormControl>
        {/* username */}
        <FormControl
          isRequired
          isInvalid={isMissingUsername || isInvalidUsername}
        >
          <FormLabel
            textStyle="appNormal"
            htmlFor="username"
            fontFamily="Acrom-Bold"
          >
            Username
          </FormLabel>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            bgColor="gray.500"
            color="white"
            _focus={
              isMissingUsername || isInvalidUsername
                ? {
                    borderColor: 'transparent',
                  }
                : {
                    borderColor: 'greenBlur.100',
                  }
            }
            _placeholder={{
              color: 'white.100',
            }}
            {...register('username', {
              required: true,
              pattern: /^[a-zA-Z0-9.\-_$]{3,30}$/, // min 3, max 30 characters, allow alpha numberic characters, -, _, ., $
            })}
          />
          {isMissingUsername && (
            <FormErrorMessage>Username is required.</FormErrorMessage>
          )}
          {isInvalidUsername && (
            <FormErrorMessage>
              Name must have at least 3 characters and maximum 30 characters.
              Numbers, letters, -, _, $, . are allowed.
            </FormErrorMessage>
          )}
        </FormControl>
      </Stack>
      <Stack mt={10} justifyContent="center" gap={2}>
        <Button
          width="100%"
          variant="solid"
          size={buttonSize}
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          rightIcon={
            isSubmitting ? <Spinner size="sm" color="white" /> : undefined
          }
        >
          Create Account
        </Button>
        {/* <Text
          textStyle="appNormal"
          color="whiteBlur.200"
          textAlign="center"
          fontSize={{ base: '12px', lg: '14px' }}
        >
          OR
        </Text>
        <Button
          leftIcon={<Icon as={FcGoogle} />}
          variant="outline"
          size={buttonSize}
          disabled={isSubmitting || isSubmittingGoogle}
          onClick={onGoogleSignup}
          rightIcon={
            isSubmittingGoogle ? <Spinner size="sm" color="white" /> : undefined
          }
        >
          Sign up with Google
        </Button> */}
      </Stack>
      <Stack mt={6}>
        <Text
          textStyle="appNormal"
          color="whiteBlur.200"
          textAlign="center"
          fontSize={{ base: '12px', lg: '14px' }}
        >
          Already have an account?{' '}
          <Link href="/profile" color="green.200">
            View profile
          </Link>
        </Text>
      </Stack>
      {/* <Stack mt={3}>
        <Text
          textStyle="appNormal"
          color="whiteBlur.200"
          textAlign="center"
          fontSize={{ base: '12px', lg: '14px' }}
        >
          Email not verified?{' '}
          <Link href="" color="green.200" onClick={sendVerificationEmail}>
            Send verification email
          </Link>
        </Text>
      </Stack> */}
    </Container>
  );
}
