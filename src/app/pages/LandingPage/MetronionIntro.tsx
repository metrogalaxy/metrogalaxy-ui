import * as React from 'react';
import {
  Box,
  Container,
  Text,
  Flex,
  Image,
  Button,
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
import BgImg from './assets/metronion_intro.webp';

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
    speed: 800,
    slidesToShow: !isDesktop ? 2 : 4,
    slidesToScroll: !isDesktop ? 2 : 4,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  const openPageMetronion = () => {
    navigate('/metronion');
  };

  return (
    <Box
      bg="blue.100"
      bgImg={BgImg}
      bgSize={{
        base: 'cover',
        lg: 'auto 1000px',
        xl: 'auto 1200px',
      }}
      backgroundPosition="top left"
      backgroundRepeat="no-repeat"
      position="relative"
      overflow="hidden"
      pt={{ md: 16 }}
      height={{
        lg: '980px',
      }}
    >
      <Container maxW="container.md" py={{ base: 16 }} px={{ base: 8 }}>
        <Box textAlign="center" pl={{ base: 0, lg: 16 }}>
          <Text textStyle="h1" data-aos="fade-right" data-aos-duration="500">
            Become our citizen, become a Metronion
          </Text>
          <Text
            textStyle="paragraph"
            mt="10"
            textAlign="justify"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Mint yourself into the world by acquiring a Metronion NFT. All
            Metronions come with basic accessories (like clothes) that can be
            changed and are reflected directly in the Metronion’s design in the
            NFT art and in-app. Accessories customization allows users to have a
            unique look that truly represents themselves and adds more value to
            their NFT.
          </Text>
        </Box>
      </Container>
      <Container maxW="container.xl" pb="16">
        <Box
          textAlign="center"
          px="4"
          data-aos="flip-down"
          data-aos-duration="900"
        >
          <Slider {...settings}>
            {MetronionImages.map((item, index) => (
              <MetronionItem key={index} src={item} />
            ))}
          </Slider>
        </Box>
        <Flex justifyContent="center">
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
        </Flex>
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
