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
// import TeamImage1 from './assets/team/1.webp';
import TeamImage2 from './assets/team/2.webp';
import TeamImage3 from './assets/team/3.webp';
// import TeamImage4 from './assets/team/4.webp';
import TeamImage5 from './assets/team/5.webp';
// import TeamImage6 from './assets/team/6.webp';
// import TeamImage7 from './assets/team/7.webp';
import TeamImage8 from './assets/team/8.webp';
import TeamImage9 from './assets/team/9.webp';
import TeamImage10 from './assets/team/10.webp';
import TeamImage11 from './assets/team/11.webp';
import LinkedinImage from './assets/team/linkedin.svg';

const team = [
  // {
  //   avatar: TeamImage1,
  //   position: 'CEO, Co-founder',
  //   name: 'Tuyen Dinh',
  //   description: `Full-stack engineer with 3 years experience in blockchain field.
  //   Dapp builder, Kyber Network Alumni.`,
  // },
  {
    avatar: TeamImage2,
    position: 'Founder',
    name: 'Quang Nguyen',
    linkedIn: 'https://www.linkedin.com/in/le-quang-nguyen-a42120135/',
    description: `Full-stack engineer with 3 years experience in blockchain field. 
    Dapp builder, Kyber Network Alumni.`,
  },
  {
    avatar: TeamImage3,
    position: 'Head of Product',
    name: 'Hoang Le Minh',
    linkedIn: 'https://www.linkedin.com/in/ho%C3%A0ng-tikchu-4275b4120/',
    description:
      '10 years experience in game design and project management. Strong skills in product management and game publishing.',
  },
  // {
  //   avatar: TeamImage4,
  //   position: 'CMO',
  //   name: 'Trang Nguyen',
  // },
  {
    avatar: TeamImage5,
    position: 'Game Developer Lead',
    name: 'Giang Nguyen',
    description:
      'Senior game developer with 6 years experience working with Unity. Have built projects which achieve 10+ millions downloads on AppStore and Google Play Store.',
  },
  // {
  //   avatar: TeamImage6,
  //   position: 'Fullstack Developer',
  //   name: 'Duc Nguyen',
  // },
  // {
  //   avatar: TeamImage7,
  //   position: 'Game Server Developer',
  //   name: 'Thien Dao Thanh',
  // },
  {
    avatar: TeamImage8,
    position: 'Art Director',
    name: 'Vu Nguyen Duy',
    linkedIn: 'https://www.linkedin.com/in/nguyen-duy-vu-28b81b149/',
    description:
      'An experienced leader in game development with excellent management skills and a strong artistic eye. He has hands-on experience of game projects on e-wallet in Malaysia, in which he has the leading role in managing marketing design, concept art game, and visual design. ',
  },
  {
    avatar: TeamImage9,
    position: 'Game Artist',
    name: 'Linh Nguyen Thu',
    description:
      'She is a passionate artist with her love of game, anime and manga. She started drawing because she likes to see the world in a different angle. She hopes her works encourage people freely explore themselves.',
  },
  {
    avatar: TeamImage10,
    position: 'Game Artist',
    name: 'Anh Mac Van',
    description:
      'She started drawing when she was 2 years old. At that time, she drawn on everything, even the furniture in her parents house. Until now, being a mom of 3 kids she still continues to draw. She never ran out of love for drawing.',
  },
  {
    avatar: TeamImage11,
    position: 'Game Artist',
    name: 'Ngan Pham',
    description:
      '8 years experience in Artwork digital and game artist. She has a keen interest in video games and cares about their artistry that ensures the release of beautiful, innovative games.',
  },
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
