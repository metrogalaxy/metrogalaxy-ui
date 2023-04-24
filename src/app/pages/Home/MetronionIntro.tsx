import * as React from 'react';
import LineBreakImg from './assets/line_break_2.webp';
import {
  Box,
  Container,
  Text,
  Flex,
  Image,
  Center,
  useMediaQuery,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import B1Image from './assets/metronion/B1.webp';
import B2Image from './assets/metronion/B2.webp';
import B3Image from './assets/metronion/B3.webp';
import B4Image from './assets/metronion/B4.webp';
import B5Image from './assets/metronion/B5.webp';
import G1Image from './assets/metronion/G1.webp';
import G2Image from './assets/metronion/G2.webp';
import G3Image from './assets/metronion/G3.webp';
import G4Image from './assets/metronion/G4.webp';
import G5Image from './assets/metronion/G5.webp';
import DotImg from './assets/dot-bg.webp';
import DynamicNFT from './assets/dynamic-nft.webp';

const MetronionImages = [
  B1Image,
  B2Image,
  B3Image,
  B4Image,
  B5Image,
  G1Image,
  G2Image,
  G3Image,
  G4Image,
  G5Image,
];

export function MetronionIntro() {
  const [isMobile] = useMediaQuery('(max-width: 576px)');
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: !isDesktop ? 2 : 4,
    slidesToScroll: !isDesktop ? 2 : 4,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };

  const openPageMetronion = () => {
    navigate('/metronion');
  };

  return (
    <Box
      bg="blue.800"
      // bgImg={BgImg}
      bgSize={{
        base: 'cover',
        lg: 'auto 1000px',
        xl: 'auto 1200px',
      }}
      backgroundPosition="top left"
      backgroundRepeat="no-repeat"
      position="relative"
      pt={{ md: 16 }}
      height={{
        lg: '980px',
      }}
    >
      {/* <Container
        bgImg={BgImg}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
      ></Container> */}
      <Image
        position="absolute"
        src={DotImg}
        height={240}
        display={{ base: 'none', xl: 'initial' }}
        width={{ xl: 1150 }}
        left={{
          base: '50px',
          lg: '100px',
          xl: '170px',
        }}
        top={{
          base: '50px',
          lg: '100px',
          xl: '420px',
        }}
      />
      <Container maxW="container.md" py={{ base: 16 }} px={{ base: 8 }}>
        <Center mb={4}>
          <Image
            src={LineBreakImg}
            my={8}
            data-aos="flip-up"
            data-aos-delay="100"
            data-aos-duration="900"
          />
        </Center>
        <Box textAlign="center">
          <Text textStyle="h1" data-aos="fade-right" data-aos-duration="500">
            Dynamic NFT
          </Text>
          <Text
            textStyle="paragraph"
            mt="10"
            textAlign="justify"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Metronions are very expressive in nature. Each Metronion NFT comes
            with various emotions that can be changed and selected as the “main”
            art. When you present your Metronion as a profile picture on social
            media, it can express your state and feelings right away! Feeling
            happy? Just update your Metronion NFT to a “happy” emotion with just
            one click. Our API with update your PFP art in no time to reflect
            what you feel.
          </Text>
        </Box>
      </Container>
      <Container maxW="container.xl" pb="16">
        <Box
          textAlign="center"
          px="4"
          bgImg={DynamicNFT}
          backgroundPosition="top center"
          backgroundRepeat="no-repeat"
          bgSize={{
            base: 'cover', // TODO:
            lg: 'contain',
            xl: 'contain',
          }}
          height={{ lg: 550 }}
          // data-aos="flip-down"
          // data-aos-duration="900"
        >
          {/* <Slider {...settings}>
            {MetronionImages.map((item, index) => (
              <MetronionItem key={index} src={item} />
            ))}
          </Slider> */}
        </Box>
        {/* <Flex justifyContent="center">
          <Button
            variant="solid"
            mt={10}
            size={isMobile ? 'sm' : 'md'}
            borderColor="gray.200"
            boxShadow="0px 12px 28px rgba(0, 0, 0, 0.25)"
            _hover={{
              color: 'green.200',
              bgColor: 'gray.500',
            }}
            onClick={openPageMetronion}
            data-aos="fade-up"
            data-aos-duration="900"
          >
            Get Your Own Metronion
          </Button>
        </Flex> */}
      </Container>
    </Box>
  );
}

interface MetronionItemProps {
  src: string | undefined;
}

function MetronionItem(props: MetronionItemProps) {
  return (
    <Flex justifyContent="center">
      <Image
        height="240px"
        margin="0 auto"
        src={props.src}
        alt="MetronionItem"
      />
    </Flex>
  );
}
