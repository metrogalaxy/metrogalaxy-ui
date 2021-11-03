/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'src/styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { Land, Marketplace, Metronion, Staking } from './pages/App/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import FavIcon from './assets/favicon.png';
// import { MetronionInfo } from './pages/App/MetronionInfo';

export function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s | The Metroverse"
        defaultTitle="The Metroverse"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="The Metroverse | Decentralized Open World"
        />
        <link rel="icon" type="image/png" href={FavIcon} sizes="16x16" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/metronion" component={Metronion} />
        <Route exact path="/marketplace" component={Marketplace} />
        <Route exact path="/staking" component={Staking} />
        <Route exact path="/land" component={Land} />
        {/* <Route exact path="/inventory" component={Inventory} />
        <Route path="/metronion/:id" component={MetronionInfo} /> */}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
