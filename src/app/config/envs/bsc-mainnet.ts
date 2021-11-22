import { IEnv } from './interface';

const env: IEnv = {
  CHAIN_ID: 56,
  CHAIN_NAME: 'BSC Mainnet',
  NODE_URL: `https://bsc-dataseed1.binance.org/`,
  CHAIN_TOKEN: 'BNB',
  CHAIN_EXPLORER_NAME: 'Bscscan',
  PRIVATE_SALE_TIME: new Date(1637416800000), // Nov 20, 2021 21h UTC+7
  PUBLIC_SALE_TIME: new Date(1637589600000), // Nov 22, 2021 21h UTC+7
  END_SALE_TIME: new Date(1637762400000), // Nov 24, 2021 21h UTC+7
  METRONION_UNIT_PRICE: 0.5,
  METRONION_NFT_CONTRACT: '',
  METRONION_SALE_CONTRACT: '',
  CURRENT_METRONION_VERSION_ID: 0,
};

export default env;
