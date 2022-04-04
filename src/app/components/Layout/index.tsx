import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export function PageLayout({ children, isShowConnectWallet }) {
  return (
    <Box>
      <NavBar isShowConnectWallet={isShowConnectWallet} />
      {children}
      <Footer />
    </Box>
  );
}
