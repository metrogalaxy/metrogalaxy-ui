import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import env from 'src/app/config';

export function NewWalletConnector() {
  return new WalletConnectConnector({
    rpc: {
      [env.chainId]: env.nodeUrl,
    },
    qrcode: true,
  });
}

export function NewInjectedConnector() {
  return new InjectedConnector({
    supportedChainIds: [env.chainId],
  });
}
