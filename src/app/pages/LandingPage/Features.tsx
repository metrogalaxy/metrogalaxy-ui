import * as React from 'react';
import {
  Box,
  Text,
  Container,
  Grid,
  ListItem,
  UnorderedList,
  Image,
} from '@chakra-ui/react';
import IslandImg from './assets/island.webp';
import CreateToEarnImg from './assets/create_to_earn.webp';
import CreateToEarnBgImg from './assets/create_to_earn_bg.webp';
import Cloud5Img from './assets/cloud_5.webp';
import Cloud6Img from './assets/cloud_6.webp';

export function Features() {
  return (
    <Box>
      {/* Live Your Virtual Life */}
      <Box w="full" bgColor="blue.100" position="relative">
        <Box
          bgImage={IslandImg}
          w="full"
          bgSize="cover"
          backgroundPosition="top"
          backgroundRepeat="no-repeat"
          overflow="hidden"
          height={{
            base: '800px',
            lg: '1200px',
            xl: '1600px',
          }}
        />
        <Box
          height={{
            base: '300px',
            md: '250px',
            xl: '200px',
          }}
          position="relative"
        >
          <Box
            w="full"
            position="absolute"
            top={{
              base: '-100px',
              md: '-50px',
              xl: '-100px',
            }}
            py={{ base: 0 }}
            px={{ base: 8 }}
          >
            <Container maxW="container.xl" pb="16">
              <Text textStyle="h1">Live Your Virtual Life</Text>
              <Text textStyle="paragraph" mt="10" textAlign="justify">
                The world of MetroGalaxy consists of various areas and maps,
                each with a unique and immersive design. You can interact with
                different elements in each area (e.g. entering a building,
                interacting with NPCs, play mini-games, etc.) as well as
                interact with other players (e.g. chat, play together, etc.)
                given the right conditions. Completing quests and mini-games
                will earn you various rewards in NFTs!
              </Text>
            </Container>
          </Box>
        </Box>
        <Image
          src={Cloud6Img}
          position="absolute"
          zIndex="1"
          h={{
            base: '100px',
            sm: '120px',
            md: '150px',
            lg: '220px',
            xl: '280px',
          }}
          top={{
            base: '-40px',
            sm: '-40px',
            md: '-60px',
            lg: '-120px',
            xl: '-150px',
          }}
          left={{
            base: '-20px',
            lg: '-50px',
            xl: '-100px',
            '2xl': '15%',
            '3xl': '20%',
          }}
        />
        <Image
          src={Cloud5Img}
          position="absolute"
          zIndex="1"
          h={{
            base: '80px',
            sm: '100px',
            md: '130px',
            lg: '200px',
            xl: '260px',
          }}
          top={{
            base: '-40px',
            sm: '-40px',
            md: '-60px',
            lg: '-120px',
            xl: '-150px',
          }}
          right={{
            base: '0',
            xl: '0px',
            '2xl': '15%',
            '3xl': '25%',
          }}
        />
      </Box>
      {/* Create To Earn */}
      <Box
        py={{ base: 32 }}
        px={{ base: 8 }}
        bg="blue.100"
        bgImg={CreateToEarnBgImg}
        height="100%"
        bgSize={{
          base: 'cover',
          xl: '80%',
        }}
        backgroundPosition="-200px 0"
        backgroundRepeat="no-repeat"
        overflow="hidden"
      >
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
            gap={{ base: 2, md: 6 }}
          >
            <Box w="100%" textAlign="left">
              <Text textStyle="h1">Create to Earn</Text>
              <Text textStyle="paragraph" mt="10">
                In the future phases of development, the community will have the
                means to be true builders behind the world of MetroGalaxy.
              </Text>
              <Text textStyle="paragraph" mt="10">
                MetroGalaxy will have tools that support creators in a variety
                of ways:
              </Text>
              <UnorderedList textStyle="paragraph">
                <ListItem>Create Metronion accessories (NFT) </ListItem>
                <ListItem>Create decorations (NFT) for land NFTs </ListItem>
                <ListItem>Build your own maps and map assets</ListItem>
                <ListItem>Design NPC questlines</ListItem>
                <ListItem>Etc.</ListItem>
              </UnorderedList>
              <Text textStyle="paragraph" mt="10">
                All contributors will be rewarded, and the more users use your
                assets, the more you get rewarded. The possibilities are
                endless.
              </Text>
            </Box>
            <Box>
              <Image
                src={CreateToEarnImg}
                width="full"
                height="auto"
                mt={{ base: 10, md: 0 }}
              />
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
