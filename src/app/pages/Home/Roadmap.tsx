import {
  Box,
  Container,
  Text,
  useMediaQuery,
  Button,
  Center,
  createIcon,
} from '@chakra-ui/react';
import RoadmapBgImg from './assets/roadmap_bg.webp';
import { TELEGRAM_URL } from 'src/app/config/constants';
import { useButtonSize } from 'src/app/hooks';
import ExcitedYetNftImg from './assets/excited-yet-nft-img.webp';

export const TwitterIcon = createIcon({
  displayName: 'TwitterIcon',
  viewBox: '0 0 50 50',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
  ),
});

export const DiscordIcon = createIcon({
  displayName: 'DiscordIcon',
  viewBox: '0 0 30 30',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z" />
  ),
});

export function Roadmap() {
  const joinUs = () => {
    window.open(TELEGRAM_URL, '_blank');
  };
  const [isMobile] = useMediaQuery('(max-width: 576px)');

  return (
    <Box
      py={{ base: 16 }}
      px={{ base: 8 }}
      bgColor="#084F7A"
      bgImg={ExcitedYetNftImg}
      bgPosition="center left"
      height={430}
      display="flex"
      alignItems="center"
      bgRepeat="no-repeat"
    >
      <Container maxW="container.lg">
        {/* <Image
          src={LineBreakImg}
          my={8}
          data-aos="flip-up"
          data-aos-delay="100"
          data-aos-duration="900"
        /> */}
        <Text
          textStyle="h2"
          data-aos="fade-left"
          data-aos-duration="700"
          textAlign="center"
        >
          Excited Yet? Join Our Channels Now!
        </Text>
        <Center
          // position="absolute"
          right="50%"
          mt={10}
          // transform="translateX(50%)"
          w="full"
          zIndex={2}
          gap={8}
        >
          <Button
            onClick={joinUs}
            leftIcon={<DiscordIcon />}
            bgColor="#5460CD"
            color="#ffffff"
            variant="solid"
            size={useButtonSize()}
            borderColor="gray.200"
            boxShadow="0px 12px 28px rgba(0, 0, 0, 0.25)"
            _hover={{
              bgColor: '#3b48c4',
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Discord
          </Button>
          <Button
            onClick={joinUs}
            leftIcon={<TwitterIcon />}
            bgColor="#3085D3"
            color="#ffffff"
            variant="solid"
            size={useButtonSize()}
            borderColor="gray.200"
            boxShadow="0px 12px 28px rgba(0, 0, 0, 0.25)"
            _hover={{
              bgColor: '#1d6eb9',
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Twitter
          </Button>
        </Center>
        {/* <Box
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
        </Box> */}
      </Container>
    </Box>
  );
}
