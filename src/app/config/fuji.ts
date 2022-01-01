import { Config } from './index';

const env: Config = {
  chainId: 43113,
  chainName: 'Avalanche Fuji Testnet',
  nodeUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
  chainToken: 'AVAX',
  chainExplorerName: 'Snowtrace',
  chainExplorer: 'https://testnet.snowtrace.io/',
  metronionSale: {
    contractAddress: '0x48d7eEc677005512B0046e10f7b6F61dAAE5Ec1c',
    privateSaleTime: new Date(0 * 1000),
    publicSaleTime: new Date(1642212001 * 1000),
    privateCap: 1,
    publicCap: 5,
    endSaleTime: new Date(1642212002 * 1000),
    metronionUnitPrice: 1,
  },
  useMockData: false,
};

export default env;
