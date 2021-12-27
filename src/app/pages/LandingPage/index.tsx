import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { LandingPageBanner } from './LandingPageBanner';
import { PageLayout } from 'src/app/components/Layout';
import { Welcome } from './Welcome';
import { MetronionIntro } from './MetronionIntro';
import { Features } from './Features';
import { Roadmap } from './Roadmap';
import { Team } from './Team';
import { Box, Container, Text, Grid, Image } from '@chakra-ui/react';
import MoonKnightImg from './assets/backers/moonknight.webp';
import FaralandImg from './assets/backers/faraland.webp';
import V2BLabImg from './assets/backers/v2b.webp';
import PeckshieldImg from './assets/secured/peckshield.webp';
import MoonpoolImg from './assets/secured/moonpool.webp';

export function LandingPage() {
  return (
    <PageLayout>
      <Helmet>
        <title>MetroGalaxy Homepage</title>
        <meta name="description" content="The MetroGalaxy Homepage" />
      </Helmet>
      <LandingPageBanner />
      <Welcome />
      <MetronionIntro />
      <Features />
      <Roadmap />
      <Team />
      {/* Backers */}
      <Box py={{ base: 16 }} px={{ base: 8 }} bg="gray.500" textAlign="center">
        <Container maxW="container.lg" pb="16">
          <Box w="100%" pt={{ base: 10, md: 0 }}>
            <Text
              color="white.200"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
            >
              Backers
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap={6}
              margin="0 auto"
              mt="20"
            >
              <Box>
                <Image src={MoonKnightImg} margin="0 auto" />
              </Box>
              <Box>
                <Image src={FaralandImg} margin="0 auto" />
              </Box>
              <Box>
                <Image src={V2BLabImg} margin="0 auto" />
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* Secured By */}
      <Box py={{ base: 16 }} px={{ base: 8 }} bg="gray.400" textAlign="center">
        <Container maxW="container.lg" pb="16">
          <Box w="100%" pt={{ base: 10, md: 0 }}>
            <Text
              color="white.200"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
            >
              Secured By
            </Text>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={6}
              margin="0 auto"
              mt="20"
            >
              <Box>
                <Image src={PeckshieldImg} margin="0 auto" />
              </Box>
              <Box>
                <Image src={MoonpoolImg} margin="0 auto" />
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
    </PageLayout>
  );
}
