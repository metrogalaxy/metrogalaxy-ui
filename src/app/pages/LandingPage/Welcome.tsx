import * as React from 'react';
import { Container, Flex, Image, Box, Text } from '@chakra-ui/react';
import WelcomeImg from './assets/welcome.webp';
import Cloud1Img from './assets/cloud_1.webp';
import Cloud2Img from './assets/cloud_2.webp';
import Cloud3Img from './assets/cloud_3.webp';
import Cloud4Img from './assets/cloud_4.webp';

export function Welcome() {
  return (
    <Box bg="blue.100">
      <Container
        maxW="container.lg"
        py={{ base: 16 }}
        px={{ base: 8 }}
        position="relative"
      >
        <Flex
          width="full"
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
        >
          <Image
            width={{ base: '240px', md: '320px', lg: '380px' }}
            src={WelcomeImg}
            alt="WelcomeImg"
            mb="10"
            className="cssanimation hu__hu__"
          />
          <Box
            textAlign={{ base: 'center', lg: 'left' }}
            pl={{ base: 0, lg: 16 }}
          >
            <Text textStyle="h1" data-aos="fade-left" data-aos-duration="500">
              Welcome to MetroGalaxy
            </Text>
            <Text
              textStyle="h2"
              mt="16"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              Decentralized Metaverse <br />
              and Gamified Online Virtual World
            </Text>
            <Box position="relative" zIndex="2">
              <Text
                textStyle="paragraph"
                mt="10"
                textAlign="justify"
                data-aos="fade-left"
                data-aos-duration="900"
              >
                MetroGalaxy is a metaverse project that uniquely blends a social
                platform together with an online virtual game that lets you
                role-play as anyone you want, do anything you like in an
                ever-expanding decentralized world. Currently it is being
                developed on Avalanche.
              </Text>
            </Box>
          </Box>
        </Flex>
        <Image
          src={Cloud1Img}
          position="absolute"
          zIndex="1"
          h={{
            base: '240px',
            sm: '300px',
            md: '500px',
          }}
          top={{
            base: '-100px',
            md: '-160px',
            lg: '-250px',
          }}
          left={{
            base: '-80px',
            sm: '-100px',
            md: '-220px',
            lg: '-250px',
            xl: '-350px',
          }}
        />
        <Image
          src={Cloud2Img}
          position="absolute"
          zIndex="1"
          h={{
            base: '160px',
            sm: '260px',
            lg: '400px',
          }}
          bottom={{
            base: '-100px',
            sm: '-200px',
            md: '-220px',
            lg: '-300px',
          }}
          left={{
            base: '-50px',
            lg: '-100px',
            xl: '-250px',
          }}
        />

        <Image
          src={Cloud3Img}
          position="absolute"
          zIndex="1"
          h={{
            base: '50px',
            sm: '80px',
            lg: '100px',
            xl: '180px',
          }}
          top={{
            base: '-40px',
            sm: '-50px',
            lg: '-100px',
            xl: '-200px',
          }}
          right={{
            base: '10px',
            md: '20px',
            xl: '-80px',
          }}
        />
        <Image
          src={Cloud4Img}
          position="absolute"
          zIndex="1"
          h={{
            base: '100px',
            sm: '120px',
            lg: '150px',
            xl: '200px',
          }}
          bottom={{
            base: '-30px',
            sm: '-50px',
            lg: '-100px',
            xl: '-150px',
          }}
          right={{
            base: '0',
            md: '20px',
            xl: '-80px',
          }}
        />
      </Container>
    </Box>
  );
}
