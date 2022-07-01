import * as React from 'react';
import {
  Container,
  Image,
  Center,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import EmailIcon from './assets/email.png';
import { useButtonSize } from 'src/app/hooks';
import { useNavigate } from 'react-router-dom';
import ENV from 'src/app/config';

export function SignupSuccess() {
  const buttonSize = useButtonSize();
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  };

  const redirectToApp = () => {
    window.open(ENV.gameWebAppUrl, '_blank');
  };

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
          Signup Success
        </Text>
      </Stack>
      <Stack mt={6}>
        <Text textStyle="appNormal" textAlign="justify">
          Your account has been made, now you can login into the game.
        </Text>
      </Stack>
      <Stack mt={8} gap={1}>
        <Button size={buttonSize} variant="solid" onClick={redirectToApp}>
          Login
        </Button>
        <Button size={buttonSize} variant="outline" onClick={backToHome}>
          Back to home
        </Button>
      </Stack>
    </Container>
  );
}
