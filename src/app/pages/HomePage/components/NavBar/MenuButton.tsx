import * as React from 'react';
import styled from 'styled-components/macro';
import Nav from 'react-bootstrap/Nav';
import { ColorConstants } from 'src/styles/StyleConstants';
import { mediaQuery, ScreenSize } from 'src/styles/media';

interface MenuButtonProps {
  children: string;
  onClick?: () => any;
}

export function MenuButton(props: MenuButtonProps) {
  return <Wrapper onClick={props.onClick}>{props.children}</Wrapper>;
}

const Wrapper = styled(Nav.Item)`
  text-transform: capitalize;
  background-color: transparent;
  color: ${ColorConstants.WHITE};
  border: 2px solid rgba(255, 255, 255, 0.56);
  border-radius: 100px;
  padding: 1.5rem 3rem;
  margin-left: 1rem;
  cursor: pointer;
  text-align: center;

  ${mediaQuery.lessThan(ScreenSize.MD)`
      margin: 0;
      padding: 1.5rem 1.5rem;
  `}

  &:hover {
    background: ${ColorConstants.PRIMARY};
    color: ${ColorConstants.PRIMARY_BLACK};
    border-color: transparent;
  }
`;
