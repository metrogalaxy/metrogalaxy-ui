import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { NavBar, NAV_BAR_ITEMS_ID } from 'src/app/pages/App/components/NavBar';
import { Row, Col } from 'react-bootstrap';
import { Background } from '../components/Background';
import { Layout, TitleLayout } from '../components/Layout';
import { lazyLoad } from 'src/utils/loadable';
import { LoadingSpinnerWrapper } from 'src/app/components/Loading';
import { useHistory } from 'react-router-dom';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import ArrorImg from './assets/arrow.png';
import { Filter } from './Filter';
import { useAccount } from 'src/app/hooks';
import { ColorConstants } from 'src/styles/StyleConstants';

const ItemPanel = lazyLoad(
  () => import('./ItemPanel'),
  module => module.ItemPanel,
  {
    fallback: <LoadingSpinnerWrapper />,
  },
);

export function Inventory() {
  const { isActivated } = useAccount();

  const history = useHistory();
  const handleBackToMintPage = () => {
    history.push('/metronion');
  };

  return (
    <Wrapper>
      <Helmet>
        <title>Inventory</title>
        <meta name="description" content="The Metronion" />
      </Helmet>
      <NavBar activeItemId={NAV_BAR_ITEMS_ID.Metronion} />
      <Background />
      <Layout>
        <TitleLayout iconSrc={ArrorImg} onClick={handleBackToMintPage}>
          Inventory
        </TitleLayout>
        <MainLayout>
          <Row className="row-layout">
            <Col sm={12} lg={4} className="col-layout">
              <Filter />
            </Col>
            <Col sm={12} lg={8} className="col-layout">
              {!isActivated && (
                <Warning>Please Connect Your Wallet First</Warning>
              )}
              {isActivated && <ItemPanel />}
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
    ${mediaQuery.lessThan(ScreenSize.LG)`
      margin-bottom: 4rem;
    `}
  }

  .col-layout-flex {
    ${mediaQuery.greaterThan(ScreenSize.LG)`
      display: flex;
    `}
  }
`;

const Warning = styled.div`
  font-family: 'Acrom';
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${ColorConstants.WHITE};
  text-align: center;
`;
