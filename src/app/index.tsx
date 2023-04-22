/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// import { Metronion, Inventory, MetronionInfo } from './pages/App/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import FavIcon from 'src/app/assets/favicon.png';
import { LandingPage } from './pages/LandingPage';
import { ComingSoon } from './pages/App/ComingSoon';
import { Tokenomics } from './pages/LandingPage/Tokenomics';
import { AboutUs } from './pages/LandingPage/AboutUs';

import env from 'src/app/config';
import { useGlobalSlice } from 'src/app/globalSlice';
import { useDispatch } from 'react-redux';
import { useGetTokenUSDPrice } from 'src/app/service/Coingecko';
import { HomePage } from './pages/Home';

const FETCH_TOKEN_PRICE_INTERVAL = 30 * 1000;

export function App() {
  const { i18n } = useTranslation();
  const { actions } = useGlobalSlice();
  const dispatch = useDispatch();

  const { data } = useGetTokenUSDPrice(env.chainToken, {
    refetchInterval: FETCH_TOKEN_PRICE_INTERVAL,
  });

  React.useEffect(() => {
    if (data && data !== 0) {
      dispatch(actions.setAvaxPrice(data));
    }
  }, [data, dispatch, actions]);

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s | The MetroGalaxy"
        defaultTitle="The MetroGalaxy"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="The MetroGalaxy | Decentralized Open World"
        />
        <link rel="icon" type="image/png" href={FavIcon} sizes="16x16" />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/theworld" element={<LandingPage />} />
        {/* <Route path="/metronion" element={<Metronion />} /> */}
        <Route path="/metronion" element={<ComingSoon />} />
        <Route path="/marketplace" element={<ComingSoon />} />
        <Route path="/staking" element={<ComingSoon />} />
        <Route path="/land" element={<ComingSoon />} />
        <Route path="/tokenomic" element={<Tokenomics />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/inventory" element={<Inventory />} /> */}
        <Route path="/inventory" element={<ComingSoon />} />
        {/* <Route path="/metronion/:id" element={<MetronionInfo />} /> */}

        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
