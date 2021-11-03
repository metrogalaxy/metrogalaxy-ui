import * as React from 'react';
import styled from 'styled-components/macro';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { Navbar, Nav } from 'react-bootstrap';
import MenuIconImg from 'src/app/assets/menu_icon.png';
import { Logo } from 'src/app/components/Logo';
import { MenuItem } from './MenuItem';
import { ColorConstants } from 'src/styles/StyleConstants';
import { Account } from 'src/app/pages/App/components/Account';
// import { Inventory } from './Inventory';
// import { useAccount } from 'src/app/hooks';

export enum NAV_BAR_ITEMS_ID {
  Metronion = 'metronion',
  Marketplace = 'marketplace',
  Staking = 'staking',
  Land = 'land',
}

interface NavBarProps {
  activeItemId: string;
}

export function NavBar(props: NavBarProps) {
  // const { isActivated } = useAccount();
  return (
    <Wrapper>
      <Menu collapseOnSelect expand="xl">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" as={MenuIcon} />
        <MenuCollapse id="responsive-navbar-nav">
          <Nav>
            <MenuItem
              id={NAV_BAR_ITEMS_ID.Metronion}
              route="/metronion"
              activeId={props.activeItemId}
            >
              Metronion
            </MenuItem>
            <MenuItem
              id={NAV_BAR_ITEMS_ID.Marketplace}
              route="/marketplace"
              activeId={props.activeItemId}
            >
              Marketplace
            </MenuItem>
            <MenuItem
              id={NAV_BAR_ITEMS_ID.Staking}
              route="/staking"
              activeId={props.activeItemId}
            >
              Staking
            </MenuItem>
            <MenuItem
              id={NAV_BAR_ITEMS_ID.Land}
              route="/land"
              activeId={props.activeItemId}
            >
              Land
            </MenuItem>
          </Nav>
        </MenuCollapse>
      </Menu>
      <AccountWrapper>
        <Account />
      </AccountWrapper>
      {/* {isActivated && <Inventory />} */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(5, 15, 26, 0.8);
  border-bottom: 2px solid rgba(98, 228, 127, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;

  ${mediaQuery.lessThan(ScreenSize.XL)`
    flex-direction: column;
  `}
`;

const AccountWrapper = styled.div`
  padding: 2rem 4rem 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQuery.lessThan(ScreenSize.XL)`
    padding: 0 4rem 2rem;
  `}
`;

const Menu = styled(Navbar)`
  height: 100%;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${ColorConstants.WHITE};
  padding: 2rem 4rem;

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
  justify-content: space-between;
`;
