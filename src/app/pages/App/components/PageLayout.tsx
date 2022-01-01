import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@chakra-ui/react';
import { NavBar } from 'src/app/components/Layout/NavBar';
import BgImg from 'src/app/assets/app/background.webp';

interface PageLayoutProps {
  title: string;
  content: string;
  children?: React.ReactNode;
}

export function PageLayout(props: PageLayoutProps) {
  return (
    <Box
      w="full"
      minHeight="100vh"
      height="100%"
      bgImage={BgImg}
      bgSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow="hidden"
    >
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.content} />
      </Helmet>
      <NavBar isShowConnectWallet={true} />
      <Container
        height="100%"
        maxW="1440px"
        mt="98px"
        py={{ base: 4, md: 6 }}
        px={{ base: 6, md: 12 }}
      >
        {props.children}
      </Container>
    </Box>
  );
}
