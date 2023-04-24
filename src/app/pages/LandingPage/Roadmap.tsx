import * as React from 'react';
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  Grid,
  useMediaQuery,
} from '@chakra-ui/react';
import RoadmapSvg from './assets/roadmap.svg';
import RoadmapMobileSvg from './assets/roadmap_mobile.svg';
import RoadmapBgImg from './assets/roadmap_bg.webp';
import LineBreakImg from './assets/line_break.webp';
import MoonKnightImg from './assets/backers/moonknight.webp';
import FaralandImg from './assets/backers/faraland.webp';
import V2BLabImg from './assets/backers/v2b.webp';
import PeckshieldImg from './assets/secured/peckshield.webp';
import MoonpoolImg from './assets/secured/moonpool.webp';

export function Roadmap() {
  const [isMobile] = useMediaQuery('(max-width: 576px)');

  return (
    <Box
      py={{ base: 16 }}
      px={{ base: 8 }}
      bgColor="blue.100"
      bgImg={RoadmapBgImg}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Container maxW="container.lg">
        {/* <Flex direction="column" w="100%" margin="0 auto" textAlign="center">
          <Text textStyle="h1" data-aos="fade-down" data-aos-duration="500">
            Roadmap
          </Text>
          {isMobile && (
            <Image
              src={RoadmapMobileSvg}
              mt="10"
              data-aos="fade-down"
              data-aos-duration="700"
            />
          )}
          {!isMobile && (
            <Image
              src={RoadmapSvg}
              mt="10"
              data-aos="fade-down"
              data-aos-duration="700"
            />
          )}
        </Flex> */}
        {/* <Image
          src={LineBreakImg}
          my={8}
          data-aos="flip-up"
          data-aos-delay="100"
          data-aos-duration="900"
        /> */}
        <Box
          bgColor="blue.200"
          py={{ base: 6 }}
          px={{ base: 12 }}
          borderRadius="20px"
          data-aos="fade-down"
          data-aos-duration="1100"
        >
          <Grid
            templateColumns={{
              base: '1fr',
              md: '150px 1fr',
            }}
            gap={{
              base: 6,
              lg: 8,
            }}
            justifyItems={{
              base: 'center',
              md: 'start',
            }}
          >
            <Flex alignItems="center">
              <Text textStyle="h2">Backed By</Text>
            </Flex>

            <Grid
              w="full"
              templateColumns={{
                base: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              }}
              gap={6}
              position="relative"
              justifyItems={{
                base: 'center',
              }}
              alignItems="center"
            >
              <Image
                src={MoonKnightImg}
                w="100%"
                maxW={{ base: '120px' }}
                ratio={16 / 9}
              />
              <Image src={FaralandImg} w="100%" maxW={{ base: '120px' }} />
              <Image src={V2BLabImg} w="100%" maxW={{ base: '120px' }} />
            </Grid>
          </Grid>
        </Box>
        <Box
          bgColor="blue.200"
          py={{ base: 6 }}
          px={{ base: 12 }}
          borderRadius="20px"
          mt={8}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <Grid
            templateColumns={{
              base: '1fr',
              md: '150px 1fr',
            }}
            templateRows={{
              base: '50px 1fr',
              md: '1fr',
            }}
            gap={{
              base: 6,
              lg: 8,
            }}
            justifyItems={{
              base: 'center',
              md: 'start',
            }}
          >
            <Flex alignItems="center">
              <Text textStyle="h2">Secured By</Text>
            </Flex>
            <Grid
              w="full"
              templateColumns={{
                md: 'repeat(2, 1fr)',
              }}
              gap={6}
              position="relative"
              justifyItems={{
                base: 'center',
              }}
              alignItems="center"
            >
              <Image src={PeckshieldImg} w="100%" maxW={{ base: '200px' }} />
              <Image src={MoonpoolImg} w="100%" maxW={{ base: '200px' }} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
