import * as React from 'react';
import { ColorConstants } from 'src/styles/StyleConstants';
import styled from 'styled-components/macro';
import { Image } from 'react-bootstrap';
import { mediaQuery, ScreenSize } from 'src/styles/media';

interface TitleLayoutProps {
  iconSrc?: string;
  children?: React.ReactNode;
  onClick?: () => any;
}

export function TitleLayout(props: TitleLayoutProps) {
  return (
    <Wrapper>
      <Box>
        {props.iconSrc && (
          <Image
            className={`icon ${
              typeof props.onClick === 'function' ? 'icon-pointer' : ''
            }`}
            src={props.iconSrc}
            onClick={props.onClick}
          />
        )}
        {props.children}
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mediaQuery.lessThan(ScreenSize.LG)`
    display: flex;
    justify-content: center;
  `}
`;

const Box = styled.div`
  font-family: 'Acrom';
  font-size: 1.8rem;
  line-height: 2.2rem;
  text-transform: capitalize;
  color: ${ColorConstants.WHITE};
  margin-bottom: 3rem;
  max-width: 36rem;
  width: 100%;

  .icon {
    margin-right: 1rem;
  }

  .icon-pointer {
    cursor: pointer;
  }
`;
