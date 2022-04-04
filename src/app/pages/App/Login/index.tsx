import * as React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import BannerImg from 'src/app/pages/LandingPage/assets/banner.webp';
// import { LoginForm } from './LoginForm';

export function Login() {
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
      {/* <LoginForm /> */}
    </Flex>
  );
}
