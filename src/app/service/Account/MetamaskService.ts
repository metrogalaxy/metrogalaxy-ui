import { ethers } from 'ethers';
import BaseWalletService from './BaseWalletService';
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

  // addNewChain = async (chanId: ChainID) => {
  //   await this.ethereum.request({
  //     method: 'wallet_addEthereumChain',
  //     params: [
  //       {
  //         chainId: Web3.utils.numberToHex(chanId),
  //         rpcUrls: [NODE[chanId].url],
  //         chainName: NODE[chanId].name,
  //         blockExplorerUrls: [ETHERSCAN[chanId]],
  //         nativeCurrency: {
  //           name: NODE[chanId].name,
  //           symbol: NODE[chanId].currencySymbol,
  //           decimals: 18,
  //         },
  //       },
  //     ],
  //   });
  // };

  addNewChain = async (chainId: number): Promise<Error> => {
    if (this.ethereum) {
      await this.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: ethers.utils.hexValue(chainId),
          },
        ],
      });
    }
    return new Error(ErrorMetamaskNotInstalled);
  };

  switchChain = async (chainId: number): Promise<Error> => {
    if (this.ethereum) {
      try {
        await this.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: ethers.utils.hexValue(chainId) }],
        });
      } catch (error: any) {
        console.log(error);
        if (error?.code === 4902) {
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
