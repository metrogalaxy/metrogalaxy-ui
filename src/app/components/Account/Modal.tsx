import * as React from 'react';
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Center,
  Grid,
  Image,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { useAccountSlice } from './slice';
import { useEthers } from '@quangkeu1995/dappcore';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { useAccount } from 'src/app/hooks';
import MetamaskService from 'src/app/service/Account/MetamaskService';
import {
  NewWalletConnector,
  NewInjectedConnector,
} from 'src/app/service/Account/utils';
import { GetChainName } from 'src/app/config/constants';
import { IconComponent } from 'src/app/components/CurrencyLogo';
import MetamaskImg from 'src/app/assets/icon/metamask.svg';
import WalletConnectImg from 'src/app/assets/icon/walletconnect.svg';
import { useButtonSize } from 'src/app/hooks/useSize';
import ENV from 'src/app/config/env';

interface IImportWalletModalProps {
  isShow: boolean;
  handleClose: () => any;
}

const metamaskService = new MetamaskService();

export function ImportWalletModal(props: IImportWalletModalProps) {
  const [error, setError] = React.useState<Error>();
  const [isSwitchChain, setIsSwitchChain] = React.useState(false);
  const [isConnectWallet, setIsConnectWallet] = React.useState(false);
  const { activate } = useEthers();
  const dispatch = useDispatch();
  const { actions } = useAccountSlice();
  const { currentChainId, logout } = useAccount();

  // Subscribe chain changed
  React.useEffect(() => {
    const chainIDHander = () => {
      setError(undefined);
    };
    metamaskService.subscribeChainChanged(chainIDHander);
  }, []);

  const onModalClose = () => {
    setError(undefined);
    props.handleClose();
  };

  /**
   * Handle switching chain to configured chainID
   */
  const switchChain = async () => {
    if (currentChainId === Number(ENV.CHAIN_ID)) {
      return;
    }
    setIsSwitchChain(true);
    const err = await metamaskService.switchChain(ENV.CHAIN_ID);
    if (err) {
      console.log(err);
      setError(err);
    } else {
      if (ENV.CHAIN_ID) {
        dispatch(actions.setCurrentChainId(Number(ENV.CHAIN_ID)));
      }
    }
    setIsSwitchChain(false);
  };

  /**
   * Connect metamask
   */
  const connectMetamask = async () => {
    await _activateConnector(NewInjectedConnector());
  };
  /**
   * Connect WalletConnect
   */
  const connectWalletConnect = async () => {
    await _activateConnector(NewWalletConnector());
  };

  /**
   * Connect with specific connector
   * @param connector Should be one of web-react connector types
   * https://github.com/NoahZinsmeister/web3-react
   */
  const _activateConnector = async (connector: AbstractConnector) => {
    setIsConnectWallet(true);
    let isError = false;

    try {
      await activate(connector, undefined, true);
    } catch (error: any) {
      setError(new Error(error?.message));
      await logout();
      isError = true;
    }

    if (!isError) {
      dispatch(actions.setIsConnected(true));
      props.handleClose();
    }
    setIsConnectWallet(false);
  };

  const isCorrectChain = currentChainId === ENV.CHAIN_ID;
  const chainName = GetChainName(ENV.CHAIN_ID);

  const buttonSize = useButtonSize();

  return (
    <Modal
      isOpen={props.isShow}
      onClose={onModalClose}
      isCentered
      motionPreset="slideInBottom"
      variant="dark"
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Center>Import Wallet</Center>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mt={4}>
            <Text>1. Choose Network</Text>
            <Button
              my={4}
              variant={isCorrectChain ? 'solid' : 'outline'}
              size={buttonSize}
              leftIcon={
                <IconComponent
                  width={{ base: 6, sm: 8 }}
                  height={{ base: 6, sm: 8 }}
                />
              }
              rightIcon={isCorrectChain ? <CheckIcon /> : undefined}
              onClick={switchChain}
              isLoading={isSwitchChain}
              loadingText="Connecting"
            >
              {chainName}
            </Button>
          </Box>
          {isCorrectChain && (
            <Box mt={4}>
              <Text>2. Choose Wallet</Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Button
                  my={4}
                  variant="outline"
                  size={buttonSize}
                  leftIcon={
                    <Image
                      src={MetamaskImg}
                      width={{ base: 6, md: 8 }}
                      height={{ base: 6, sm: 8 }}
                    />
                  }
                  isLoading={isConnectWallet}
                  loadingText="Connecting"
                  onClick={connectMetamask}
                >
                  Metamask
                </Button>
                <Button
                  my={4}
                  variant="outline"
                  size={buttonSize}
                  leftIcon={
                    <Image
                      src={WalletConnectImg}
                      width={{ base: 6, md: 8 }}
                      height={{ base: 6, sm: 8 }}
                    />
                  }
                  isLoading={isConnectWallet}
                  loadingText="Connecting"
                  onClick={connectWalletConnect}
                >
                  Connect
                </Button>
              </Grid>
            </Box>
          )}
          {error && (
            <Text textStyle="error" mt={2} mb={4}>
              {error.message}
            </Text>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
