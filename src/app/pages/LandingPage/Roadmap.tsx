import * as React from 'react';
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import RoadmapSvg from './assets/roadmap.svg';
import RoadmapMobileSvg from './assets/roadmap_mobile.svg';

export function Roadmap() {
  const [isMobile] = useMediaQuery('(max-width: 576px)');

  return (
    <Box py={{ base: 8, lg: 32 }} px={{ base: 8 }} bg="gray.200">
      <Container maxW="container.lg">
        <Flex direction="column" w="100%" margin="0 auto" textAlign="center">
          <Text
            color="white.200"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            mt={{ base: 10, md: 0 }}
          >
            Roadmap
          </Text>
          {isMobile && <Image src={RoadmapMobileSvg} mt="10" />}
          {!isMobile && <Image src={RoadmapSvg} mt="10" />}
        </Flex>
      </Container>
    </Box>
  );
}
