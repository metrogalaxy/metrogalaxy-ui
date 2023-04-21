import * as React from 'react';
import {
  Box,
  Text,
  Container,
  Grid,
  ListItem,
  UnorderedList,
  GridItem,
  Image,
} from '@chakra-ui/react';
import IslandImg from './assets/island.webp';
import CreateToEarnImg from './assets/create_to_earn.webp';
import IdentityImg from './assets/identity-img.webp';
import CommunityImg from './assets/community-img.webp';
import InnovationImg from './assets/innovation-img.webp';
import TransformationImg from './assets/transformation-img.webp';
import CreateToEarnBgImg from './assets/create_to_earn_bg.webp';
import Cloud5Img from './assets/cloud_5.webp';
import Cloud6Img from './assets/cloud_6.webp';
import WhyYouShouldBe from './assets/why-you-should-be-bg.webp';

function createData(
  tittle: string,
  description: string | object,
  img: string,
  isReverse: boolean,
) {
  return { tittle, img, description, isReverse };
}

const featuresData: ReturnType<typeof createData>[] = [
  createData(
    'COMMUNITY',
    'At the heart of MetroGalaxy is the belief that community is the key to success. MetroGalaxy is committed to fostering an inclusive and welcoming space for everyone. That’s one of the main reasons that we chose the Avalanche blockchain as our starting point, as over the year of building our product, we’ve received the most support from our Avalanche ecosystem friends. We go as one.',
    CommunityImg,
    false,
  ),
  createData(
    'IDENTITY',
    'Through our diverse and creative collection of PFP NFTs, we aim to empower individuals to showcase their personalities and tell their own stories. Everything we do will be carefully engineered to drive engagement and create opportunities for our community to connect deeply.',
    IdentityImg,
    true,
  ),
  createData(
    'INNOVATION',
    'The team is committed to pushing the boundaries and exploring new possibilities, focusing on creating values for NFT users and enhancing the connection between them. We aim to create a unique and immersive experience for our community, using technology and creative design to bring the MetroGalaxy world to life. Check out the product we’ve been doing over the last 8 months.',
    InnovationImg,
    false,
  ),
  createData(
    'TRANSFORMATION',
    <Text
      as="div"
      textStyle="paragraph"
      mt="10"
      data-aos="fade-right"
      data-aos-duration="700"
    >
      <Text>
        We started off the project as a social and gaming platform on Avalanche
        a year ago. The MetroGalaxy platform uniquely blends a social platform
        together with an online virtual game that lets its players role-play,
        form meaningful connections, create NFTs and use popular blockchain
        services in an ever-expanding decentralized world.
      </Text>
      <Text>
        Currently we are still developing the MetroGalaxy platform step by step,
        albeit at a slow rate due to the small team size. We sincerely hope that
        with the support from the Metro community, we’ll be able to scale up and
        realize the potential of this platform.
      </Text>
    </Text>,
    TransformationImg,
    true,
  ),
];

export function Features() {
  return (
    <Box
      // px="4"
      pt={40}
      pb={40}
      bgImg={WhyYouShouldBe}
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      w="full"
      bgSize={{
        base: 'contain', // TODO:
        lg: 'cover',
        xl: 'cover',
      }}
      className="WhyYouShouldBe"
      bgColor="blue.800"
    >
      <Box w="full" position="relative">
        {/* <Box
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
        /> */}
        <Container
          maxW="container.lg"
          display="flex"
          flexDirection="column"
          gap={36}
        >
          <Box textAlign="center">
            <Text textStyle="h1" data-aos="fade-right" data-aos-duration="500">
              Why You Should Be A Part Of MetroGalaxy
            </Text>
          </Box>
          {featuresData.map(el => (
            <Grid
              key={el.tittle}
              templateColumns={{
                base: 'repeat(1, 1fr)',
                lg: 'repeat(12, 1fr)',
              }}
              gap={{ base: 2, md: 14 }}
            >
              <GridItem
                colSpan={{ base: 1, md: 4 }}
                order={el.isReverse ? 1 : 0}
                display="flex"
                alignItems="center"
              >
                <Box>
                  <Image
                    src={el.img}
                    width="auto"
                    height="auto"
                    mt={{ base: 10, md: 0 }}
                    data-aos="fade-left"
                    data-aos-duration="500"
                  />
                </Box>
              </GridItem>
              <GridItem
                colSpan={{ base: 1, md: 8 }}
                order={el.isReverse ? 0 : 1}
                display="flex"
                alignItems="center"
              >
                <Box w="100%" textAlign="left">
                  <Text
                    textStyle="h2"
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    {el.tittle}
                  </Text>
                  {typeof el.description === 'string' && (
                    <Text
                      textStyle="paragraph"
                      mt="10"
                      data-aos="fade-right"
                      data-aos-duration="700"
                    >
                      {el.description}
                    </Text>
                  )}
                  {typeof el.description !== 'string' && el.description}
                </Box>
              </GridItem>
            </Grid>
          ))}
          <Box mt={250} textAlign="center">
            <Text textStyle="h1" data-aos="fade-right" data-aos-duration="500">
              Our humble origins
            </Text>
            <Text
              textStyle="paragraph"
              mt="10"
              textAlign="justify"
              data-aos="fade-right"
              data-aos-duration="700"
              as="div"
            >
              <Text>
                We started off the project as a social and gaming platform on
                Avalanche a year ago. The MetroGalaxy platform uniquely blends a
                social platform together with an online virtual game that lets
                its players role-play, form meaningful connections, create NFTs
                and use popular blockchain services in an ever-expanding
                decentralized world.
              </Text>
              <Text>
                Currently we are still developing the MetroGalaxy platform step
                by step, albeit at a slow rate due to the small team size. We
                sincerely hope that with the support from the Metro community,
                we’ll be able to scale up and realize the potential of this
                platform.
              </Text>
            </Text>
          </Box>
        </Container>
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
          bottom={{
            base: '40px',
            sm: '40px',
            md: '60px',
            lg: '120px',
            xl: '350px',
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
          bottom={{
            base: '40px',
            sm: '40px',
            md: '60px',
            lg: '120px',
            xl: '350px',
          }}
          right={{
            base: '0',
            xl: '0px',
            '2xl': '15%',
            '3xl': '25%',
          }}
        />
        {/* <Box
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
              <Text
                textStyle="h1"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                Live Your Virtual Life
              </Text>
              <Text
                textStyle="paragraph"
                mt="10"
                textAlign="justify"
                data-aos="fade-right"
                data-aos-duration="700"
              >
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
      </Box>
      {/* Create To Earn */}
        {/* <Box
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
              <Text
                textStyle="h1"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                Create to Earn
              </Text>
              <Text
                textStyle="paragraph"
                mt="10"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                In the future phases of development, the community will have the
                means to be true builders behind the world of MetroGalaxy.
              </Text>
              <Text
                textStyle="paragraph"
                mt="10"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                MetroGalaxy will have tools that support creators in a variety
                of ways:
              </Text>
              <UnorderedList
                textStyle="paragraph"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <ListItem>Create Metronion accessories (NFT) </ListItem>
                <ListItem>Create decorations (NFT) for land NFTs </ListItem>
                <ListItem>Build your own maps and map assets</ListItem>
                <ListItem>Design NPC questlines</ListItem>
                <ListItem>Etc.</ListItem>
              </UnorderedList>
              <Text
                textStyle="paragraph"
                mt="10"
                data-aos="fade-right"
                data-aos-duration="1200"
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
                data-aos="fade-left"
                data-aos-duration="500"
              />
            </Box>
          </Grid>
        </Container>
      </Box> */}
      </Box>
    </Box>
  );
}
