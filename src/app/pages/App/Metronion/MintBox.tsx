import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useAccount } from 'src/app/hooks';
import Decimal from 'decimal.js';

import {
  Box,
  Text,
  Grid,
  Flex,
  Button,
  FormControl,
  Input,
  Link,
} from '@chakra-ui/react';
import { Web3Provider } from '@ethersproject/providers';
import { useEthers, useEtherBalance } from '@quangkeu1995/dappcore';
import { ethers, BigNumber } from 'ethers';
import { toast } from 'react-toastify';
import { Round } from './';
import { formatNumber } from 'src/utils/helpers';
import { parseError } from 'src/utils/errors';
import env from 'src/app/config';
import { GetExplorerTransactionLink } from 'src/app/config/constants';
import { useBuyMetronion } from 'src/app/service/MetronionSale';
import { useButtonSize } from 'src/app/hooks';
import { ITransactionReceipt } from 'src/app/service/types';

const PRIVATE_CAP = env.metronionSale.privateCap;
const PUBLIC_CAP = env.metronionSale.publicCap;

interface IFormInput {
  amount: number;
}

interface MintboxProps {
  allocation: number;
  purchased: number;
  round: Round;
  updateUserRecord: () => void;
}

export function MintBox(props: MintboxProps) {
  const { account, library, chainId } = useEthers();
  const provider = library as Web3Provider;
  const { isActivated } = useAccount();

  const isCorrectChain = chainId === env.chainId;

  const ethBalance = useEtherBalance(account);
  let formattedBalance = '0';
  if (isCorrectChain && ethBalance) {
    formattedBalance = ethers.utils.formatEther(ethBalance);
    formattedBalance = formatNumber(formattedBalance, 4);
  }

  const allocation = isActivated ? props.allocation : 0;
  const purchased = isActivated ? props.purchased : 0;

  const buyMetronionMutation = useBuyMetronion(provider, account);

  let totalAmount = new Decimal(0);
  const unitPrice = env.metronionSale.metronionUnitPrice;
  const { register, handleSubmit, watch, formState, setValue } =
    useForm<IFormInput>();
  const watchedAmount = watch('amount', 0);

  const setMaxBuyAmount = () => {
    const maxBuyAmount = allocation - purchased;
    setValue('amount', maxBuyAmount);
  };

  const onSubmit = async (data: IFormInput) => {
    const amount = BigNumber.from(data.amount);
    const totalPaid = amount.mul(unitPrice);

    const txHashPromise = buyMetronionMutation.mutateAsync({
      amount,
      totalPaid,
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
            const txReceipt = data as ITransactionReceipt;
            const txHashUrl = GetExplorerTransactionLink(
              env.chainId,
              txReceipt.txHash,
            );
            props.updateUserRecord();
            return (
              <Box>
                Mint successfully, tx hash:{' '}
                <Link href={txHashUrl} target="_blank" rel="noreferrer">
                  {txReceipt.txHash}
                </Link>
              </Box>
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
    watchedAmount !== 0 &&
    Number(watchedAmount) >= PRIVATE_CAP &&
    Number(watchedAmount) <= PUBLIC_CAP;

  if (amountIsValid) {
    totalAmount = new Decimal(watchedAmount).mul(unitPrice);
  }

  return (
    <Box
      bgColor="grayBlur.200"
      border="2px solid"
      borderColor="greenBlur.100"
      borderRadius={14}
      boxShadow="0px 25.6667px 42.7778px rgba(32, 138, 55, 0.28)"
      p={{ base: 6, md: 8 }}
      w={{
        base: '100%',
        xs: '375px',
      }}
      mb={10}
    >
      <Text
        textStyle="appNormal"
        textTransform="uppercase"
        fontFamily="Acrom-Bold"
      >
        {props.round} Is Started
      </Text>
      <Grid templateRows="repeat(3, 1fr)" gap={2} mt={4}>
        <Flex justifyContent="space-between">
          <Text color="whiteBlur.200" textStyle="appNormal">
            Your Allocation
          </Text>
          <Text color="green.200" textStyle="appNormal">
            {allocation} {allocation <= 1 ? 'Metronion' : 'Metronions'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text color="whiteBlur.200" textStyle="appNormal">
            Purchased
          </Text>
          <Text color="green.200" textStyle="appNormal">
            {purchased} {purchased <= 1 ? 'Metronion' : 'Metronions'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text color="whiteBlur.200" textStyle="appNormal">
            Unit Price
          </Text>
          <Text color="green.200" textStyle="appNormal">
            {unitPrice} {env.chainToken}
          </Text>
        </Flex>
      </Grid>
      <Box mt={6}>
        {isActivated && (
          <Text color="white.200" textStyle="appNormal">
            Balance: {formattedBalance} {env.chainToken}
          </Text>
        )}

        <FormControl
          bgColor="grayBlur.200"
          borderRadius="25%"
          color="white"
          position="relative"
          mt={2}
        >
          <Input
            type="number"
            {...register('amount', {
              required: true,
              min: PRIVATE_CAP,
              max: PUBLIC_CAP,
            })}
            _focus={
              !amountIsValid && formState.isDirty
                ? {
                    borderColor: 'red',
                  }
                : { borderColor: 'greenBlur.100' }
            }
          />
          <Box
            position="absolute"
            right={3}
            top="50%"
            transform="translateY(-50%)"
            fontFamily="Acrom-Bold"
            textTransform="uppercase"
            color="green.200"
            fontSize={{ base: 'xs', md: 'sm' }}
            onClick={setMaxBuyAmount}
            cursor="pointer"
          >
            Max
          </Box>
        </FormControl>
        <Box h={6} mt={2}>
          {!amountIsValid && formState.isDirty && (
            <Text textStyle="appNormal" color="red">
              Amount should be in range {PRIVATE_CAP} to {PUBLIC_CAP}
            </Text>
          )}
          {amountIsValid && formState.isDirty && (
            <Text textStyle="appNormal">
              Total: {totalAmount.toString()} {env.chainToken}
            </Text>
          )}
          {formState.errors.amount && (
            <Text textStyle="appNormal" color="red">
              {formState.errors.amount?.message}
            </Text>
          )}
        </Box>
        <Button
          variant="solid"
          size={useButtonSize()}
          mt={5}
          w="full"
          isLoading={buyMetronionMutation.isLoading}
          loadingText="Minting"
          disabled={!isActivated || buyMetronionMutation.isLoading}
          onClick={handleSubmit(onSubmit)}
        >
          {isActivated ? 'Mint' : 'Please connect wallet'}
        </Button>
      </Box>
    </Box>
  );
}
