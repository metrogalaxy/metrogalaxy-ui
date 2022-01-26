import { Config } from './index';

const env: Config = {
  chainId: 43113,
  chainName: 'Avalanche Fuji Testnet',
  nodeUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
  chainToken: 'AVAX',
  chainTokenName: 'Avalanche',
  chainExplorerName: 'Snowtrace',
  chainExplorer: 'https://testnet.snowtrace.io/',
  metronionSale: {
    contractAddress: '0x936864d8a298bCd20Abc3A43438fDE038e909DfF',
    privateSaleTime: new Date(1642953600 * 1000),
    publicSaleTime: new Date(1643007600 * 1000),
    privateCap: 1,
    publicCap: 5,
    endSaleTime: new Date(1643166000 * 1000),
    metronionUnitPrice: 1,
  },
  useMockData: false,
  api: {
    endpoint: 'https://dev-api.metrogalaxy.io',
  },
};

export default env;
