import * as React from 'react';
import styled from 'styled-components/macro';
import { Box } from '@chakra-ui/react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

// DEPRECATED
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export function PageLayout({ children }) {
  return (
    <Box>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
}
