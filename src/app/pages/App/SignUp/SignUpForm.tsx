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
  Icon,
  Spinner,
  useBoolean,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useButtonSize } from 'src/app/hooks';
import { useForm } from 'react-hook-form';
import {
  signUpWithEmailPassword,
  sendVerificationEmail,
  signInWithGoogle,
} from 'src/app/service/Auth';
import { toast } from 'react-toastify';
import { ToastConfig } from 'src/app/config';
import { parseFirebaseAuthError } from 'src/utils/errors';
import { VerifyEmail } from './VerifyEmail';
import { useNavigate } from 'react-router-dom';

interface SignUpFormData {
  email: string;
  password: string;
  name: string;
}

export function SignUpForm() {
  const buttonSize = useButtonSize();
  const [isSubmitting, setIsSubmitting] = useBoolean();
  const [isSubmittingGoogle, setIsSubmittingGoogle] = useBoolean();
  const [userEmail, setUserEmail] = React.useState<string>('');
  const { register, formState, handleSubmit } = useForm<SignUpFormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: SignUpFormData) => {
    setIsSubmitting.on();
    try {
      const response = await signUpWithEmailPassword(
        data.email,
        data.password,
        data.name,
      );
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

  const onGoogleSignup = async () => {
    setIsSubmittingGoogle.on();
    try {
      await signInWithGoogle();
      setIsSubmittingGoogle.off();
      navigate('/profile');
    } catch (error) {
      toast.dismiss();
      const err = parseFirebaseAuthError(error);
      toast.error(err.message, ToastConfig);
      setIsSubmitting.off();
      return;
    }
  };

  const isMissingEmail =
    formState.errors.email && formState.errors.email.type === 'required';
  const isInvalidEmail =
    formState.errors.email && formState.errors.email.type === 'pattern';
  const isMissingPassword =
    formState.errors.password && formState.errors.password.type === 'required';
  const isInvalidPassword =
    formState.errors.password && formState.errors.password.type === 'pattern';
  const isMissingName =
    formState.errors.name && formState.errors.name.type === 'required';
  const isInvalidName =
    formState.errors.name &&
    (formState.errors.name.type === 'minLength' ||
      formState.errors.name.type === 'maxLength');

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
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, // min eight characters, at least one uppercase letter, one lowercase letter and one number
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
        {/* Name */}
        <FormControl isRequired isInvalid={isMissingName || isInvalidName}>
          <FormLabel
            textStyle="appNormal"
            htmlFor="name"
            fontFamily="Acrom-Bold"
          >
            Name
          </FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            bgColor="gray.500"
            color="white"
            _focus={
              isMissingName || isInvalidName
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
            {...register('name', {
              required: true,
              minLength: 4,
              maxLength: 50,
            })}
          />
          {isMissingName && (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
          {isInvalidName && (
            <FormErrorMessage>
              Name must have at least 4 characters and maximum 50 characters.
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
          disabled={isSubmitting || isSubmittingGoogle}
          rightIcon={
            isSubmitting ? <Spinner size="sm" color="white" /> : undefined
          }
        >
          Create Account
        </Button>
        <Text
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
        </Button>
      </Stack>
      <Stack mt={6}>
        <Text
          textStyle="appNormal"
          color="whiteBlur.200"
          textAlign="center"
          fontSize={{ base: '12px', lg: '14px' }}
        >
          Already have an account?{' '}
          <Link href="/login" color="green.200">
            Log in
          </Link>
        </Text>
      </Stack>
    </Container>
  );
}
