import * as React from 'react';
import { Box, Spacer, Flex, Link, Stack, Text, Button } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { slide as Menu } from 'react-burger-menu';
import { Logo } from 'src/app/components/Logo';
import { Link as RouterLink } from 'react-router-dom';
import { Account } from 'src/app/components/Account';
import { useButtonSize } from 'src/app/hooks';
import { DISCORD_URL } from 'src/app/config/constants';

var styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
  },
  bmCrossButton: {
    height: '1rem',
    width: '1rem',
    right: '1.5rem',
    top: '1.5rem',
  },
  bmMenuWrap: {
    height: '100%',
    width: 'fit-content',
    top: '0',
  },
  bmMenu: {
    background: '#142433',
    padding: '2.5em 1.5em 0',
    fontSize: '1.25em',
    borderLeft: '1px solid #333',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'flex',
    justifyContent: 'center',
    height: 'fit-content',
    alignItems: 'center',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

interface INavBarProps {
  isShowConnectWallet?: boolean;
}

export function NavBar(props: INavBarProps) {
  const joinUs = () => {
    window.open(DISCORD_URL, '_blank');
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      width="full"
      bgColor="grayBlur.400"
      color="white"
      position="absolute"
      zIndex="100"
      borderBottom="2px solid"
      borderBottomColor="green.200"
      boxShadow="0px 12px 28px rgba(0, 0, 0, 0.25)"
      px={{ base: 4, xl: 8 }}
      py="5"
    >
      <Flex>
        <Link href="/" mr="10">
          <Logo />
        </Link>

        <Stack
          direction={{ base: 'column', xl: 'row' }}
          display={{ base: 'none', xl: 'flex' }}
          width={{ base: 'full', xl: 'auto' }}
          spacing={{ base: 5, xl: 10 }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, xl: 0 }}
        >
          <LinkComponent to="/theworld">THE WORLD</LinkComponent>
          {/* <LinkComponent to="/metronion">Metronions</LinkComponent>
          <LinkComponent to="/marketplace">Marketplace</LinkComponent>
          <LinkComponent to="/staking">Staking</LinkComponent>
          <LinkComponent to="/land">Land</LinkComponent> */}
        </Stack>
      </Flex>
      <Spacer />
      <Flex>
        <Stack
          direction={{ base: 'column', xl: 'row' }}
          display={{ base: 'none', xl: 'flex' }}
          width={{ base: 'full', xl: 'auto' }}
          spacing={{ base: 5, xl: 10 }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, xl: 0 }}
        >
          {/* <LinkComponent to="/about">About us</LinkComponent> */}
          {/* <LinkComponent to="/">White paper</LinkComponent> */}
          <Button
            onClick={joinUs}
            variant="outline"
            size={useButtonSize()}
            // borderColor=""
            boxShadow="0px 12px 28px rgba(0, 0, 0, 0.25)"
            _hover={{
              color: 'green.200',
              bgColor: 'gray.500',
            }}
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            Join Us Now
          </Button>
          {/* <LinkComponent to="/metronion">Metronions</LinkComponent>
          <LinkComponent to="/marketplace">Marketplace</LinkComponent>
          <LinkComponent to="/staking">Staking</LinkComponent>
          <LinkComponent to="/land">Land</LinkComponent> */}
        </Stack>
      </Flex>
      <Flex>
        <Flex alignItems="center">
          <Box display={{ base: 'none', xl: 'block' }}>
            {props.isShowConnectWallet && <Account />}
          </Box>
          <Box display={{ base: 'block', xl: 'none' }}>
            <Menu
              disableAutoFocus
              right
              styles={styles}
              customBurgerIcon={<HamburgerIcon />}
              customCrossIcon={<CloseIcon opacity={0.7} />}
            >
              <LinkComponentMobile to="/metronion">
                Metronions
              </LinkComponentMobile>
              <LinkComponentMobile to="/marketplace">
                Marketplace
              </LinkComponentMobile>
              <LinkComponentMobile to="/staking">Staking</LinkComponentMobile>
              <LinkComponentMobile to="/land">Land</LinkComponentMobile>
              {props.isShowConnectWallet && (
                <Box mt={6} pt={6} h="100%" borderTop="1px solid #3E4C59">
                  <Account />
                </Box>
              )}
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

interface LinkComponentProps {
  to: string;
  children: React.ReactNode;
}

function LinkComponent(props: LinkComponentProps) {
  return (
    <RouterLink to={props.to}>
      <Text
        textTransform="uppercase"
        _hover={{ color: 'green.200' }}
        fontFamily="Acrom-Bold"
      >
        {props.children}
      </Text>
    </RouterLink>
  );
}

function LinkComponentMobile(props: LinkComponentProps) {
  return (
    <RouterLink to={props.to}>
      <Text
        color="white.200"
        fontFamily="Acrom-Bold"
        textTransform="uppercase"
        _hover={{ color: 'green.200' }}
        fontSize={{
          base: 'sm',
          sm: 'md',
        }}
        mb={2}
      >
        {props.children}
      </Text>
    </RouterLink>
  );
}
