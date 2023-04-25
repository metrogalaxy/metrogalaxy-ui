export const INFURA_ID = '5e95a0d24c4548f5bc89ee9dc2930380';
export const TELEGRAM_URL = 'https://t.me/metrogalaxy';
export const TWITTER_URL = 'https://twitter.com/metrogalaxy_io';
export const MEDIUM_URL = 'https://medium.com/@metrogalaxy';
export const DISCORD_URL = 'https://discord.com/invite/vy4YsBWEDt';
export const ADMIN_EMAIL = 'captain@metrogalaxy.io';
export const TRAILER_VIDEO_URL_THE_WORLD =
  'https://www.youtube.com/watch?v=1nVdAdgVmy0';
export const TRAILER_VIDEO_URL = 'https://youtu.be/4Kjd1pGeiBE';
export const CAREER_URL = 'https://metrogalaxy.super.site/';

export const METRONION_PANEL_LIMITS_PER_PAGE = 6;
export const MAX_METRONION_COUNT = 10000;
export const METRONION_PRIVATE_CAP = 1;
export const METRONION_PUBLIC_CAP = 5;
export const UNKNOWN_METRONION_IMG_URL =
  'https://metrogalaxy-storage.s3.ap-southeast-1.amazonaws.com/unknown_metronion.png';

export enum CATEGORY {
  METRONION = 'metronion',
  ACCESSORIES = 'accessories',
}

export enum SORT_TYPE {
  lowest_id = 'Lowest ID',
  highest_id = 'Highest ID',
  lowest_price = 'Lowest Price',
  highest_price = 'Highest Price',
  recently_listed = 'Recently Listed',
  recently_sold = 'Recently Sold',
  recently_offered = 'Recently Offered',
}

export enum ACCESSORY_TYPE {
  ALL = 'all',
  HAIR = 'hair',
  FACE_ACCESSORIES = 'face',
  TOP = 'top',
  BOTTOM = 'bottom',
  SHOES = 'shoes',
  COAT = 'coat',
  NECKLACE = 'necklace',
  LEFT_HAND_EQUIPMENT = 'left_hand_equipment',
  RIGHT_HAND_EQUIPMENT = 'right_hand_equipment',
  VEHICLES = 'vehicles',
  WING = 'wing',
  TAIL = 'tail',
  PET = 'pet',
  SET = 'set',
}

export enum RARITY {
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
  EPIC = 'epic',
  LEGENDARY = 'legendary',
  MYTHICAL = 'mythical',
}

export enum GENDER {
  MALE = 'male',
  FEMALE = 'female',
}

export const STATS = [
  'creativity',
  'charisma',
  'resolve',
  'fitness',
  'intellect',
];

export enum ACTIVITIY_TYPE {
  MINT = 'mint',
  TRANSFER = 'transfer',
  LIST = 'list',
  OFFER = 'offer',
  OFFER_CANCELLED = 'offer_cancelled',
  OFFER_TAKEN = 'offer_taken',
  BUY = 'buy',
}

export const DEFAULT_SORT = 'lowest_id';

export const ChainIdToName: Record<number, string> = {
  43113: 'Avalanche Fuji Testnet',
  43114: 'Avalanche Mainnet',
};

const ChainIdToEtherscanBaseUrl: Record<number, string> = {
  43113: 'https://testnet.snowtrace.io/',
  43114: 'https://snowtrace.io/',
};

const ChainIdToCurrency: Record<number, string> = {
  43113: 'AVAX',
  43114: 'AVAX',
};

const ChainIdToRpcUrl: Record<number, string> = {
  43113: 'https://api.avax-test.network/ext/bc/C/rpc',
  43114: 'https://api.avax.network/ext/bc/C/rpc',
};

const ChainIdToCurrencyName: Record<number, string> = {
  43113: 'Avalanche',
  43114: 'Avalanche',
};

export function GetChainName(chainId: number): string {
  if (ChainIdToName[chainId]) {
    return ChainIdToName[chainId];
  }
  return '';
}

export function GetChainRpcUrl(chainId: number): string {
  if (ChainIdToRpcUrl[chainId]) {
    return ChainIdToRpcUrl[chainId];
  }
  return '';
}

export function GetExplorerUrl(chainId: number): string {
  if (ChainIdToEtherscanBaseUrl[chainId]) {
    return ChainIdToEtherscanBaseUrl[chainId];
  }
  return '';
}

export function GetExplorerAddressLink(
  chainId: number,
  account: string,
): string {
  if (ChainIdToEtherscanBaseUrl[chainId]) {
    return ChainIdToEtherscanBaseUrl[chainId] + `address/${account}`;
  }
  return '';
}

export function GetExplorerTransactionLink(chainId: number, txHash: string) {
  if (ChainIdToEtherscanBaseUrl[chainId]) {
    return ChainIdToEtherscanBaseUrl[chainId] + `tx/${txHash}`;
  }
  return '';
}

export function GetChainCurrency(chainId: number): string {
  if (ChainIdToCurrency[chainId]) {
    return ChainIdToCurrency[chainId];
  }
  return '';
}

export function GetChainCurrencyName(chainId: number): string {
  if (ChainIdToCurrencyName[chainId]) {
    return ChainIdToCurrencyName[chainId];
  }
  return '';
}
