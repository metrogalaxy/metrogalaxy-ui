const environment = process.env.REACT_APP_NODE_ENV
  ? process.env.REACT_APP_NODE_ENV
  : 'fuji';

export interface Config {
  chainId: number;
  chainName: string;
  nodeUrl: string;
  chainToken: string;
  chainTokenName: string;
  chainExplorerName: string;
  chainExplorer: string;
  metronionNFT: {
    contractAddress: string;
  };
  metronionSale: {
    contractAddress: string;
    privateSaleTime: Date;
    publicSaleTime: Date;
    privateCap: number;
    publicCap: number;
    endSaleTime: Date;
    metronionUnitPrice: number;
  };
  marketplace: {
    contractAddress: string;
  };
  metroToken: {
    contractAddress: string;
  };
  useMockData: boolean;
  api: {
    endpoint: string;
    grpcEndpoint: string;
  };
  googleOAuth: {
    clientId: string;
  };
}

const ENV: Config = require(`./${environment}.ts`).default;

export default ENV;

export * from './config';
