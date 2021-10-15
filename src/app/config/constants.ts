export const INFURA_ID = '5e95a0d24c4548f5bc89ee9dc2930380';

export const ChainIdToName: Record<number, string> = {
  1: 'ETH Mainnet',
  3: 'ETH Ropsten',
  56: 'BSC Mainnet',
};

const ChainIdToEtherscanBaseUrl: Record<number, string> = {
  1: 'https://etherscan.com/',
  2: 'https://ropsten.etherscan.com/',
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
