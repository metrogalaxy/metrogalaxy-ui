import { Box, Container, Flex, Link, Text, IconButton } from '@chakra-ui/react';
import TermsPdf from 'src/app/assets/terms_and_conditions.pdf';
import { Logo } from 'src/app/components/Logo';
import {
  ADMIN_EMAIL,
  DISCORD_URL,
  MEDIUM_URL,
  TELEGRAM_URL,
  TWITTER_URL,
} from 'src/app/config/constants';
import { DiscordIcon, MediumIcon, TelegramIcon, TwitterIcon } from '../Icon';

export function Footer() {
  return (
    <Box py={{ base: 6 }} px={{ base: 6 }} bg="gray.200">
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          w="100%"
          margin="0 auto"
          justify="space-between"
          alignItems={{ base: 'center', md: 'center' }}
        >
          <Box>
            <Logo />
            <Text color="white.100" textAlign="start" mt={-3} pl="54px">
              @MetroGalaxy
            </Text>
          </Box>
          <Flex borderLeft="1px solid #A1A7AD">
            <CustomLink href={`mailto:${ADMIN_EMAIL}`}>Contact Us</CustomLink>
            <CustomLink>Disclaimer</CustomLink>
            <CustomLink href={TermsPdf}>Term of Services</CustomLink>
          </Flex>
          <Flex gap={4}>
            <IconButton
              aria-label="medium"
              width={42}
              height={42}
              bgColor="#ffffff"
              border="none"
              _hover={{
                bgColor: '#a59f9f',
              }}
              onClick={() => {
                window.open(MEDIUM_URL, '_blank');
              }}
            >
              <MediumIcon color="#000000" fontSize={30} />
            </IconButton>
            <IconButton
              aria-label="discord"
              width={42}
              height={42}
              bgColor="#5566E3"
              border="none"
              _hover={{
                bgColor: '#3a4dd8',
              }}
              onClick={() => {
                window.open(DISCORD_URL, '_blank');
              }}
            >
              <DiscordIcon color="#ffffff" fontSize={30} />
            </IconButton>
            <IconButton
              aria-label="telegram"
              width={42}
              height={42}
              bg={'linear-gradient(0deg, #1D93D2 0%, #38B0E3 100%)'}
              border="none"
              _hover={{
                bgColor: '#288ab4',
              }}
              onClick={() => {
                window.open(TELEGRAM_URL, '_blank');
              }}
            >
              <TelegramIcon color="#ffffff" fontSize={42} />
            </IconButton>
            <IconButton
              aria-label="twitter"
              width={42}
              height={42}
              bgColor="#5A99EC"
              border="none"
              _hover={{
                bgColor: '#4587dd',
              }}
              onClick={() => {
                window.open(TWITTER_URL, '_blank');
              }}
            >
              <TwitterIcon color="#ffffff" fontSize={24} />
            </IconButton>
          </Flex>

          {/* <Grid
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
              <CustomLink href="/about">About Us</CustomLink>
              <CustomLink href={Pitchdeck}>Pitchdeck</CustomLink>
              <CustomLink href="/tokenomic" target="_self">
                Token Metrics
              </CustomLink>
              <CustomLink href={CAREER_URL}>Careers</CustomLink>
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
              <CustomLink href={TermsPdf}>Terms & Conditions</CustomLink>
              <CustomLink>Offical Token</CustomLink>
            </Flex>
          </Grid> */}
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
      mt={1}
      pl="54px"
    >
      {props.children}
    </Link>
  );
};
