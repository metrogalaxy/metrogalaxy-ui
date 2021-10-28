import { IEnv } from './interface';
import { INFURA_ID } from '../constants';

const env: IEnv = {
  CHAIN_ID: 3,
  CHAIN_NAME: 'ETH Ropsten',
  NODE_URL: `https://ropsten.infura.io/v3/${INFURA_ID}`,
  CHAIN_TOKEN: 'ETH',
  CHAIN_EXPLORER_NAME: 'Etherscan',
<<<<<<< HEAD
  MINT_DATE: new Date(0),
=======
  METRONION_UNIT_PRICE: 0.1,
>>>>>>> 159d5f2 (Add inventory page)
};

export default env;
