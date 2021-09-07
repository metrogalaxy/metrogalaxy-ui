import * as React from 'react';
import styled from 'styled-components/macro';
import { Nav } from 'react-bootstrap';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';

interface MenuItemProps {
  id: string;
  children?: string;
}

export function MenuItem(props: MenuItemProps) {
  return (
    <Wrapper>
      <Nav.Link eventKey={props.id}>{props.children}</Nav.Link>
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

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #b8f040;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 50%;
    left: 25%;
  }

  ${mediaQuery.lessThan(ScreenSize.MD)`
    background-color: transparent !important;
    padding: 1rem 2.5rem;
  `}
`;
