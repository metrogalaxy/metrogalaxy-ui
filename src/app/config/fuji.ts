import { Config } from './index';

const env: Config = {
  chainId: 43113,
  chainName: 'Avalanche Fuji Testnet',
  nodeUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
  chainToken: 'AVAX',
  chainTokenName: 'Avalanche',
  chainExplorerName: 'Snowtrace',
  chainExplorer: 'https://testnet.snowtrace.io/',
  metronionNFT: {
    contractAddress: '0xE6b3b502aFB1d49bEDFD0417bfea685A90799Af8',
  },
  metronionSale: {
    contractAddress: '0x5F30Db19EdD823E9723387f7f825BFF19E97c901',
    privateSaleTime: new Date(1645029000 * 1000),
    publicSaleTime: new Date(1645029900 * 1000),
    privateCap: 1,
    publicCap: 5,
    endSaleTime: new Date(1645375500 * 1000),
    metronionUnitPrice: 1,
  },
  marketplace: {
    contractAddress: '0x02Dcf557423b682933d5CA774af75c2Cd8876189',
  },
  metroToken: {
    contractAddress: '0x3F56Ac4dD7904ACB4e31eaa341a3E306F69F52fF',
  },
  useMockData: false,
  api: {
    endpoint: 'https://dev-api.metrogalaxy.io',
    grpcEndpoint: 'https://dev-grpc-webproxy.metrogalaxy.io',
    gameServerApiEndpoint: 'https://dev-game-server-api.metrogalaxy.io',
  },
  googleOAuth: {
    clientId:
      '421185552601-cciedsseri0im5pru0cc1h0sdai1ob0u.apps.googleusercontent.com',
  },
  gameWebAppUrl: 'https://dev-game.metrogalaxy.io',
};

export default env;
