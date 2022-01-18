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
  metronionSale: {
    contractAddress: string;
    privateSaleTime: Date;
    publicSaleTime: Date;
    privateCap: number;
    publicCap: number;
    endSaleTime: Date;
    metronionUnitPrice: number;
  };
  useMockData: boolean;
}

const ENV: Config = require(`./${environment}.ts`).default;

export default ENV;
