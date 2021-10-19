import * as React from 'react';
import styled from 'styled-components/macro';
import { ColorConstants } from 'src/styles/StyleConstants';
import { Form } from 'react-bootstrap';
import { PrimaryButton, DisabledButton } from 'src/app/components/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAccount } from 'src/app/hooks';
import Decimal from 'decimal.js';

const UNIT_PRICE = 0.1;

interface IFormInput {
  amount: string;
}

export function MintBox() {
  let totalAmount = new Decimal(0);
  const { register, handleSubmit, watch, formState } = useForm<IFormInput>();
  const { isActivated } = useAccount();
  const watchedAmount = watch('amount', '');
  const onSubmit: SubmitHandler<IFormInput> = _ => {
    // console.log('total amount: ' + totalAmount.toString());
  };

  const amountIsValid =
    watchedAmount !== '' &&
    Number(watchedAmount) >= 1 &&
    Number(watchedAmount) <= 5;

  if (amountIsValid) {
    totalAmount = new Decimal(watchedAmount).mul(UNIT_PRICE);
  }

  return (
    <Wrapper>
      <Box>
        <Background />
        <div>
          <div className="title">Choose Quantity</div>
          <Form.Control
            className={`quantity-input ${
              amountIsValid || !formState.isDirty ? '' : 'quantity-input-error'
            }`}
            type="number"
            placeholder="1"
            min="1"
            max="5"
            {...register('amount', {
              required: true,
              min: 1,
              max: 5,
            })}
          />
          <div className="price">
            <div>Unit price: {UNIT_PRICE} ETH</div>
            {amountIsValid && (
              <div>You have to pay: {totalAmount.toString()} ETH</div>
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
            <PrimaryButton className="button" onClick={handleSubmit(onSubmit)}>
              Mint
            </PrimaryButton>
          )}
        </div>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const Box = styled.div`
  border: 2px solid rgba(98, 228, 127, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 30px 50px rgba(32, 138, 55, 0.28);
  border-radius: 2rem;
  padding: 4rem;
  max-width: 36rem;
  width: 100%;
  position: relative;

  .title {
    color: ${ColorConstants.WHITE};
    font-family: 'Acrom-Bold';
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    margin-bottom: 2.2rem;
  }

  .quantity-input {
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

  .quantity-input-error {
    border: 2px solid ${ColorConstants.ERROR};
  }

  .text-error {
    color: ${ColorConstants.ERROR};
  }

  .price {
    font-family: 'Acrom-Light';
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${ColorConstants.WHITE};
    margin-bottom: 3rem;
    min-height: 5rem;

    div {
      margin-bottom: 1rem;
    }
  }

  .button {
    font-size: 1.6rem;
    line-height: 1.9rem;
    box-shadow: none;

    &:hover {
      transform: none;
    }
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
