import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { NavBar, NAV_BAR_ITEMS_ID } from 'src/app/components/NavBar';
import { Background } from '../components/Background';
import { ColorConstants } from 'src/styles/StyleConstants';

export function Staking() {
  return (
    <Wrapper>
      <Helmet>
        <title>Staking</title>
        <meta name="description" content="The Metronion" />
      </Helmet>
      <NavBar activeItemId={NAV_BAR_ITEMS_ID.Staking} />
      <Background />
      <ComingSoon>Coming Soon</ComingSoon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ComingSoon = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 5rem;

  font-family: 'Acrom';
  font-size: 2.4rem;
  text-transform: uppercase;
  color: ${ColorConstants.WHITE};
  display: flex;
  justify-content: center;
`;
