import * as React from 'react';
import { Box, Image, Center } from '@chakra-ui/react';
import { NavBar } from 'src/app/components/Layout/NavBar';
import { Footer } from 'src/app/components/Layout/Footer';
import TokenomicsImg from 'src/app/assets/tokenomics.svg';

export function Tokenomics() {
  return (
    <Box bgColor="gray.500">
      <NavBar />
      <Center pt={24} width="100%">
        <Image src={TokenomicsImg} />
      </Center>
      <Footer />
    </Box>
  );
}
