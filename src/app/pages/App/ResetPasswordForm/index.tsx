import * as React from 'react';
import {
  Flex,
  Box,
  Container,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
  Center,
  useBoolean,
  FormErrorMessage,
} from '@chakra-ui/react';
import BannerImg from 'src/app/pages/LandingPage/assets/banner.webp';
import { useButtonSize } from 'src/app/hooks';
import { useForm } from 'react-hook-form';
import { resetPassword } from 'src/app/service/Auth';
import { toast } from 'react-toastify';
import { ToastConfig } from 'src/app/config';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface FormData {
  password: string;
  confirmPassword: string;
}

export function ResetPasswordForm() {
  const buttonSize = useButtonSize();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useBoolean();
  const [isSubmitted, setIsSubmitted] = useBoolean();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('token') || '';

  const { register, formState, handleSubmit } = useForm<FormData>();

  const isMissingPassword =
    formState.errors.password && formState.errors.password.type === 'required';
  const isInvalidPassword =
    formState.errors.password && formState.errors.password.type === 'pattern';

  const backToHome = () => {
    navigate('/');
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting.on();
    try {
      if (data.password !== data.confirmPassword) {
        throw new Error('confirm password does not match');
      }
      await resetPassword(data.password, accessToken);
      setIsSubmitted.on();
      setIsSubmitting.off();
      return;
    } catch (error: any) {
      toast.dismiss();
      const err = new Error(error);
      toast.error(err.message, ToastConfig);
      setIsSubmitting.off();
      return;
    }
  };

  return (
    <Flex
      alignItems="center"
      bgImg={BannerImg}
      bgSize="cover"
      w="full"
      minHeight="100vh"
      height="100%"
      bgColor="blue.100"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow="hidden"
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bgColor="rgba(0,0,0,0.5)"
      ></Box>
      <Container
        maxW="md"
        bgColor="gray.400"
        borderRadius="20px"
        py={10}
        px={10}
        zIndex={2}
      >
        <Text textStyle="appTitle" textAlign="center" textTransform="uppercase">
          Reset Password
        </Text>
        {!isSubmitted && (
          <div>
            <Stack mt={10} gap={2}>
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
                  placeholder="Enter your new password"
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
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/, // min eight characters, at least one uppercase letter, one lowercase letter and one number
                  })}
                />
                {isMissingPassword && (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
                {isInvalidPassword && (
                  <FormErrorMessage>
                    Passwords must have at least 8 characters and contain at
                    least one uppercase letter, one lowercase letter and one
                    numbers.
                  </FormErrorMessage>
                )}
              </FormControl>
              {/* Confirm Password */}
              <FormControl isRequired>
                <FormLabel
                  textStyle="appNormal"
                  htmlFor="confirmPassword"
                  fontFamily="Acrom-Bold"
                >
                  Confirm Password
                </FormLabel>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your new password"
                  bgColor="gray.500"
                  color="white"
                  _focus={{
                    borderColor: 'greenBlur.100',
                  }}
                  _placeholder={{
                    color: 'white.100',
                  }}
                  {...register('confirmPassword')}
                />
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
                Submit
              </Button>
            </Stack>
          </div>
        )}
        {isSubmitted && (
          <Stack mt={4}>
            <Stack mb={4}>
              <Center>
                <Text textStyle="appNormal" textAlign="justify">
                  Reset password success
                </Text>
              </Center>
            </Stack>
            <Stack>
              <Button size={buttonSize} variant="outline" onClick={backToHome}>
                Back to home
              </Button>
            </Stack>
          </Stack>
        )}
      </Container>
    </Flex>
  );
}
