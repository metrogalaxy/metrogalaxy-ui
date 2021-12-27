import * as React from 'react';
import { Container, Flex, Image, Box, Text } from '@chakra-ui/react';
import WelcomeImg from './assets/welcome.webp';

export function Welcome() {
  return (
    <Container
      maxW="container.lg"
      py={{ base: 16 }}
      px={{ base: 8 }}
      bg="gray.400"
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
        />
        <Box
          textAlign={{ base: 'center', lg: 'left' }}
          pl={{ base: 0, lg: 16 }}
        >
          <Text
            color="white.200"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
          >
            Welcome to MetroGalaxy
          </Text>
          <Text
            color="white.200"
            fontSize={{ base: 'xl', md: '2xl' }}
            mt="16"
            fontWeight="bold"
          >
            Decentralized Metaverse <br />
            and Gamified Online Virtual World
          </Text>
          <Text
            color="white.100"
            mt="10"
            textAlign="justify"
            fontSize={{ base: 'md', md: 'lg' }}
          >
            MetroGalaxy is a metaverse project that uniquely blends a social
            platform together with an online virtual game that lets you
            role-play as anyone you want, do anything you like in an
            ever-expanding decentralized world. Currently it is being developed
            on Avalanche.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}
