import * as React from 'react';
import styled from 'styled-components/macro';
import { Modal, Row, Col, Image } from 'react-bootstrap';
import { ColorConstants } from 'src/styles/StyleConstants';
import MetamaskImg from './assets/metamask.png';
import WalletConnectImg from './assets/wallet_connect.png';
import TickImg from './assets/tick.svg';
import { useEthers, useConfig } from '@quangkeu1995/dappcore';
import { AbstractConnector } from '@web3-react/abstract-connector';
import {
  NewWalletConnector,
  NewInjectedConnector,
} from 'src/app/service/Account/utils';
import MetamaskService from 'src/app/service/Account/MetamaskService';
import { GetChainName } from 'src/app/config/constants';
import { useDispatch } from 'react-redux';
import { useAccountSlice } from './slice';
import { useAccount } from 'src/app/hooks';
import { IconComponent } from 'src/app/components/CurrencyLogo';

interface IImportWalletModalProps {
  isShow: boolean;
  handleClose: () => any;
}

const metamaskService = new MetamaskService();

export function ImportWalletModal(props: IImportWalletModalProps) {
  const [error, setError] = React.useState<Error>();
  const [isConnecting, setIsConnecting] = React.useState(false);
  const { activate } = useEthers();
  const config = useConfig();
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

  const handleModalExit = () => {
    setError(undefined);
  };

  /**
   * Handle switching chain to configured chainID
   */
  const switchChain = async () => {
    if (currentChainId === Number(config.readOnlyChainId!)) {
      return;
    }
    setIsConnecting(true);
    const err = await metamaskService.switchChain(config.readOnlyChainId!);
    if (err) {
      setError(err);
    } else {
      if (config.readOnlyChainId) {
        dispatch(actions.setCurrentChainId(Number(config.readOnlyChainId!)));
      }
    }
    setIsConnecting(false);
  };

  /**
   * Connect metamask
   */
  const connectMetamask = async () => {
    await _activateConnector(NewInjectedConnector());
  };
  const connectWalletConnect = async () => {
    await _activateConnector(NewWalletConnector());
  };

  /**
   * Connect with specific connector
   * @param connector Should be one of web-react connector types
   * https://github.com/NoahZinsmeister/web3-react
   */
  const _activateConnector = async (connector: AbstractConnector) => {
    setIsConnecting(true);
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
    setIsConnecting(false);
  };

  const isCorrectChain = currentChainId === config.readOnlyChainId;
  const chainName = GetChainName(config.readOnlyChainId!);

  return (
    <ModalWrapper
      centered
      show={props.isShow}
      onHide={props.handleClose}
      onExit={handleModalExit}
    >
      <Modal.Header closeButton closeVariant="white">
        <div className="modal-header-text">Import Wallet</div>
      </Modal.Header>
      <Modal.Body>
        <div className="description">1. Choose Network</div>
        <Row>
          <Col className="col-layout" xs={12} md={6}>
            <div
              className={`wallet-option ${
                isConnecting ? 'wallet-option-disabled' : ''
              } ${isCorrectChain ? 'wallet-option-active' : ''}`}
              onClick={switchChain}
            >
              <IconComponent className="icon" />
              <div className="text">{chainName}</div>
            </div>
          </Col>
        </Row>
        {isCorrectChain && (
          <div>
            <div className="description">2. Choose Wallet</div>
            <Row>
              <Col className="col-layout" xs={12} md={6}>
                <div
                  className={`wallet-option ${
                    isConnecting || !isCorrectChain
                      ? 'wallet-option-disabled'
                      : ''
                  }`}
                  onClick={connectMetamask}
                >
                  <Image className="icon" src={MetamaskImg} />
                  <div className="text">Metamask</div>
                </div>
              </Col>
              <Col className="col-layout" xs={12} md={6}>
                <div
                  className={`wallet-option ${
                    isConnecting || !isCorrectChain
                      ? 'wallet-option-disabled'
                      : ''
                  }`}
                  onClick={connectWalletConnect}
                >
                  <Image className="icon" src={WalletConnectImg} />
                  <div className="text">Connect</div>
                </div>
              </Col>
            </Row>
          </div>
        )}

        {error && <div className="error">{error.message}</div>}
      </Modal.Body>
    </ModalWrapper>
  );
}

const ModalWrapper = styled(Modal)`
  .modal-content {
    background: #142433;
    border-radius: 2rem;
  }

  .modal-header {
    font-family: 'Acrom-Bold';
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: ${ColorConstants.WHITE};
    padding: 3rem;
    border: none;
  }

  .modal-header-text {
    width: 100%;
    text-align: center;
  }

  .modal-body {
    padding: 1rem 3rem 3rem;
  }

  .description {
    font-family: 'Acrom-Light';
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${ColorConstants.WHITE};
    margin-bottom: 2.4rem;
  }

  .error {
    font-family: 'Acrom-Light';
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${ColorConstants.ERROR};
  }

  .col-layout {
    display: flex;
    justify-content: center;
  }

  .wallet-option {
    width: 100%;
    max-width: 30rem;
    padding: 1.5rem 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
    opacity: 0.6;
    position: relative;

    display: flex;
    background: rgba(77, 89, 102, 0.6);
    border-radius: 2rem;

    font-family: 'Acrom';
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-transform: uppercase;
    color: ${ColorConstants.WHITE};

    &:hover {
      opacity: 1;
    }
  }

  .wallet-option-disabled {
    pointer-events: none;
  }

  .wallet-option-active {
    border: 2px solid #62e47f;
    opacity: 1;

    &:after {
      content: '';
      display: block;
      position: absolute;
      background-image: url(${TickImg});
      width: 2rem;
      height: 2rem;
      bottom: 0.6rem;
      left: 4.8rem;
    }
  }

  .icon {
    height: 4rem;
  }

  .text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
