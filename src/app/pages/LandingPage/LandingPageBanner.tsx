import * as React from 'react';
import { Box, Button, useMediaQuery } from '@chakra-ui/react';
import BannerImg from './assets/banner.webp';
import { TELEGRAM_URL } from 'src/app/config/constants';

export function LandingPageBanner() {
  const [isMobile] = useMediaQuery('(max-width: 576px)');

  const joinUs = () => {
    window.open(TELEGRAM_URL, '_blank');
  };

  return (
    <Box
      bgImage={BannerImg}
      w="full"
      height={{ base: '640px', md: '640px', lg: '100vh' }}
      bgSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
      overflow="hidden"
      bgColor="blue.100"
    >
      <Button
        onClick={joinUs}
        variant="solid"
        size={isMobile ? 'sm' : 'md'}
        position="absolute"
        bottom={{ base: 16, md: 28 }}
        right="50%"
        transform="translateX(50%)"
        borderColor="gray.200"
        boxShadow="0px 12px 28px rgba(0, 0, 0, 0.25)"
        _hover={{
          color: 'green.200',
          bgColor: 'gray.500',
        }}
        zIndex="2"
      >
        Become Our Citizen Now
      </Button>
    </Box>
  );
}
