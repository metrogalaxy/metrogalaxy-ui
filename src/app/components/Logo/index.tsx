import * as React from 'react';
import styled from 'styled-components/macro';
import MetroverseImg from './assets/logo.png';
import { Image } from 'react-bootstrap';
import { ColorConstants } from 'src/styles/StyleConstants';

export function Logo() {
  return (
    <Wrapper>
      <Image src={MetroverseImg} />
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
`;

const LogoText = styled.span`
  color: ${p => p.color};
`;
