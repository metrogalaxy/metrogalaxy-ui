import * as React from 'react';
import styled from 'styled-components/macro';
import { ConnectWalletButton } from './Button';
import { ImportWalletModal } from './Modal';
import { AccountInfo } from './AccountInfo';
import { useAccount } from 'src/app/hooks';
import { useAccountSlice } from './slice';
import { useDispatch } from 'react-redux';
import { useEthers } from '@usedapp/core';

import MetamaskService from 'src/app/service/Account/MetamaskService';

const metamaskService = new MetamaskService();

export function Account() {
  const [isShowModal, setIsShowModal] = React.useState(false);
  const { isActivated, account } = useAccount();
  const dispatch = useDispatch();
  const { actions } = useAccountSlice();
  const { account: accountUseEthers } = useEthers();

  // get initial chain id
  React.useEffect(() => {
    const fetchChainId = async () => {
      const chainId = await metamaskService.getCurrentChainId();
      dispatch(actions.setCurrentChainId(chainId));
    };

    fetchChainId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Subscribe chain changed
  React.useEffect(() => {
    const chainIDHander = (chainId: number) => {
      console.log('Chain changed: ' + chainId);
      dispatch(actions.setCurrentChainId(chainId));
    };
    metamaskService.subscribeChainChanged(chainIDHander);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Subscribe account changed, only subscribe to account which connected
  React.useEffect(() => {
    const accountHandler = (account: string) => {
      console.log('Account changed: ' + account);
      dispatch(actions.setAccount(account));
    };
    metamaskService.subscribeAccountChanged(accountHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if metamask account is disconnected, then set state for account to null
  React.useEffect(() => {
    if (account && !accountUseEthers) {
      dispatch(actions.setAccount(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountUseEthers]);

  const loadWeb3Modal = () => {
    setIsShowModal(true);
  };
  let modalButtons = (
    <ConnectWalletButton key="connect-wallet" onClick={loadWeb3Modal}>
      Connect Wallet
    </ConnectWalletButton>
  );

  if (isActivated) {
    modalButtons = <AccountInfo />;
  }

  return (
    <Wrapper>
      {modalButtons}
      <ImportWalletModal
        isShow={isShowModal}
        handleClose={() => setIsShowModal(false)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
