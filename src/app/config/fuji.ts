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
    contractAddress: '0x356a66256994C583Cd1a3Ed440880512521ea568',
    privateSaleTime: new Date(0 * 1000),
    publicSaleTime: new Date(1641924000 * 1000),
    privateCap: 1,
    publicCap: 5,
    endSaleTime: new Date(1672010400 * 1000),
    metronionUnitPrice: 1,
  },
  useMockData: false,
};

export default env;
