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
import { DAppProvider, Config } from '@quangkeu1995/dappcore';
import AOS from 'aos';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider } from '@chakra-ui/react';
import { theme, Fonts } from 'src/theme';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';

// Use consistent styling
import 'sanitize.css/sanitize.css';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';

// Import root app
import { App } from 'src/app';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'src/store/configureStore';

import reportWebVitals from 'src/reportWebVitals';
import env from 'src/app/config';

// Initialize languages
import './locales/i18n';

// enable mock service worker
if (process.env.REACT_APP_ENABLE_MOCK_API === 'true') {
  const { worker } = require('./mocks/browser');
  worker.start();
} else {
  // apply API endpoint
  axios.defaults.baseURL = env.api.endpoint;
}

const { store, persistor } = configureAppStore();
export { persistor };

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app',
});

const queryClient = new QueryClient();

// init animation on scroll
AOS.init({
  once: true,
});

const config: Config = {
  readOnlyChainId: env.chainId,
  readOnlyUrls: {
    [env.chainId]: env.nodeUrl,
  },
};

ReactDOM.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <HelmetProvider>
        <ApolloProvider client={client}>
          <ViewportProvider>
            <React.StrictMode>
              <DAppProvider config={config}>
                <QueryClientProvider client={queryClient}>
                  <ChakraProvider theme={theme}>
                    <Fonts />
                    <App />
                    {process.env.REACT_APP_ENABLE_QUERY_DEBUG === 'true' && (
                      <ReactQueryDevtools initialIsOpen={false} />
                    )}
                    <ToastContainer />
                  </ChakraProvider>
                </QueryClientProvider>
              </DAppProvider>
            </React.StrictMode>
          </ViewportProvider>
        </ApolloProvider>
      </HelmetProvider>
    </Provider>
  </PersistGate>,
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
