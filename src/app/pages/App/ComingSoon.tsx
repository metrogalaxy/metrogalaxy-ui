import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { NavBar } from 'src/app/components/Layout/NavBar';
import IslandImg from 'src/app/pages/LandingPage/assets/island.webp';

export function ComingSoon() {
  return (
    <Box w="full" height="100vh">
      <NavBar />
      <Box
        w="full"
        height="100%"
        bgImage={IslandImg}
        bgSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        overflow="hidden"
        pt={18}
        opacity={0.6}
      ></Box>
      <Box position="absolute" top={40} left="50%" transform="translateX(-50%)">
        <Text color="white" fontSize={{ base: '2xl', lg: '4xl' }}>
          Coming Soon
        </Text>
      </Box>
    </Box>
  );
}
