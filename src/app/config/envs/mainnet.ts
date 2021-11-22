import { IEnv } from './interface';
import { INFURA_ID } from '../constants';

const env: IEnv = {
  CHAIN_ID: 1,
  CHAIN_NAME: 'ETH Mainnet',
  NODE_URL: `https://mainnet.infura.io/v3/${INFURA_ID}`,
  CHAIN_TOKEN: 'ETH',
  CHAIN_EXPLORER_NAME: 'Etherscan',
  PRIVATE_SALE_TIME: new Date(1637416800000), // Nov 20, 2021 21h UTC+7
  PUBLIC_SALE_TIME: new Date(1637589600000), // Nov 22, 2021 21h UTC+7
  END_SALE_TIME: new Date(1637762400000), // Nov 24, 2021 21h UTC+7
  METRONION_UNIT_PRICE: 0.1,
  METRONION_NFT_CONTRACT: '',
  METRONION_SALE_CONTRACT: '',
  CURRENT_METRONION_VERSION_ID: 0,
};

export default env;
