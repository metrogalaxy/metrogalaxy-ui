import * as React from 'react';
import {
  Container,
  Image,
  Center,
  Stack,
  Text,
  Button,
  Spinner,
  useBoolean,
} from '@chakra-ui/react';
import EmailIcon from './assets/email.png';
import { useButtonSize } from 'src/app/hooks';
import { useNavigate } from 'react-router-dom';
import { sendVerificationEmail } from 'src/app/service/Auth';
import { toast } from 'react-toastify';
import { ToastConfig } from 'src/app/config';
import { parseFirebaseAuthError } from 'src/utils/';

export function VerifyEmail() {
  const [isSubmitting, setIsSubmitting] = useBoolean();
  const buttonSize = useButtonSize();
  const navigate = useNavigate();

  const backToProfile = () => {
    navigate('/profile');
  };

  const resendEmail = async () => {
    setIsSubmitting.on();
    try {
      await sendVerificationEmail();
      toast.dismiss();
      toast.success('Verification email sent!', ToastConfig);
    } catch (error) {
      const err = parseFirebaseAuthError(error);
      toast.dismiss();
      toast.error(err.message, ToastConfig);
    }
    setIsSubmitting.off();
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      // const user = getAuth().currentUser;
      // console.log(user);
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <Container
      maxW="md"
      bgColor="gray.400"
      borderRadius="20px"
      py={10}
      px={10}
      zIndex={2}
    >
      <Stack gap={1}>
        <Center>
          <Image src={EmailIcon} width="100px" height="100px" />
        </Center>
        <Text
          textStyle="appTitle"
          textAlign="center"
          textTransform="capitalize"
        >
          Verify your email address
        </Text>
      </Stack>
      <Stack mt={6}>
        <Text textStyle="appNormal" textAlign="justify">
          Your account has been made, please verify it by clicking the
          activation link that has been sent to your email.
        </Text>
      </Stack>
      <Stack mt={8} gap={1}>
        <Button
          size={buttonSize}
          onClick={resendEmail}
          disabled={isSubmitting}
          rightIcon={
            isSubmitting ? <Spinner size="sm" color="white" /> : undefined
          }
        >
          Resend email
        </Button>
        <Button
          size={buttonSize}
          variant="outline"
          onClick={backToProfile}
          disabled={isSubmitting}
        >
          Back to user profile page
        </Button>
      </Stack>
    </Container>
  );
}
