import * as React from 'react';
import { Box, Button, Center, useMediaQuery } from '@chakra-ui/react';
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
      <Center
        position="absolute"
        right="50%"
        bottom={{ base: 16, md: 28 }}
        transform="translateX(50%)"
        w="full"
        zIndex={2}
      >
        <Button
          onClick={joinUs}
          variant="solid"
          size={isMobile ? 'sm' : 'md'}
          borderColor="gray.200"
          boxShadow="0px 12px 28px rgba(0, 0, 0, 0.25)"
          _hover={{
            color: 'green.200',
            bgColor: 'gray.500',
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Become Our Citizen Now
        </Button>
      </Center>
    </Box>
  );
}
