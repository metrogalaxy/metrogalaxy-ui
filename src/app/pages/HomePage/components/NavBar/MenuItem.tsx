import * as React from 'react';
import styled from 'styled-components/macro';
import { Nav } from 'react-bootstrap';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';

interface MenuItemProps {
  id: string;
  selectedId: string;
  children?: string;
}

const MENU_ITEM_SELECTED_UNDERLINE = '#B8F040';

export function MenuItem(props: MenuItemProps) {
  const isSelected: boolean =
    props.id !== undefined && props.selectedId === props.id;
  return (
    <Wrapper>
      <Nav.Link eventKey={props.id}>
        {props.children}
        {isSelected && <Underline />}
      </Nav.Link>
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  text-align: center;

  a {
    color: ${ColorConstants.WHITE} !important;
    background-color: transparent;
    border-radius: 10rem;
    padding: 1rem 2.5rem !important;
  }

  .active {
    background-color: rgba(6, 51, 86, 0.5) !important;
    border-color: none !important;
  }

  ${mediaQuery.lessThan(ScreenSize.TABLET)`
    background-color: transparent !important;
    padding: 1rem 2.5rem;
  `}
`;

const Underline = styled('div')`
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 50%;
  height: 0.3rem;
  background-color: ${MENU_ITEM_SELECTED_UNDERLINE};
  box-shadow: 0px 2px 6px rgba(201, 255, 86, 0.71);
  border-radius: 10px;

  ${mediaQuery.lessThan(ScreenSize.TABLET)`
    display: none;
  `}
`;
