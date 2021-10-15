import { ethers } from 'ethers';
import BaseWalletService from './BaseWalletService';
declare const window: any;

export default class MetamaskService extends BaseWalletService {
  constructor(props?: any) {
    super(props);
    this.ethereum = window.ethereum;
    this.provider = new ethers.providers.Web3Provider(this.ethereum, 'any');
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

  addNewChain = async (chainId: number) => {
    await this.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: ethers.utils.hexValue(chainId),
        },
      ],
    });
  };

  switchChain = async (chainId: number): Promise<string> => {
    try {
      await this.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ethers.utils.hexValue(chainId) }],
      });
    } catch (error) {
      console.log(error);
      return error?.message;
      // if (error?.code === 4902) {
      //   await this.addNewChain(chainId);
      // }
    }
    return '';
  };

  getCurrentChainId = async (): Promise<number> => {
    if (this.provider) {
      const network = await this.provider.getNetwork();
      return network.chainId;
    }
    return Number(this.ethereum.networkVersion);
  };
}
