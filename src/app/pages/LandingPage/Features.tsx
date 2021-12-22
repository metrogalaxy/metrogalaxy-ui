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

export function Features() {
  return (
    <Box>
      {/* Live Your Virtual Life */}
      <Box
        bgImage={IslandImg}
        w="full"
        height={{ base: '1200px' }}
        bgSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position="relative"
        overflow="hidden"
      >
        <Box
          w="full"
          position="absolute"
          bottom={0}
          py={{ base: 0 }}
          px={{ base: 8 }}
        >
          <Container maxW="container.xl" pb="16">
            <Text
              color="white.200"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
            >
              Live Your Virtual Life
            </Text>
            <Text
              color="white.100"
              mt="10"
              fontSize={{ base: 'md', md: 'lg' }}
              textAlign="justify"
            >
              The world of MetroGalaxy consists of various areas and maps, each
              with a unique and immersive design. You can interact with
              different elements in each area (e.g. entering a building,
              interacting with NPCs, play mini-games, etc.) as well as interact
              with other players (e.g. chat, play together, etc.) given the
              right conditions. Completing quests and mini-games will earn you
              various rewards in NFT!s
            </Text>
          </Container>
        </Box>
      </Box>
      {/* Create To Earn */}
      <Box py={{ base: 16, lg: 32 }} px={{ base: 8 }} bg="gray.400">
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
            gap={{ base: 2, md: 6 }}
          >
            <Box w="100%" textAlign="left">
              <Text
                color="white.200"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
              >
                Create to Earn
              </Text>
              <Text
                color="white.100"
                fontSize={{ base: 'md', md: 'lg' }}
                mt="10"
              >
                In the future phases of development, the community will have the
                means to be true builders behind the world of MetroGalaxy.
              </Text>
              <Text
                color="white.100"
                fontSize={{ base: 'md', md: 'lg' }}
                mt="10"
              >
                MetroGalaxy will have tools that support creators in a variety
                of ways:
              </Text>
              <UnorderedList
                color="white.100"
                fontSize={{ base: 'md', md: 'lg' }}
              >
                <ListItem>Create Metronion accessories (NFT) </ListItem>
                <ListItem>Create decorations (NFT) for land NFTs </ListItem>
                <ListItem>Build your own maps and map assets</ListItem>
                <ListItem>Design NPC questlines</ListItem>
                <ListItem>Etc.</ListItem>
              </UnorderedList>
              <Text
                color="white.100"
                fontSize={{ base: 'md', md: 'lg' }}
                mt="10"
              >
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
