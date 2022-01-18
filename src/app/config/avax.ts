import { Config } from './index';

const env: Config = {
  chainId: 43114,
  chainName: 'Avalanche Mainnet',
  nodeUrl: 'https://api.avax.network/ext/bc/C/rpc',
  chainToken: 'AVAX',
  chainTokenName: 'Avalanche',
  chainExplorerName: 'Snowtrace',
  chainExplorer: 'https://snowtrace.io/',
  metronionSale: {
    contractAddress: '0x48d7eEc677005512B0046e10f7b6F61dAAE5Ec1c',
    privateSaleTime: new Date(0),
    publicSaleTime: new Date(1),
    privateCap: 1,
    publicCap: 5,
    endSaleTime: new Date(1643587200 * 1000),
    metronionUnitPrice: 1,
  },
  useMockData: false,
};

export default env;
