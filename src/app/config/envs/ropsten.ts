import { IEnv } from './interface';
import { INFURA_ID } from '../constants';

const env: IEnv = {
  CHAIN_ID: 3,
  CHAIN_NAME: 'ETH Ropsten',
  NODE_URL: `https://ropsten.infura.io/v3/${INFURA_ID}`,
  CHAIN_TOKEN: 'ETH',
  CHAIN_EXPLORER_NAME: 'Etherscan',
  MINT_DATE: new Date(0),
};

export default env;
