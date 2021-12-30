import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import MainsquareImg from './assets/mainsquare.webp';

export function City() {
  return (
    <Box
      bgImg={MainsquareImg}
      w="full"
      height="900px"
      bgSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderTop="2px solid"
      borderBottom="2px solid"
      borderTopColor="green.200"
      borderBottomColor="green.200"
      position="relative"
    >
      <Box
        position="absolute"
        left="50%"
        transform="translateX(-50%) translateY(-50%)"
      >
        <Box
          bgColor="grayBlur.100"
          color="white"
          border="2px solid"
          borderColor="green.200"
          boxShadow="0px 12px 28px rgba(0, 0, 0, 0.25)"
          borderRadius="40px"
          py={{
            base: 4,
          }}
          px={{
            base: 6,
          }}
          data-aos="flip-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <Text
            fontFamily="Acrom-Bold"
            color="white.200"
            fontSize={{ base: '14px', md: '16px' }}
          >
            MetroGalaxy City
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
