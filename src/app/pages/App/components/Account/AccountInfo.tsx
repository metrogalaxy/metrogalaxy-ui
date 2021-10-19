import * as React from 'react';
import styled from 'styled-components/macro';
import { ethers } from 'ethers';
import { useConfig, useEtherBalance } from '@usedapp/core';
import { formatAddress, formatNumber } from 'src/utils/helpers';
import { ColorConstants } from 'src/styles/StyleConstants';
import useOnClickOutside from 'use-onclickoutside';
import { GetEtherscanUrl } from 'src/app/config/constants';
import { useAccount } from 'src/app/hooks';

export function AccountInfo() {
  const { account, logout } = useAccount();
  const config = useConfig();
  const [isOpenDropwdown, setOpenDropdown] = React.useState(false);
  const wrapperRef = React.useRef(null);

  const ethBalance = useEtherBalance(account);
  const formattedAddress = formatAddress(account!, 4, -3);
  let formattedBalance;
  if (ethBalance) {
    formattedBalance = ethers.utils.formatEther(ethBalance);
    formattedBalance = formatNumber(formattedBalance, 4);
  }

  const openDropdown = () => {
    setOpenDropdown(true);
  };

  useOnClickOutside(wrapperRef, () => setOpenDropdown(false));

  const disconnect = async () => {
    await logout();
  };

  const etherscanBaseUrl = GetEtherscanUrl(config.readOnlyChainId!);
  const etherscanUrl = `${etherscanBaseUrl}/address/${account}`;

  return (
    <Wrapper ref={wrapperRef}>
      <div className="account-wrapper" onClick={openDropdown}>
        {formattedBalance && (
          <React.Fragment>
            <div className="balance">{formattedBalance} ETH</div>
            <div className="account">{formattedAddress}</div>
          </React.Fragment>
        )}
      </div>
      {isOpenDropwdown && (
        <div className="dropdown">
          <div className="dropdown--item">
            <a href={etherscanUrl} target="_blank" rel="noreferrer">
              View on Etherscan
            </a>
          </div>
          <div className="dropdown--item" onClick={disconnect}>
            Disconnect
          </div>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Acrom';
  font-size: 1.6rem;
  color: ${ColorConstants.WHITE};
  width: 100%;
  height: 100%;
  min-width: 29rem;
  max-width: 32rem;
  position: relative;

  .account-wrapper {
    background: rgba(5, 15, 26, 0.8);
    border: 2px solid #1e7054;
    border-radius: 5rem;

    position: relative;
    padding: 1.2rem 2.4rem;
    cursor: pointer;
  }

  .balance {
    padding-right: 12rem;
  }

  .account {
    background: rgba(98, 228, 127, 0.1);
    border: 2px solid #1e7054;
    border-radius: 5rem;
    padding: 1.2rem 2.4rem;
    position: absolute;
    top: -2px;
    right: -2px;
  }

  .dropdown {
    width: 23rem;
    background: rgba(5, 15, 26, 0.8);
    border: 2px solid #1e7054;
    border-radius: 1rem;
    padding: 1.2rem 2.4rem;
    position: absolute;
    top: calc(100% + 16px);
    text-align: center;
    left: 50%;
    transform: translate(-50%, 0);

    &:after {
      position: absolute;
      top: -5px;
      left: 50%;
      content: '';
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 10px solid rgba(5, 15, 26, 1);
      transform: translate(-50%, -50%);
    }

    &:before {
      position: absolute;
      top: -7px;
      left: 50%;
      content: '';
      width: 0;
      height: 0;
      border-left: 17px solid transparent;
      border-right: 17px solid transparent;
      border-bottom: 12px solid #1e7054;
      transform: translate(-50%, -50%);
    }
  }

  .dropdown--item {
    margin: 1rem 0;
    cursor: pointer;

    a {
      color: ${ColorConstants.WHITE};
      text-decoration: none;
      &:hover {
        color: ${ColorConstants.MAIN_GREEN};
      }
    }

    &:hover {
      color: ${ColorConstants.MAIN_GREEN};
    }
  }
`;
