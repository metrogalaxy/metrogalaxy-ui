import * as React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { NavBar } from 'src/app/components/Layout/NavBar';
import BgImg from 'src/app/assets/app/background.webp';
import ComingSoonImg from 'src/app/assets/app/coming_soon.webp';

export function ComingSoon() {
  return (
    <Box w="full" height="100vh">
      <NavBar isShowConnectWallet={true} />
      <Box
        w="full"
        height="100%"
        bgImage={BgImg}
        bgSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        overflow="hidden"
        pt={18}
        opacity={0.6}
      ></Box>
      <Box position="absolute" top={40} w="full">
        <Flex
          flexDirection={{ base: 'column', xl: 'row' }}
          justifyContent="center"
          alignItems="center"
        >
          <Flex flexDirection="column" textAlign="center" mr={{ lg: 5 }}>
            <Text
              color="white"
              fontSize={{ base: '2xl', lg: '4xl' }}
              textTransform="uppercase"
              fontFamily="Acrom-Bold"
            >
              Coming Soon
            </Text>
            <Text
              color="white"
              fontSize={{ base: '2xl', lg: '4xl' }}
              textTransform="uppercase"
              fontFamily="Acrom-Bold"
              transform="matrix(1, 0, 0, -1, 0, 0)"
              opacity={0.08}
            >
              Coming Soon
            </Text>
          </Flex>

          <Image
            src={ComingSoonImg}
            w={{ base: '100%', lg: '900px' }}
            h={{ base: '100%', lg: '620px' }}
          />
        </Flex>
      </Box>
    </Box>
  );
}
