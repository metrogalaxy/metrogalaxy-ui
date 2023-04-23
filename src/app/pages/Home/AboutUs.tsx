import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { NavBar } from 'src/app/components/Layout/NavBar';
import { Footer } from 'src/app/components/Layout/Footer';
import { Team } from './Team';

export function AboutUs() {
  return (
    <Box bgColor="gray.500" w="full" height="full">
      <NavBar />
      <Box pt={20}>
        <Team />
      </Box>
      <Footer />
    </Box>
  );
}
