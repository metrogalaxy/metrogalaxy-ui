export interface IEnv {
  CHAIN_ID: number;
  CHAIN_NAME: string;
  NODE_URL: string;
  CHAIN_TOKEN: string;
  CHAIN_EXPLORER_NAME: string;
  PRIVATE_SALE_TIME: Date;
  PUBLIC_SALE_TIME: Date;
  END_SALE_TIME: Date;
  METRONION_UNIT_PRICE: number;
  METRONION_NFT_CONTRACT: string;
  METRONION_SALE_CONTRACT: string;
  CURRENT_METRONION_VERSION_ID: number;
}
