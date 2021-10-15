import { IEnv } from './interface';
import { INFURA_ID } from '../constants';

const env: IEnv = {
  CHAIN_ID: 1,
  CHAIN_NAME: 'mainnet',
  NODE_URL: `https://mainnet.infura.io/v3/${INFURA_ID}`,
};

export default env;
