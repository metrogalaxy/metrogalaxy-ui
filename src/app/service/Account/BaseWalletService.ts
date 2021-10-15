import { ethers } from 'ethers';

export type ChainIDHandler = (chainId: number) => void;
export type AccountHandler = (account: string) => void;

export default class BaseWalletService {
  ethereum: any;
  networkId: number;
  provider: any;
  address: string | null;

  constructor(props: any) {
    this.ethereum = null;
    this.networkId = props?.networkId;
    this.provider = props?.provider;
    this.address = null;
  }

  connect = async (onEthereumError: any = null, onNetworkError: any = null) => {
    if (!this.ethereum) {
      this._returnEthereumError(
        onEthereumError,
        'Error: Something went wrong connecting with your Metamask',
      );
      return null;
    }
    const currentNetworkId = this._getCurrentNetworkId();

    if (currentNetworkId === 0) {
      this._returnEthereumError(
        onEthereumError,
        'Error: Cannot find current network ID',
      );
      return null;
    } else if (currentNetworkId !== this.networkId) {
      if (typeof onNetworkError === 'function')
        onNetworkError(currentNetworkId);
      return null;
    }

    this.address = await this._requestAccounts();
    if (!this.address) {
      this._returnEthereumError(
        onEthereumError,
        'Error: Cannot find any available addresses',
      );
      return null;
    }

    return this.address;
  };

  /**
   * Subscribe chain ID changed
   */
  subscribeChainChanged = (chainIdHandler: ChainIDHandler) => {
    if (this.ethereum) {
      this.ethereum.on('chainChanged', async (networkIdHex: string) => {
        const networkId = ethers.BigNumber.from(networkIdHex).toNumber();
        chainIdHandler(networkId);
      });
    }
  };

  /**
   * Subscribe account changed
   */
  subscribeAccountChanged = (accountHandler: AccountHandler) => {
    if (this.ethereum) {
      this.ethereum.on('accountsChanged', async (accounts: any) => {
        if (accounts.length === 0) {
          return;
        }
        const account = accounts[0];
        accountHandler(account);
      });
    }
  };

  /**
   * Connect to account
   */
  _requestAccounts = async (): Promise<string> => {
    let accounts: string[] = [];
    if (this.ethereum) {
      try {
        accounts = await this.ethereum.request({
          method: 'eth_requestAccounts ',
        });
      } catch (error) {
        console.log(error);
        return '';
      }
    }

    const legacyAccount = accounts[0];
    return legacyAccount;
  };

  /**
   * Get current network ID
   * @returns networkId
   */
  _getCurrentNetworkId = (): number => {
    if (this.ethereum) {
      return Number(this.ethereum.networkVersion);
    }
    return 0;
  };

  _returnEthereumError = (onEthereumError: any, message: string) => {
    if (typeof onEthereumError === 'function') onEthereumError(message);
  };
}
