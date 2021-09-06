import * as React from 'react';
import styled from 'styled-components/macro';
import MetroverseImg from './assets/metroverse_logo.png';
import { ColorConstants } from 'src/styles/StyleConstants';
import { mediaQuery, ScreenSize } from 'src/styles/media';

export function Logo() {
  return (
    <Wrapper>
      <LogoImg />
      <LogoTextWrapper>
        <LogoText color={ColorConstants.WHITE}>Metro</LogoText>
        <LogoText color={ColorConstants.MAIN_GREEN}>Verse</LogoText>
      </LogoTextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  display: flex;
  cursor: pointer;
`;

const LogoImg = styled.div`
  background-image: url(${MetroverseImg});
  background-position: top center;
  background-size: cover;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-color: ${ColorConstants.WHITE};
  border-radius: 50%;
  border: 0.35rem solid ${ColorConstants.MAIN_BLUE};
  width: 6rem;
  height: 6rem;
  padding: 0.6rem 0.3rem;
`;

const LogoTextWrapper = styled.div`
  font-family: 'Acrom-Bold';
  font-weight: 800;
  font-size: 3.4rem;
  line-height: 4rem;
  text-transform: capitalize;
  align-self: center;
  /* padding-top: 0.8rem; */
  margin-left: 0.6rem;
  text-shadow: 0px 2.13888px 6.41665px rgba(0, 0, 0, 0.25);
  letter-spacing: -0.05em;

  ${mediaQuery.lessThan(ScreenSize.PHONE)`
    display: none;
  `}
`;

const LogoText = styled.span`
  color: ${p => p.color};
`;
