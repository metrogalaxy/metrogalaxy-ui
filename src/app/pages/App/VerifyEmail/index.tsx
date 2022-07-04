import * as React from 'react';
import {
  Container,
  Image,
  Center,
  Stack,
  Text,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';
import BannerImg from 'src/app/pages/LandingPage/assets/banner.webp';
import EmailIcon from './assets/verified_email.png';
import { useButtonSize } from 'src/app/hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ENV from 'src/app/config';
import { verifyEmail } from 'src/app/service/Auth';
import { LoadingSpinner } from 'src/app/components/Loading';

export function VerifyEmail() {
  const buttonSize = useButtonSize();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('token') || '';
  const [isVerified, setIsVerified] = React.useState<boolean>(false);
  const [fetched, setIsFetched] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>();

  React.useEffect(() => {
    const tryVerifyEmail = async () => {
      try {
        await verifyEmail(accessToken);
        setIsVerified(true);
      } catch (error: any) {
        console.error(error);
        setError(error.toString());
      } finally {
        setIsFetched(true);
      }
    };
    tryVerifyEmail();
  }, [accessToken]);

  const backToHome = () => {
    navigate('/');
  };

  const redirectToApp = () => {
    window.open(ENV.gameWebAppUrl, '_blank');
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
      {fetched ? (
        <Container
          maxW="md"
          bgColor="gray.400"
          borderRadius="20px"
          py={10}
          px={10}
          zIndex={2}
        >
          {isVerified ? (
            <div>
              <Stack gap={1}>
                <Center>
                  <Image src={EmailIcon} width="100px" height="100px" />
                </Center>
                <Text
                  textStyle="appTitle"
                  textAlign="center"
                  textTransform="capitalize"
                >
                  Verify Email Success
                </Text>
              </Stack>
              <Stack mt={6}>
                <Text textStyle="appNormal" textAlign="justify">
                  Your account has been made, now you can login into the game.
                </Text>
              </Stack>
              <Stack mt={8} gap={1}>
                <Button
                  size={buttonSize}
                  variant="solid"
                  onClick={redirectToApp}
                >
                  Login
                </Button>
                <Button
                  size={buttonSize}
                  variant="outline"
                  onClick={backToHome}
                >
                  Back to home
                </Button>
              </Stack>
            </div>
          ) : (
            <div>
              <Stack gap={1}>
                <Text
                  textStyle="appTitle"
                  textAlign="center"
                  textTransform="capitalize"
                >
                  Verify Email Failed
                </Text>
              </Stack>
              <Stack mt={6} gap={1}>
                <Text textStyle="appNormal" textAlign="justify">
                  {error}
                </Text>
              </Stack>
            </div>
          )}
        </Container>
      ) : (
        <Container
          maxW="md"
          bgColor="gray.400"
          borderRadius="20px"
          py={10}
          px={10}
          zIndex={2}
        >
          <Center>
            <LoadingSpinner />
          </Center>
        </Container>
      )}
    </Flex>
  );
}
