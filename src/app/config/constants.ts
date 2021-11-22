export const INFURA_ID = '5e95a0d24c4548f5bc89ee9dc2930380';
export const TELEGRAM_URL = 'https://t.me/joinchat/6iQZttQ_1ZYyN2U1';
export const TWITTER_URL = 'https://twitter.com/metroverse_io';
export const ADMIN_EMAIL = 'captain@metroverse.io';

export const METRONION_PANEL_LIMITS_PER_PAGE = 6;
export const MAX_METRONION_COUNT = 10000;
export const METRONION_PRIVATE_CAP = 1;
export const METRONION_PUBLIC_CAP = 5;

export const ChainIdToName: Record<number, string> = {
  1: 'ETH Mainnet',
  3: 'ETH Ropsten',
  56: 'BSC Mainnet',
  97: 'BSC Testnet',
  31337: 'Hardhat',
};

const ChainIdToEtherscanBaseUrl: Record<number, string> = {
  1: 'https://etherscan.com/',
  2: 'https://ropsten.etherscan.com/',
  56: 'https://bscscan.com/',
  97: 'https://testnet.bscscan.com/',
  31337: 'https://testnet.bscscan.com/',
};

export function GetChainName(chainId: number): string {
  if (ChainIdToName[chainId]) {
    return ChainIdToName[chainId];
  }
  return '';
}

export function GetEtherscanUrl(chainId: number): string {
  if (ChainIdToEtherscanBaseUrl[chainId]) {
    return ChainIdToEtherscanBaseUrl[chainId];
  }
  return 'https://etherscan.com/';
}

export enum AttributeType {
  Body = 'body',
  Hair = 'hair',
  Face = 'face',
  Top = 'top',
  Bottom = 'bottom',
  Accessories = 'accessories',
  Equipment = 'equipment',
}
