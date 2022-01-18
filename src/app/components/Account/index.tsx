import * as React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useAccountSlice } from './slice';
import { useDispatch } from 'react-redux';
import { useAccount } from 'src/app/hooks';
import MetamaskService from 'src/app/service/Account/MetamaskService';
import { ImportWalletModal } from './Modal';
import { AccountInfo } from './AccountInfo';
import { useButtonSize } from 'src/app/hooks/useSize';
import { useEthers } from '@quangkeu1995/dappcore';

import { useSelector } from 'react-redux';
import { selectAccount } from 'src/app/components/Account/slice/selectors';

const metamaskService = new MetamaskService();

export function Account() {
  const [isShowModal, setIsShowModal] = React.useState(false);
  const dispatch = useDispatch();
  const { actions } = useAccountSlice();
  const { isActivated } = useAccount();
  const { account } = useEthers();

  const accountState = useSelector(selectAccount);

  // React.useEffect(() => {
  //   alert(account);
  // }, []);

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
  // React.useEffect(() => {
  //   const accountHandler = (account: string) => {
  //     console.log('Account changed: ' + account);
  //   };
  //   metamaskService.subscribeAccountChanged(accountHandler);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const loadWeb3Modal = () => {
    setIsShowModal(true);
  };
  let modalButtons = (
    <Button variant="outline" onClick={loadWeb3Modal} size={useButtonSize()}>
      Connect Wallet
    </Button>
  );
  if (isActivated) {
    modalButtons = <AccountInfo />;
  }

  return (
    <Box>
      {modalButtons}
      <ImportWalletModal
        isShow={isShowModal}
        handleClose={() => setIsShowModal(false)}
      />
    </Box>
  );
}
