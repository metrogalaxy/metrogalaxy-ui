import * as React from 'react';
import styled from 'styled-components/macro';
import { mediaQuery, ScreenSize } from 'src/styles/media';

interface Props {
  className?: string;
  children: any;
}

export function FeaturePanel(props: Props) {
  return (
    <Wrapper className={props.className}>
      <Box>{props.children}</Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
`;

const Box = styled.div`
  height: 100%;
  position: relative;

  ${mediaQuery.lessThan(ScreenSize.PHONE)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}

  ${mediaQuery.between(ScreenSize.PHONE, ScreenSize.TABLET)`
  `}
`;
