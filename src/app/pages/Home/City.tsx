import * as React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import MainsquareImg from './assets/mainsquare.webp';
import { useButtonSize } from 'src/app/hooks/useSize';
import { useNavigate } from 'react-router-dom';
// import { TELEGRAM_URL } from 'src/app/config/constants';

export function City() {
  // const joinUs = () => {
  //   window.open(TELEGRAM_URL, '_blank');
  // };

  const navigate = useNavigate();

  return (
    <Box
      bgImg={MainsquareImg}
      w="full"
      height={{ base: '530px', xl: '740px', '2xl': '1320px' }}
      bgSize={{ base: 'cover', lg: 'contain', xl: 'contain' }}
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
          bgColor="grayBlur.400"
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
      <Box
        position="absolute"
        left="50%"
        bottom={50}
        transform="translateX(-50%) translateY(-50%)"
      >
        <Button
          // onClick={joinUs}
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
          onClick={() => {
            navigate('theworld');
          }}
        >
          Learn More About The World
        </Button>
      </Box>
    </Box>
  );
}
