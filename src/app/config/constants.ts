export const INFURA_ID = '5e95a0d24c4548f5bc89ee9dc2930380';
export const TELEGRAM_URL = 'https://t.me/joinchat/6iQZttQ_1ZYyN2U1';
export const TWITTER_URL = 'https://twitter.com/metrogalaxy_io';
export const MEDIUM_URL = 'https://medium.com/@metrogalaxy';
export const DISCORD_URL = 'https://discord.gg/HyEEZAgJ';
export const ADMIN_EMAIL = 'captain@metrogalaxy.io';

export const METRONION_PANEL_LIMITS_PER_PAGE = 6;
export const MAX_METRONION_COUNT = 10000;

export const ChainIdToName: Record<number, string> = {
  1: 'ETH Mainnet',
  3: 'ETH Ropsten',
  56: 'BSC Mainnet',
};

const ChainIdToEtherscanBaseUrl: Record<number, string> = {
  1: 'https://etherscan.com/',
  2: 'https://ropsten.etherscan.com/',
  56: 'https://bscscan.com/',
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
