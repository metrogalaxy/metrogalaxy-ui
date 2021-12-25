import * as React from 'react';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { slide as Menu } from 'react-burger-menu';
import { Logo } from 'src/app/components/Logo';
import { Link as RouterLink } from 'react-router-dom';
import { Account } from 'src/app/components/Account';

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
    background: '#010101',
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
    height: 50,
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
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      width="full"
      bg="grayBlur.100"
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
          <LinkComponent to="/metronion">Metronions</LinkComponent>
          <LinkComponent to="/marketplace">Marketplace</LinkComponent>
          <LinkComponent to="/staking">Staking</LinkComponent>
          <LinkComponent to="/land">Land</LinkComponent>
        </Stack>
      </Flex>
      <Flex>
        <Flex alignItems="center">
          <Box display={{ base: 'none', xl: 'block' }}>
            {props.isShowConnectWallet && <Account />}
          </Box>
          <Box display={{ base: 'block', xl: 'none' }}>
            <Menu
              right
              styles={styles}
              customBurgerIcon={<HamburgerIcon />}
              customCrossIcon={<CloseIcon />}
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
                <Box mt={10}>
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
