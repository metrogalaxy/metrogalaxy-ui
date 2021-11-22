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
import { Countdown } from './Countdown';
import { DuringSaleInfo } from './DuringSaleInfo';
import { SaleEnded } from './SaleEnded';
import {
  METRONION_PRIVATE_CAP,
  METRONION_PUBLIC_CAP,
} from 'src/app/config/constants';
import {
  useIsWhitelistedAddress,
  useGetUserRecord,
} from 'src/app/service/web3';
import { useEthers } from '@usedapp/core';
import { Web3Provider } from '@ethersproject/providers';

export enum Round {
  PRIVATE = 'Private Sale',
  PUBLIC = 'Public Sale',
  ENDED = 'Sale Ended',
}

export function Metronion() {
  const { library, account } = useEthers();
  const provider = library as Web3Provider;
  const now = Date.now();

  const isPrePrivateSale = now < ENV.PRIVATE_SALE_TIME.getTime();
  const duringPrivateSale =
    now >= ENV.PRIVATE_SALE_TIME.getTime() &&
    now < ENV.PUBLIC_SALE_TIME.getTime();
  const duringPublicSale =
    now >= ENV.PUBLIC_SALE_TIME.getTime() && now < ENV.END_SALE_TIME.getTime();
  const saleEnded = now >= ENV.END_SALE_TIME;

  // check address is whitelisted if on the private sale phase
  const { data: isWhitelisted } = useIsWhitelistedAddress(
    provider,
    ENV.CURRENT_METRONION_VERSION_ID,
    account!,
    {
      enabled: duringPrivateSale && account !== undefined && account !== null,
    },
  );

  // get user record on private and public sale
  const { data: userRecord } = useGetUserRecord(
    provider,
    ENV.CURRENT_METRONION_VERSION_ID,
    account!,
    {
      enabled:
        (duringPrivateSale || duringPublicSale) &&
        account !== undefined &&
        account !== null,
    },
  );

  console.log('rerender');
  console.log(userRecord);

  let CountdownComponent: React.ReactNode;
  let round = Round.PRIVATE;
  let allocation = 0;
  let purchased = 0;
  if (isPrePrivateSale) {
    CountdownComponent = (
      <Countdown deadline={ENV.PRIVATE_SALE_TIME} round={Round.PRIVATE} />
    );
  } else if (duringPrivateSale) {
    CountdownComponent = (
      <DuringSaleInfo
        title="Private Sale Is Started"
        nextRoundTitle="Public Sale Starts In"
        nextRoundDate={ENV.PUBLIC_SALE_TIME}
      />
    );
    allocation = isWhitelisted ? METRONION_PRIVATE_CAP : 0;
    purchased = userRecord ? userRecord!.privateBought : 0;
  } else if (duringPublicSale) {
    CountdownComponent = (
      <DuringSaleInfo
        title="Public Sale Is Started"
        nextRoundTitle="Public Sale Will End In"
        nextRoundDate={ENV.END_SALE_TIME}
        subtitle="End Time"
      />
    );
    round = Round.PUBLIC;
    allocation = METRONION_PUBLIC_CAP;
    purchased = userRecord ? userRecord!.publicBought : 0;
  } else if (saleEnded) {
    CountdownComponent = <SaleEnded />;
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
            <Col sm={12} lg={4} className="col-layout">
              <Avatar />
            </Col>
            <Col sm={12} lg={4} className="col-layout col-layout--flex-end">
              {CountdownComponent}
              {isPrePrivateSale || saleEnded ? null : (
                <MintBox
                  allocation={allocation}
                  purchased={purchased}
                  round={round}
                />
              )}
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
    ${mediaQuery.greaterThan(ScreenSize.LG)`
      display: flex;
      flex-direction: column;
    `}
  }

  .col-layout--flex-end {
    ${mediaQuery.greaterThan(ScreenSize.LG)`
      display: flex;
      align-items: flex-end;
    `}
  }
`;
