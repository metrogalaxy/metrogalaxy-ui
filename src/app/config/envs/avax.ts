import { IEnv } from './interface';

const env: IEnv = {
  CHAIN_ID: 43114,
  CHAIN_NAME: 'Avalanche Mainnet',
  NODE_URL: 'https://api.avax.network/ext/bc/C/rpc',
  CHAIN_TOKEN: 'AVAX',
  CHAIN_EXPLORER_NAME: 'Snowtrace',
  MINT_DATE: new Date(1639144800000), // December 10, 2021 21:00:00 UTC+7
  METRONION_UNIT_PRICE: 1,
};

export default env;
