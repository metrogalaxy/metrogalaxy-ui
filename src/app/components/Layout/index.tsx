import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export function PageLayout({ children }) {
  return (
    <Box>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
}
