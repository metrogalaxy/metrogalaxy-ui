import * as React from 'react';
import { Box, Container, Flex, Link, Text, Grid } from '@chakra-ui/react';
import { Logo } from 'src/app/components/Logo';
import {
  TELEGRAM_URL,
  TWITTER_URL,
  ADMIN_EMAIL,
  MEDIUM_URL,
  DISCORD_URL,
} from 'src/app/config/constants';

export function Footer() {
  return (
    <Box py={{ base: 16 }} px={{ base: 6 }} bg="gray.300">
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          w="100%"
          margin="0 auto"
          justify="space-between"
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <Box mb={8}>
            <Logo />
            <Text color="white.100" textAlign="start" mt={1} pl="54px">
              @MetroGalaxy
            </Text>
          </Box>
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={{ base: 1, md: 6 }}
            textAlign="center"
          >
            <Flex
              direction="column"
              alignItems="flex-start"
              margin={{ base: 6, md: '0 24px' }}
            >
              <Text color="white.200" fontWeight="bold" mb="6">
                About
              </Text>
              {/* <CustomLink href="/about">About Us</CustomLink> */}
              <CustomLink href="/tokenomic" target="_self">
                Token Metrics
              </CustomLink>
            </Flex>
            <Flex
              direction="column"
              alignItems="flex-start"
              margin={{ base: 6, md: '0 24px' }}
            >
              <Text color="white.200" fontWeight="bold" mb="6">
                Social
              </Text>
              <CustomLink href={TELEGRAM_URL}>Telegram</CustomLink>
              <CustomLink href={TWITTER_URL}>Twitter</CustomLink>
              <CustomLink href={DISCORD_URL}>Discord</CustomLink>
              <CustomLink href={MEDIUM_URL}>Medium</CustomLink>
            </Flex>
            <Flex
              direction="column"
              alignItems="flex-start"
              margin={{ base: 6, md: '0 24px' }}
            >
              <Text color="white.200" fontWeight="bold" mb="6">
                Resources
              </Text>
              <CustomLink href={`mailto:${ADMIN_EMAIL}`}>Contact Us</CustomLink>
              <CustomLink>Disclaimer</CustomLink>
              <CustomLink>Term of Service</CustomLink>
              <CustomLink>Offical Token</CustomLink>
            </Flex>
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
}

const CustomLink = props => {
  return (
    <Link
      _hover={{
        color: 'white',
      }}
      mb="2"
      textAlign="start"
      href={props.href}
      target={props.target ? props.target : '_blank'}
      color="white.100"
    >
      {props.children}
    </Link>
  );
};
