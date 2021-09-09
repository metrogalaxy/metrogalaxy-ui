import * as React from 'react';
import styled from 'styled-components/macro';
import { useViewport } from 'src/app/hooks';
import { Navbar, Nav } from 'react-bootstrap';
import { Logo } from 'src/app/components/Logo';
import { ColorConstants } from 'src/styles/StyleConstants';
import { MenuItem } from './MenuItem';
import { MenuButton } from './MenuButton';
import { mediaQuery, ScreenSize, ScreenSizeNumber } from 'src/styles/media';
import MenuIconImg from './assets/menu_icon.png';

enum MENU_ITEMS_ID {
  Marketplace = 'marketplace',
  Staking = 'staking',
  Land = 'land',
}

export function NavBar() {
  const { width } = useViewport();

  return (
    <Wrapper>
      <Menu collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <Logo hideText={width < ScreenSizeNumber.MD} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" as={MenuIcon} />
        <MenuCollapse id="responsive-navbar-nav">
          <Nav>
            <MenuItem id={MENU_ITEMS_ID.Marketplace}>Marketplace</MenuItem>
            <MenuItem id={MENU_ITEMS_ID.Staking}>Staking</MenuItem>
            <MenuItem id={MENU_ITEMS_ID.Land}>Land</MenuItem>
          </Nav>
          <MenuButton>Join Us Now</MenuButton>
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
  padding: 3rem 6rem;
  width: 100%;

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
