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
    contractAddress: '0xa9FB6b119Eb7124a033cD7C96031a3381a8fb5c5',
  },
  metronionSale: {
    contractAddress: '0x936864d8a298bCd20Abc3A43438fDE038e909DfF',
    privateSaleTime: new Date(1642953600 * 1000),
    publicSaleTime: new Date(1643007600 * 1000),
    privateCap: 1,
    publicCap: 5,
    endSaleTime: new Date(1643166000 * 1000),
    metronionUnitPrice: 1,
  },
  marketplace: {
    contractAddress: '0x86ab96C653c7cBb05b1F33D3eC09B539e0d38906',
  },
  metroToken: {
    contractAddress: '0x0bF7b549eFFC57a3Cdd51762023f4B987b25f446',
  },
  useMockData: false,
  api: {
    endpoint: 'https://dev-api.metrogalaxy.io',
  },
};

export default env;
