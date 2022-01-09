import axios from 'axios';
import { useQuery } from 'react-query';

type IGetTokenUSDPriceResponse = {
  [key: string]: {
    usd: number;
  };
};

export async function getTokenUSDPrice(tokenSymbol: string): Promise<number> {
  const tokenId = getTokenId(tokenSymbol);
  const endpoint = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`;

  try {
    const { data } = await axios.get(endpoint);
    const response = data as IGetTokenUSDPriceResponse;
    return response[tokenId].usd;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
}

export function useGetTokenUSDPrice(tokenSymbol: string, options?: any) {
  return useQuery<number, Error>(
    ['token-price', tokenSymbol],
    async (): Promise<number> => {
      return getTokenUSDPrice(tokenSymbol);
    },
    options,
  );
}

function getTokenId(tokenSymbol: string): string {
  switch (tokenSymbol) {
    case 'AVAX':
      return 'avalanche-2';
    default:
      return '';
  }
}
