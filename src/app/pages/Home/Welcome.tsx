import * as React from 'react';
import { Container, Center, Image, Box, Text } from '@chakra-ui/react';
import Cloud2Img from './assets/cloud_2.webp';
import Cloud4Img from './assets/cloud_4.webp';
import ReactPlayer from 'react-player/lazy';
import { TRAILER_VIDEO_URL } from 'src/app/config/constants';
import WelcomeBgImg from './assets/welcome-bg-img.webp';
import LineBreakImg from './assets/line_break_2.webp';

export function Welcome() {
  return (
    <Box
      bg="blue.800"
      bgImage={WelcomeBgImg}
      w="full"
      // height={{ base: '640px', md: '640px', lg: '100vh' }}
      backgroundPosition="center bottom"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
    >
      <Container maxW="container.lg" px={{ base: 8 }} position="relative">
        <Box
          border="6px solid rgba(15, 82, 123, 0.8)"
          borderRadius="20px"
          height={{ base: '320px', lg: '640px' }}
        >
          <ReactPlayer
            url={TRAILER_VIDEO_URL}
            width="100%"
            height="100%"
            className="react-player-wrapper"
          />
        </Box>
      </Container>

      <Container
        maxW="container.md"
        mt={16}
        pb={{ base: 16 }}
        px={{ base: 8 }}
        position="relative"
      >
        <Center mb={4}>
          <Image
            src={LineBreakImg}
            my={8}
            data-aos="flip-up"
            data-aos-delay="100"
            data-aos-duration="900"
          />
        </Center>
        <Center flexDirection="column">
          {/* <Text
            textStyle="h1"
            textAlign="center"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            Welcome to MetroGalaxy
          </Text> */}
          <Text
            textStyle="h2"
            data-aos="fade-left"
            data-aos-duration="700"
            textAlign="center"
          >
            Introducing the Metrionion PFP
          </Text>
          <Box position="relative" zIndex="2">
            <Text
              textStyle="paragraph"
              mt="10"
              textAlign="center"
              data-aos="fade-left"
              data-aos-duration="900"
              as="div"
            >
              <Text mb={4}>
                Welcome to the world of MetroGalaxy, a futuristic, colorful and
                diverse world filled with fun and fashionable people known as
                Metronions. Each Metronion PFP NFT represents a unique and
                lovable Metronion, filled with personality, style, and
                creativity.
              </Text>
              <Text mb={4}>
                All of Metrogalaxy’s NFTs are hand-drawn by our talented artist,
                and among the curated generative Metronion PFP NFTs, you will
                also find 20 1/1 NFTs that are specially made with exclusive
                elements. Currently, we're residing on the Avalanche ecosystem.
              </Text>
              <Text mb={4}>Note: The NFT will not have animation.</Text>
            </Text>
          </Box>
        </Center>
        {/* <Image
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
        /> */}
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

        {/* <Image
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
        /> */}
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
