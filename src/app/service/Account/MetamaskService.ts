import { ethers } from 'ethers';
import BaseWalletService from './BaseWalletService';
import {
  GetChainCurrency,
  GetChainName,
  GetChainRpcUrl,
  GetExplorerUrl,
  GetChainCurrencyName,
} from 'src/app/config/constants';

declare const window: any;

const ErrorMetamaskNotInstalled = 'Metamask is not installed';

export default class MetamaskService extends BaseWalletService {
  constructor(props?: any) {
    super(props);
    this.ethereum = window.ethereum;
    if (this.ethereum) {
      this.provider = new ethers.providers.Web3Provider(this.ethereum, 'any');
    }
  }

  addNewChain = async (chainId: number): Promise<Error | undefined> => {
    if (this.ethereum) {
      try {
        return await this.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: ethers.utils.hexValue(chainId),
              rpcUrls: [GetChainRpcUrl(chainId)],
              chainName: GetChainName(chainId),
              blockExplorerUrls: [GetExplorerUrl(chainId)],
              nativeCurrency: {
                name: GetChainCurrencyName(chainId),
                symbol: GetChainCurrency(chainId),
                decimals: 18,
              },
            },
          ],
        });
      } catch (error: any) {
        return error;
      }
    }
    return new Error(ErrorMetamaskNotInstalled);
  };

  switchChain = async (chainId: number): Promise<Error | undefined> => {
    if (this.ethereum) {
      try {
        return await this.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: ethers.utils.hexValue(chainId) }],
        });
      } catch (error: any) {
        console.log(error);
        if (error?.code === 4902 || error?.code === -32603) {
          return await this.addNewChain(chainId);
        } else {
          return new Error(error!.message);
        }
      }
    }
    return new Error(ErrorMetamaskNotInstalled);
  };

  getCurrentChainId = async (): Promise<number> => {
    if (this.provider) {
      const network = await this.provider.getNetwork();
      return network.chainId;
    }

    if (this.ethereum) {
      return Number(this.ethereum.networkVersion);
    }
    return 0;
  };
}
