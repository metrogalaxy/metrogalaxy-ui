import { IEnv } from './interface';
import { INFURA_ID } from '../constants';

const env: IEnv = {
  CHAIN_ID: 1,
  CHAIN_NAME: 'ETH Mainnet',
  NODE_URL: `https://mainnet.infura.io/v3/${INFURA_ID}`,
  CHAIN_TOKEN: 'ETH',
  CHAIN_EXPLORER_NAME: 'Etherscan',
  MINT_DATE: new Date(1639144800000), // December 10, 2021 21:00:00 UTC+7
  METRONION_UNIT_PRICE: 0.1,
};

export default env;
