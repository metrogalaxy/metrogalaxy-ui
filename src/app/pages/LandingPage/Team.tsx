import * as React from 'react';
import {
  Box,
  Avatar,
  Grid,
  Container,
  Flex,
  Text,
  Link,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import CeoImage from './assets/team/dinh_anh_tuyen.webp';
import CtoImage from './assets/team/nguyen_le_quang.webp';
import HeadProductImage from './assets/team/le_minh_hoang.webp';
import CmoImage from './assets/team/trinh_cong_sang.webp';
import BusinessDevelopmentImage from './assets/team/pham_hoang_minh.webp';
import GameDevLeadImage from './assets/team/nguyen_hoang_giang.webp';
import GameServerLeadImage from './assets/team/dang_hoang_long.webp';
// import ArtDirectorImage from './assets/team/nguyen_duy_vu.webp';
import Artist01Image from './assets/team/nguyen_thu_linh.webp';
import Artist02Image from './assets/team/mac_van_anh.webp';
import LinkedinImage from './assets/team/linkedin.svg';

const team = [
  {
    avatar: CeoImage,
    position: 'CEO, Co-Founder',
    name: 'Tuyen Dinh Anh',
    linkedIn: 'https://www.linkedin.com/in/tuyen-dinh-anh-3a033611b/',
    description: `Marketing and Business Development specialist with 5 years of experience in growth hacking and product management. 2 years of experience in growing blockchain products. Kyber Network & Krystal DeFi Alumni.`,
  },
  {
    avatar: CtoImage,
    position: 'CTO, Co-Founder',
    name: 'Quang Nguyen',
    linkedIn: 'https://www.linkedin.com/in/le-quang-nguyen-a42120135/',
    description: `Full-stack engineer with 5 years experience in software development and blockchain. 
    Dapp builder, Kyber Network Alumni.`,
  },
  {
    avatar: HeadProductImage,
    position: 'Head of Product',
    name: 'Hoang Le Minh',
    linkedIn: 'https://www.linkedin.com/in/ho%C3%A0ng-l%C3%AA-minh-4275b4120/',
    description:
      '10 years experience in game design and project management. Strong skills in product management and game publishing.',
  },
  {
    avatar: CmoImage,
    position: 'CMO',
    name: 'Sang Trinh Cong',
    description:
      '5 years of experience working in the Crypto market, In addition, I used to do marketing for projects such as Contentos, Huobi VietNam and UTU.',
  },
  {
    avatar: BusinessDevelopmentImage,
    position: 'Business Development',
    name: 'Minh Pham Hoang',
    description:
      'Enthusiastic young marketer with great passion for gamefi, is now working as a full-time business development.',
  },
  {
    avatar: GameDevLeadImage,
    position: 'Game Developer Lead',
    name: 'Giang Nguyen',
    description:
      'Senior game developer with 6 years experience working with Unity. Have built projects which achieve 10+ millions downloads on AppStore and Google Play Store.',
  },
  {
    avatar: GameServerLeadImage,
    position: 'Game Server Developer',
    name: 'Long Dang Hoang',
    description:
      'Senior game server developer with 7 years experience. Strong skills in backend development and database management.',
  },
  // {
  //   avatar: ArtDirectorImage,
  //   position: 'Art Director',
  //   name: 'Vu Nguyen Duy',
  //   linkedIn: 'https://www.linkedin.com/in/nguyen-duy-vu-28b81b149/',
  //   description:
  //     'An experienced leader in game development with excellent management skills and a strong artistic eye. He has hands-on experience of game projects on e-wallet in Malaysia, in which he has the leading role in managing marketing design, concept art game, and visual design. ',
  // },
  {
    avatar: Artist01Image,
    position: 'Art Director',
    name: 'Linh Nguyen Thu',
    description:
      'She is a passionate artist with her love of game, anime and manga. She started drawing because she likes to see the world in a different angle. She hopes her works encourage people freely explore themselves.',
  },
  {
    avatar: Artist02Image,
    position: 'Game Artist',
    name: 'Anh Mac Van',
    description:
      'She started drawing when she was 2 years old. At that time, she drawn on everything, even the furniture in her parents house. Until now, being a mom of 3 kids she still continues to draw. She never ran out of love for drawing.',
  },
  // {
  //   avatar: TeamImage11,
  //   position: 'Game Artist',
  //   name: 'Ngan Pham',
  //   description:
  //     '8 years experience in Artwork digital and game artist. She has a keen interest in video games and cares about their artistry that ensures the release of beautiful, innovative games.',
  // },
];

export function Team() {
  const [isMobile] = useMediaQuery('(max-width: 576px)');

  return (
    <Box py={{ base: 16 }} px={{ base: 0, md: 8 }} bg="gray.400">
      <Container maxW={{ base: 'container.xl', md: 'container.lg' }}>
        <Box w="100%" textAlign="center">
          <Text
            color="white.200"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
          >
            Our Team
          </Text>
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={{ base: 1, md: 6 }}
            mt={12}
          >
            {team.map(({ name, position, avatar, linkedIn, description }) => (
              <Box
                margin={{ base: 3, md: 4 }}
                flex="1 0 21%"
                fontSize={{ base: 'sm', md: 'lg' }}
                textAlign="center"
                key={name}
              >
                <Avatar
                  src={avatar}
                  bg="#D8D8D8"
                  size={isMobile ? 'xl' : '2xl'}
                />
                <Flex justifyContent="center">
                  <Text color="white.200" mt="4" fontFamily="Acrom-Bold">
                    {name}
                  </Text>
                  {linkedIn && linkedIn !== '' && (
                    <Link href={linkedIn} target="_blank">
                      <Image
                        src={LinkedinImage}
                        w="100%"
                        h="22px"
                        mt="4"
                        pl="2"
                      />
                    </Link>
                  )}
                </Flex>

                <Text color="green.200" height={10}>
                  {position}
                </Text>
                <Text
                  color="white.200"
                  mt={2}
                  pl={{ base: 1, md: 4 }}
                  fontSize={{ base: 'sm', md: 'md' }}
                  textAlign="left"
                >
                  {description}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
