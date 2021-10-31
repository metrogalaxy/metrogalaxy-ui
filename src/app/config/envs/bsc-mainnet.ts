import { IEnv } from './interface';

const env: IEnv = {
  CHAIN_ID: 56,
  CHAIN_NAME: 'BSC Mainnet',
  NODE_URL: `https://bsc-dataseed1.binance.org/`,
  CHAIN_TOKEN: 'BNB',
  CHAIN_EXPLORER_NAME: 'Bscscan',
  MINT_DATE: new Date(1639144800000), // December 10, 2021 21:00:00 UTC+7
};

export default env;
