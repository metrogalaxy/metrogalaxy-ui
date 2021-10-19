/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ViewportProvider } from './utils/viewport';
import { DAppProvider, Config } from '@usedapp/core';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { LoadingScreen } from 'src/app/components/Loading';
import AOS from 'aos';

// Use consistent styling
import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';

// Import root app
import { App } from 'src/app';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'src/store/configureStore';

import reportWebVitals from 'src/reportWebVitals';
import ENV from 'src/app/config/env';

// Initialize languages
import './locales/i18n';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app',
});

// init animation on scroll
AOS.init();

const config: Config = {
  readOnlyChainId: ENV.CHAIN_ID,
  readOnlyUrls: {
    [ENV.CHAIN_ID]: ENV.NODE_URL,
  },
  supportedChains: [ENV.CHAIN_ID],
};

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <ApolloProvider client={client}>
        <ViewportProvider>
          <PersistGate loading={<LoadingScreen />} persistor={persistor}>
            <React.StrictMode>
              <DAppProvider config={config}>
                <App />
              </DAppProvider>
            </React.StrictMode>
          </PersistGate>
        </ViewportProvider>
      </ApolloProvider>
    </HelmetProvider>
  </Provider>,
  MOUNT_NODE,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
