import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';

interface MenuItemProps {
  id: string;
  route?: string;
  children?: string;
}

export function MenuItem(props: MenuItemProps) {
  return (
    <Wrapper>
      {props.route && (
        <Link className="link-wrapper" to={props.route}>
          {props.children}
        </Link>
      )}
      {!props.route && props.children}
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  text-align: center;

  .link-wrapper {
    color: ${ColorConstants.WHITE} !important;
    background-color: transparent;
    border-radius: 10rem;
    padding: 1rem 2.5rem !important;
    text-decoration: none;
  }

  .link-wrapper:after {
    background: none repeat scroll 0 0 transparent;
    bottom: -0.5em;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #b8f040;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  .link-wrapper:hover:after {
    width: 50%;
    left: 25%;
  }

  ${mediaQuery.lessThan(ScreenSize.XL)`
    background-color: transparent !important;
    padding: 1rem 2.5rem;
  `}
`;
