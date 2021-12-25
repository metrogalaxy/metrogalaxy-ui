import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import ENV from 'src/app/config/env';

export function NewWalletConnector() {
  return new WalletConnectConnector({
    rpc: {
      [ENV.CHAIN_ID]: ENV.NODE_URL,
    },
    qrcode: true,
  });
}

export function NewInjectedConnector() {
  return new InjectedConnector({
    supportedChainIds: [ENV.CHAIN_ID],
  });
}
