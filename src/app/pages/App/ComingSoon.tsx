import * as React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
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
      >
        <Center w="full" height="full" alignItems="flex-end" pb={20}>
          <Text color="white" fontSize={{ base: '2xl', lg: '4xl' }}>
            Coming Soon
          </Text>
        </Center>
      </Box>
    </Box>
  );
}
