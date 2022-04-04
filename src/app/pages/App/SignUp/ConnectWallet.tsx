import * as React from 'react';
import { Box, Button, Text, Flex } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useAccountSlice } from 'src/app/components/Account/slice';
import { selectAccount } from 'src/app/components/Account/slice/selectors';
import { useAccount } from 'src/app/hooks';
import { ImportWalletModal } from 'src/app/components/Account/Modal';
import { useEthers, shortenAddress } from '@quangkeu1995/dappcore';
import MetamaskService from 'src/app/service/Account/MetamaskService';

const metamaskService = new MetamaskService();

export function ConnectWallet() {
  const dispatch = useDispatch();
  const { actions } = useAccountSlice();
  const { isActivated, logout } = useAccount();
  const { account } = useEthers();
  const formattedAddress = account ? shortenAddress(account!) : '';

  const accountState = useSelector(selectAccount);

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

  const loadWeb3Modal = () => {
    dispatch(actions.setIsShowModal(true));
  };

  let modalButtons = (
    <Button variant="outline" onClick={loadWeb3Modal} size="sm">
      Connect Wallet
    </Button>
  );
  if (isActivated) {
    modalButtons = (
      <Flex justifyContent="space-between" alignItems="center">
        <Text textStyle="app-normal" color="white">
          {formattedAddress}
        </Text>
        <Button variant="outline" size="sm" onClick={logout}>
          Disconnect
        </Button>
      </Flex>
    );
  }
  return (
    <Box>
      {modalButtons}
      <ImportWalletModal
        isShow={accountState.isShowModal}
        handleClose={() => dispatch(actions.setIsShowModal(false))}
      />
    </Box>
  );
}
