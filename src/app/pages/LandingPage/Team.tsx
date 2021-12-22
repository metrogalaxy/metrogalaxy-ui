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
import TeamImage1 from './assets/team/1.webp';
import TeamImage2 from './assets/team/2.webp';
import TeamImage3 from './assets/team/3.webp';
import TeamImage4 from './assets/team/4.webp';
import TeamImage5 from './assets/team/5.webp';
import TeamImage6 from './assets/team/6.webp';
import TeamImage7 from './assets/team/7.webp';
import TeamImage8 from './assets/team/8.webp';
import TeamImage9 from './assets/team/9.webp';
import TeamImage10 from './assets/team/10.webp';
import TeamImage11 from './assets/team/11.webp';
import LinkedinImage from './assets/team/linkedin.svg';

const team = [
  {
    avatar: TeamImage1,
    position: 'CEO, Co-founder',
    name: 'Anh Dinh',
  },
  {
    avatar: TeamImage2,
    position: 'CTO, Co-founder',
    name: 'Quang Nguyen',
    linkedIn: 'https://www.linkedin.com/in/le-quang-nguyen-a42120135/',
  },
  {
    avatar: TeamImage3,
    position: 'Head of Product',
    name: 'Hoang Le Minh',
    linkedIn: 'https://www.linkedin.com/in/ho%C3%A0ng-tikchu-4275b4120/',
  },
  {
    avatar: TeamImage4,
    position: 'CMO',
    name: 'Trang Nguyen',
  },
  {
    avatar: TeamImage5,
    position: 'Game Developer Lead',
    name: 'Giang Nguyen',
  },
  {
    avatar: TeamImage6,
    position: 'Fullstack Developer',
    name: 'Duc Nguyen',
  },
  {
    avatar: TeamImage7,
    position: 'Game Server Developer',
    name: 'Thien Dao Thanh',
  },
  {
    avatar: TeamImage8,
    position: 'Art Director',
    name: 'Vu Nguyen Duy',
  },
  {
    avatar: TeamImage9,
    position: 'Game Artist',
    name: 'Linh Nguyen Thu',
  },
  {
    avatar: TeamImage10,
    position: 'Game Artist',
    name: 'Ngan Pham',
  },
  {
    avatar: TeamImage11,
    position: 'Game Artist',
    name: 'Anh Mac Van',
  },
];

export function Team() {
  const [isMobile] = useMediaQuery('(max-width: 576px)');

  return (
    <Box py={{ base: 8, lg: 32 }} px={{ base: 8 }} bg="gray.400">
      <Container maxW={{ base: 'container.xl', md: 'container.lg' }}>
        <Box w="100%" pt={{ base: 10, md: 0 }} textAlign="center">
          <Text
            color="white.200"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
          >
            Team
          </Text>
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
            gap={{ base: 1, md: 6 }}
            mt="20"
          >
            {team.map(({ name, position, avatar, linkedIn }) => (
              <Box
                margin={{ base: 3, md: 4 }}
                flex="1 0 21%"
                fontSize={{ base: 'sm', md: 'lg' }}
                textAlign="center"
              >
                <Avatar
                  src={avatar}
                  bg="#D8D8D8"
                  size={isMobile ? 'xl' : '2xl'}
                />
                <Flex justifyContent="center">
                  <Text color="white.200" mt="4">
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

                <Text color="green.200">{position}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
