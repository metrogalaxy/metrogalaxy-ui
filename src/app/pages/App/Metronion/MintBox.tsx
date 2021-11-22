import * as React from 'react';
import styled from 'styled-components/macro';
import { ColorConstants } from 'src/styles/StyleConstants';
import { Form } from 'react-bootstrap';
import { PrimaryButton, DisabledButton } from 'src/app/components/Button';
import { useForm } from 'react-hook-form';
import { useAccount } from 'src/app/hooks';
import Decimal from 'decimal.js';
import ENV from 'src/app/config/env';
import { buyMetronion } from 'src/app/service/web3';
import { useMutation } from 'react-query';
import { ethers } from 'ethers';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { toast } from 'react-toastify';
import { GetEtherscanUrl } from 'src/app/config/constants';
import { parseError } from 'src/utils/errors';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { Web3Provider } from '@ethersproject/providers';
import { Round } from './';
import { formatNumber } from 'src/utils/helpers';

interface IFormInput {
  amount: string;
}

interface BuyMetronionParams {
  versionId: number;
  amount: string;
  totalPaid: string;
}

interface MintboxProps {
  allocation: number;
  purchased: number;
  round: Round;
}

export function MintBox(props: MintboxProps) {
  const { account, library } = useEthers();
  const provider = library as Web3Provider;

  const ethBalance = useEtherBalance(account);
  let formattedBalance;
  if (ethBalance) {
    formattedBalance = ethers.utils.formatEther(ethBalance);
    formattedBalance = formatNumber(formattedBalance, 4);
  }

  const buyMetronionMutation = useMutation((params: BuyMetronionParams) => {
    if (account && provider) {
      const signer = provider.getSigner(account);
      return buyMetronion(
        signer,
        params.versionId,
        params.amount,
        params.totalPaid,
      );
    }

    return Promise.reject('web3 not connected');
  });

  let totalAmount = new Decimal(0);
  const unitPrice = ENV.METRONION_UNIT_PRICE;
  const { register, handleSubmit, watch, formState, setValue } =
    useForm<IFormInput>();
  const { isActivated } = useAccount();
  const watchedAmount = watch('amount', '');

  const setMaxBuyAmount = () => {
    setValue('amount', props.allocation.toString());
  };

  const onSubmit = async (data: IFormInput) => {
    const amount = new Decimal(data.amount);
    const totalPaid = amount.mul(unitPrice);

    const txHashPromise = buyMetronionMutation.mutateAsync({
      versionId: ENV.CURRENT_METRONION_VERSION_ID,
      amount: amount.toString(),
      totalPaid: totalPaid.toString(),
    });

    toast.dismiss();
    toast.promise(
      txHashPromise,
      {
        pending: {
          render() {
            return 'Minting...';
          },
        },
        success: {
          render({ data }) {
            const txHashUrl = GetEtherscanUrl(ENV.CHAIN_ID) + '/tx/' + data;
            return (
              <div>
                Mint successfully, tx hash:{' '}
                <a href={txHashUrl} target="_blank" rel="noreferrer">
                  {data}
                </a>
              </div>
            );
          },
        },
        error: {
          render({ data }) {
            const err = parseError(data);
            const errMsg = err.data ? err.data.message : err.message;
            return errMsg;
          },
        },
      },
      {
        position: 'top-right',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );
  };

  const amountIsValid =
    watchedAmount !== '' &&
    Number(watchedAmount) >= 1 &&
    Number(watchedAmount) <= 5;

  if (amountIsValid) {
    totalAmount = new Decimal(watchedAmount).mul(unitPrice);
  }

  return (
    <Wrapper>
      <Box>
        <Background />
        <div>
          <div className="mint-box--title">{props.round} Is Started</div>
          <div className="mint-box--allocation">
            <div className="mint-box--allocation-title">Your allocation</div>
            <div className="mint-box--allocation-number">
              {props.allocation}{' '}
              {props.allocation <= 1 ? 'Metronion' : 'Metronions'}
            </div>
          </div>
          <div className="mint-box--allocation">
            <div className="mint-box--allocation-title">Purchased</div>
            <div className="mint-box--allocation-number">
              {props.purchased}{' '}
              {props.purchased <= 1 ? 'Metronion' : 'Metronions'}
            </div>
          </div>
          <div className="mint-box--allocation">
            <div className="mint-box--allocation-title">Unit Price</div>
            <div className="mint-box--allocation-number">
              {unitPrice} {ENV.CHAIN_TOKEN}
            </div>
          </div>
          <div className="mint-box--input-container">
            <Form.Control
              className={`mint-box--input ${
                amountIsValid || !formState.isDirty
                  ? ''
                  : 'mint-box--input-error'
              }`}
              type="number"
              placeholder="Input your allocation"
              min="1"
              max="5"
              {...register('amount', {
                required: true,
                min: 1,
                max: 5,
              })}
            />
            <div className="mint-box--input-balance">
              Balance: {formattedBalance} {ENV.CHAIN_TOKEN}
            </div>
            <div className="mint-box--input-max" onClick={setMaxBuyAmount}>
              MAX
            </div>
          </div>

          <div className="price">
            {amountIsValid && (
              <div>
                You have to pay: {totalAmount.toString()} {ENV.CHAIN_TOKEN}
              </div>
            )}
            {!amountIsValid && formState.isDirty && (
              <div className="text-error">Amount should be in range 1 to 5</div>
            )}
          </div>
          {!isActivated && (
            <DisabledButton className="button">
              Please Connect Wallet
            </DisabledButton>
          )}
          {isActivated && (
            <div>
              <PrimaryButton
                className="button"
                onClick={handleSubmit(onSubmit)}
                disabled={buyMetronionMutation.isLoading}
              >
                {buyMetronionMutation.isLoading ? 'Minting...' : 'Mint'}
              </PrimaryButton>
            </div>
          )}
        </div>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;

  ${mediaQuery.lessThan(ScreenSize.LG)`
    display: flex;
    justify-content: center;
  `};

  ${mediaQuery.greaterThan(ScreenSize.LG)`
    display: flex;
    justify-content: flex-end;
  `}
`;

const Box = styled.div`
  border: 2px solid rgba(98, 228, 127, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 30px 50px rgba(32, 138, 55, 0.28);
  border-radius: 2rem;
  padding: 3.6rem;
  width: 100%;
  max-width: 36rem;
  position: relative;

  .mint-box--title {
    color: ${ColorConstants.WHITE};
    font-family: 'Acrom-Bold';
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    margin-bottom: 2.2rem;
  }

  .mint-box--allocation-title {
    color: rgba(247, 255, 248, 0.75);
  }

  .mint-box--allocation-number {
    color: ${ColorConstants.MAIN_GREEN};
  }

  .mint-box--allocation {
    font-family: 'Acrom';
    font-style: normal;
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    margin-bottom: 1.4rem;
    color: ${ColorConstants.WHITE_SECONDARY};
    display: flex;
    justify-content: space-between;
  }

  .mint-box--input {
    background: rgba(5, 15, 26, 0.8);
    border-radius: 10px;
    border: 2px solid transparent;
    padding: 1.8rem;
    font-family: 'Acrom-Light';
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${ColorConstants.WHITE};
    box-shadow: none;
    margin-bottom: 1.8rem;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  .mint-box--input-container {
    margin-top: 5rem;
    position: relative;
  }

  .mint-box--input-error {
    border: 2px solid ${ColorConstants.ERROR};
  }

  .mint-box--input-balance {
    position: absolute;
    left: 0;
    top: -2.6rem;
    font-family: 'Acrom-Light';
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${ColorConstants.WHITE};
    opacity: 0.8;
  }

  .mint-box--input-max {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: fit-content;
    height: auto;
    text-transform: uppercase;
    font-family: 'Acrom';
    font-size: 1.2rem;
    color: ${ColorConstants.WHITE_SECONDARY};
    opacity: 0.5;
    cursor: pointer;
  }

  .text-error {
    color: ${ColorConstants.ERROR};
  }

  .price {
    font-family: 'Acrom-Light';
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${ColorConstants.WHITE};
    opacity: 0.8;
    margin-bottom: 3rem;
    min-height: 5rem;

    div {
      margin-bottom: 1rem;
    }
  }

  .button {
    width: 100%;
    font-size: 1.6rem;
    line-height: 1.9rem;
    box-shadow: none;
    position: relative;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: #050f1a;
  opacity: 0.6;
  border-radius: 2rem;
`;
