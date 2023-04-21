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
import { TELEGRAM_URL, TWITTER_URL } from 'src/app/config/constants';
import { useButtonSize } from 'src/app/hooks';
import ExcitedYetNftImg from './assets/excited-yet-nft-img.webp';
import { DiscordIcon, TwitterIcon } from 'src/app/components/Icon';

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
            onClick={() => {
              window.open(TWITTER_URL, '_blank');
            }}
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
