import * as React from 'react';
import { Box, Button, useMediaQuery } from '@chakra-ui/react';
import MainsquareImg from './assets/mainsquare.webp';
import { TELEGRAM_URL } from 'src/app/config/constants';

export function LandingPageBanner() {
  const [isMobile] = useMediaQuery('(max-width: 576px)');

  const joinUs = () => {
    window.open(TELEGRAM_URL, '_blank');
  };

  return (
    <Box
      bgImage={MainsquareImg}
      w="full"
      height={{ base: '480px', md: '640px', lg: '100vh' }}
      bgSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
      overflow="hidden"
    >
      <Button
        onClick={joinUs}
        variant="solid"
        size={isMobile ? 'sm' : 'md'}
        position="absolute"
        bottom="8"
        right="50%"
        transform="translateX(50%)"
        bgColor="gray.200"
        color="white"
      >
        Become Our Citizen Now
      </Button>
    </Box>
  );
}
