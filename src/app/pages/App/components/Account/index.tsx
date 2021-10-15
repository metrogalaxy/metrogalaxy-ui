import * as React from 'react';
import styled from 'styled-components';
import { ConnectWalletButton } from './Button';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { ImportWalletModal } from './Modal';
import { AccountInfo } from './AccountInfo';

export function Account() {
  const { account, chainId } = useEthers();
  const [isShowModal, setIsShowModal] = React.useState(false);

  const etherBalance = useEtherBalance(account);
  console.log('chainId: ' + chainId);
  if (account) {
    console.log('account connected: ' + account);
    if (etherBalance) {
      console.log('account ETH balance: ' + formatEther(etherBalance));
    }
  }

  const loadWeb3Modal = () => {
    setIsShowModal(true);
  };
  let modalButtons = (
    <ConnectWalletButton key="connect-wallet" onClick={loadWeb3Modal}>
      Connect Wallet
    </ConnectWalletButton>
  );

  if (account) {
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
