import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { NavBar, NAV_BAR_ITEMS_ID } from 'src/app/pages/App/components/NavBar';
import { Layout, TitleLayout } from '../components/Layout';
import { Background } from '../components/Background';
import TitleIcon from 'src/app/pages/App/Inventory/assets/arrow.png';
import { useHistory } from 'react-router-dom';
import { lazyLoad } from 'src/utils/loadable';
import { LoadingSpinnerWrapper } from 'src/app/components/Loading';
import BigNumber from 'bignumber.js';
import { MAX_METRONION_COUNT } from 'src/app/config/constants';
import { NotFound } from './NotFound';

const Panel = lazyLoad(
  () => import('./Panel'),
  module => module.Panel,
  {
    fallback: <LoadingSpinnerWrapper />,
  },
);

interface UrlParams {
  id: string;
}

export function MetronionInfo() {
  const history = useHistory();
  const { id } = useParams<UrlParams>();

  const handleBackToInventoryPage = () => {
    history.push('/inventory');
  };

  const idNumber = new BigNumber(id);

  const idValidIdParams =
    !idNumber.isNaN() &&
    idNumber.isGreaterThanOrEqualTo(1) &&
    idNumber.isLessThanOrEqualTo(MAX_METRONION_COUNT);

  return (
    <Wrapper>
      <Helmet>
        <title>Metronion {id}</title>
        <meta name="description" content={`The Metronion ${id}`} />
      </Helmet>
      <NavBar activeItemId={NAV_BAR_ITEMS_ID.Metronion} />
      <Background />
      {idValidIdParams && (
        <Layout>
          <TitleLayout iconSrc={TitleIcon} onClick={handleBackToInventoryPage}>
            Metronion #{id}
          </TitleLayout>
          <Panel id={id} />
        </Layout>
      )}
      {!idValidIdParams && <NotFound />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
