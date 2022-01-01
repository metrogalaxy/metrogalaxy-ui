import { IEnv } from './interface';

const env: IEnv = {
  CHAIN_ID: 43113,
  CHAIN_NAME: 'Avalanche Fuji Testnet',
  NODE_URL: 'https://api.avax-test.network/ext/bc/C/rpc',
  CHAIN_TOKEN: 'AVAX',
  CHAIN_EXPLORER_NAME: 'Snowtrace',
  PRIVATE_SALE_TIME: new Date(0),
  PUBLIC_SALE_TIME: new Date(1),
  END_SALE_TIME: new Date(1643587200 * 1000),
  METRONION_UNIT_PRICE: 1,
  CURRENT_METRONION_VERSION_ID: 0,
};

export default env;
