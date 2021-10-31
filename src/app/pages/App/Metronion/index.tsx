import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { Row, Col } from 'react-bootstrap';
import { NavBar, NAV_BAR_ITEMS_ID } from 'src/app/pages/App/components/NavBar';
import { Background } from '../components/Background';
import { Layout, TitleLayout } from '../components/Layout';
import TitleIcon from './assets/title_icon.svg';
import { TotalMintInfo } from './TotalMintInfo';
import { Guide } from './Guide';
import { Avatar } from './Avatar';
import { MintBox } from './MintBox';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import ENV from 'src/app/config/env';
import { useTimer } from 'react-timer-hook';
import { Countdown } from './Countdown';

export function Metronion() {
  let { isRunning } = useTimer({
    expiryTimestamp: ENV.MINT_DATE,
  });

  if (ENV.MINT_DATE.getTime() - Date.now() <= 0) {
    isRunning = false;
  }

  return (
    <Wrapper>
      <Helmet>
        <title>Metronion</title>
        <meta name="description" content="The Metronion" />
      </Helmet>
      <NavBar activeItemId={NAV_BAR_ITEMS_ID.Metronion} />
      <Background />
      <Layout>
        <TitleLayout iconSrc={TitleIcon}>Mint Metronion</TitleLayout>
        <MainLayout>
          <Row className="row-layout">
            <Col sm={12} lg={4} className="col-layout">
              <TotalMintInfo />
              <Guide />
            </Col>
            <Col sm={12} lg={8} className="col-layout col-layout-flex">
              <Avatar />
              {!isRunning && <MintBox />}
              {isRunning && <Countdown />}
            </Col>
          </Row>
        </MainLayout>
      </Layout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const MainLayout = styled.div`
  .row-layout {
    margin: 0;
  }

  .col-layout {
    padding: 0;
  }

  .col-layout-flex {
    ${mediaQuery.greaterThan(ScreenSize.LG)`
      display: flex;

    `}
  }
`;
