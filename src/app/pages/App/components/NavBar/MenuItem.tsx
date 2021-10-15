import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';

interface MenuItemProps {
  id: string;
  activeId: string;
  route?: string;
  children?: string;
}

export function MenuItem(props: MenuItemProps) {
  const isActive = props.id === props.activeId;
  return (
    <Wrapper>
      {props.route && (
        <Link
          className={
            isActive ? 'link-wrapper link-wrapper-active' : 'link-wrapper'
          }
          to={props.route}
        >
          {props.children}
        </Link>
      )}
      {!props.route && props.children}
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  font-family: 'Acrom-Bold';
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  text-align: center;
  letter-spacing: -0.02em;

  .link-wrapper {
    color: ${ColorConstants.WHITE} !important;
    background-color: transparent;
    padding: 1rem 2.5rem;
    text-decoration: none;

    ${mediaQuery.lessThan(ScreenSize.XL)`
      background-color: transparent !important;
      padding: 0 !important;
    `}
  }
  .link-wrapper-active {
    color: ${ColorConstants.MAIN_GREEN} !important;
  }

  ${mediaQuery.lessThan(ScreenSize.XL)`
    background-color: transparent !important;
    padding: 1rem 2.5rem;
  `}
`;
