import * as React from 'react';
import styled from 'styled-components/macro';
import Nav from 'react-bootstrap/Nav';
import { ColorConstants } from 'src/styles/StyleConstants';
import { mediaQuery, ScreenSize } from 'src/styles/media';

interface ButtonProps {
  children?: string;
  onClick: any;
}

export function ConnectWalletButton(props: ButtonProps) {
  return (
    <Wrapper onClick={props.onClick}>
      <Button>{props.children}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled(Nav.Item)`
  font-size: 1.6rem;
  text-transform: capitalize;
  background-color: transparent;
  color: ${ColorConstants.MAIN_GREEN};
  border: 2px solid ${ColorConstants.MAIN_GREEN};
  border-radius: 100px;
  padding: 1.5rem 3rem;
  margin-left: 1rem;
  cursor: pointer;
  text-align: center;
  min-width: 25rem;

  ${mediaQuery.lessThan(ScreenSize.MD)`
      margin: 0;
      padding: 1.5rem 1.5rem;
  `}

  &:hover {
    background: ${ColorConstants.MAIN_GREEN};
    color: ${ColorConstants.PRIMARY_BLACK};
    border-color: transparent;
  }
`;
