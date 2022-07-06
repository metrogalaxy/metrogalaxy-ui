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
  Link,
  Spinner,
  Center,
  useBoolean,
} from '@chakra-ui/react';
import BannerImg from 'src/app/pages/LandingPage/assets/banner.webp';
import { useButtonSize } from 'src/app/hooks';
import { useForm } from 'react-hook-form';
import { sendResetPassword } from 'src/app/service/Auth';
import { toast } from 'react-toastify';
import { ToastConfig } from 'src/app/config';

interface FormData {
  email: string;
}

export function ResetPassword() {
  const buttonSize = useButtonSize();
  const { register, handleSubmit } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useBoolean();
  const [isSubmitted, setIsSubmitted] = useBoolean();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting.on();
    try {
      await sendResetPassword(data.email);
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
          Forgot password?
        </Text>
        <Text
          textStyle="appNormal"
          textAlign="center"
          color="white.100"
          mt={3}
          fontSize={{ base: '12px', lg: '14px' }}
        >
          No worries. We'll send you reset instructions.
        </Text>
        {!isSubmitted && (
          <Stack mt={10} gap={6}>
            <FormControl>
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
                _focus={{
                  borderColor: 'greenBlur.100',
                }}
                _placeholder={{
                  color: 'white.100',
                }}
                {...register('email', {})}
              />
            </FormControl>
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
              Reset Password
            </Button>
          </Stack>
        )}
        {isSubmitted && (
          <Center>
            <Text textStyle="appNormal" mt={8}>
              Reset password email sent!
            </Text>
          </Center>
        )}
        <Flex justifyContent="center" mt={4}>
          <Link
            textStyle="appNormal"
            color="white.100"
            fontSize={{ base: '12px', lg: '14px' }}
            href="/"
          >
            Back to home
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
}
