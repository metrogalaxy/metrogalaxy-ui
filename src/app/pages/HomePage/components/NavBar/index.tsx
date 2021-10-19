import * as React from 'react';
import styled from 'styled-components/macro';
import { Navbar, Nav } from 'react-bootstrap';
import { Logo } from 'src/app/components/Logo';
import { ColorConstants } from 'src/styles/StyleConstants';
import { MenuItem } from './MenuItem';
import { MenuButton } from './MenuButton';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import MenuIconImg from 'src/app/assets/menu_icon.png';
import { TELEGRAM_URL } from 'src/app/config/constants';

enum MENU_ITEMS_ID {
  Metronion = 'metronion',
  Marketplace = 'marketplace',
  Staking = 'staking',
  Land = 'land',
}

export function NavBar() {
  const openTelegramGroup = () => {
    window.open(TELEGRAM_URL);
  };
  return (
    <Wrapper>
      <Menu collapseOnSelect expand="xl">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" as={MenuIcon} />
        <MenuCollapse id="responsive-navbar-nav">
          <Nav>
            <MenuItem id={MENU_ITEMS_ID.Metronion} route="/metronion">
              Metronion
            </MenuItem>
            <MenuItem id={MENU_ITEMS_ID.Marketplace} route="/marketplace">
              Marketplace
            </MenuItem>
            <MenuItem id={MENU_ITEMS_ID.Staking} route="/staking">
              Staking
            </MenuItem>
            <MenuItem id={MENU_ITEMS_ID.Land} route="/land">
              Land
            </MenuItem>
          </Nav>
          <MenuButton onClick={openTelegramGroup}>Join Us Now</MenuButton>
        </MenuCollapse>
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  font-size: 2.4rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: center;

  ${mediaQuery.lessThan(ScreenSize.MD)`
    display: block;
  `}
`;

const Menu = styled(Navbar)`
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${ColorConstants.WHITE};
  display: flex;
  justify-content: space-between;
  padding: 2rem 6rem;
  width: 100%;
  position: relative;

  ${mediaQuery.lessThan(ScreenSize.MD)`
    padding: 2rem 3rem;
  `}

  ${mediaQuery.greaterThan(ScreenSize.XXL)`
    width: 85%;
  `}
`;

const MenuIcon = styled.div`
  cursor: pointer;
  background-image: url(${MenuIconImg});
  background-size: contain;
  width: 5rem;
  height: 5rem;
  border: none;

  span {
    display: none;
  }
`;

const MenuCollapse = styled(Navbar.Collapse)`
  justify-content: flex-end;
`;
