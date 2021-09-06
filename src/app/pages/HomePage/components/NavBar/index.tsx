import * as React from 'react';
import styled from 'styled-components/macro';
import { Navbar, Nav } from 'react-bootstrap';
import { Logo } from 'src/app/components/Logo';
import { ColorConstants } from 'src/styles/StyleConstants';
import { MenuItem } from './MenuItem';
import { MenuButton } from './MenuButton';
import { mediaQuery, ScreenSize, ScreenSizeNumber } from 'src/styles/media';
import MenuIconImg from './assets/menu_icon.png';

enum MENU_ITEMS_ID {
  Home = 'home',
  Character = 'character',
  Features = 'features',
}

export function NavBar() {
  const [selectedId, setSelectedId] = React.useState<string>(
    MENU_ITEMS_ID.Home,
  );

  function handleMenuItemClick(selectedKey) {
    if (selectedKey !== selectedId) {
      setSelectedId(selectedKey);
      return;
    }
  }

  return (
    <Wrapper>
      <Menu collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" as={MenuIcon} />
        <MenuCollapse id="responsive-navbar-nav">
          <Nav onSelect={handleMenuItemClick} activeKey={selectedId}>
            <MenuItem id={MENU_ITEMS_ID.Home} selectedId={selectedId}>
              Home
            </MenuItem>
            <MenuItem id={MENU_ITEMS_ID.Character} selectedId={selectedId}>
              Character
            </MenuItem>
            <MenuItem id={MENU_ITEMS_ID.Features} selectedId={selectedId}>
              Features
            </MenuItem>
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

  ${mediaQuery.lessThan(ScreenSize.LAPTOP)`
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

  ${mediaQuery.lessThan(ScreenSize.TABLET)`
    padding: 2rem 3rem;
  `}

  ${mediaQuery.greaterThan(ScreenSize.LAPTOP_LARGE)`
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
