import * as React from 'react';
import { Box, Button, Center } from '@chakra-ui/react';
import BannerImg from './assets/banner.webp';
import { DISCORD_URL } from 'src/app/config/constants';
import { useButtonSize } from 'src/app/hooks/useSize';

export function LandingPageBanner() {
  const joinUs = () => {
    window.open(DISCORD_URL, '_blank');
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
      bgColor="blue.800"
    >
      <Center
        position="absolute"
        flexDirection="column"
        right="50%"
        bottom={{ base: 14, lg: 24 }}
        transform="translateX(50%)"
        w="full"
        zIndex={2}
      >
        {/* <Text
          textStyle="h1"
          fontFamily="Acrom-Bold"
          fontSize={{ base: 30, lg: 42 }}
          textAlign="center"
          data-aos="fade-up"
          data-aos-duration="500"
          mb={{ base: 4, md: 8 }}
        >
          Welcome to MetroGalaxy
        </Text> */}
        <Button
          onClick={joinUs}
          variant="solid"
          size={useButtonSize()}
          borderColor="gray.200"
          boxShadow="0px 12px 28px rgba(0, 0, 0, 0.25)"
          _hover={{
            color: 'green.200',
            bgColor: 'gray.500',
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Join Us On Discord
        </Button>
      </Center>
    </Box>
  );
}
