import { IEnv } from './interface';
import { INFURA_ID } from '../constants';

const env: IEnv = {
  CHAIN_ID: 3,
  CHAIN_NAME: 'ropsten',
  NODE_URL: `https://ropsten.infura.io/v3/${INFURA_ID}`,
};

export default env;
