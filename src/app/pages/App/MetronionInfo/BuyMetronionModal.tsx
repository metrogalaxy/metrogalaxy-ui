import * as React from 'react';
import { CommonModal } from './CommonModal';
import {
  Box,
  Text,
  Grid,
  Button,
  useDisclosure,
  useBoolean,
} from '@chakra-ui/react';
import { Web3Provider } from '@ethersproject/providers';
import { ethers, BigNumber } from 'ethers';
import { useEthers } from '@quangkeu1995/dappcore';
import { useBuyMetronion } from 'src/app/service/Metronion';
import { useButtonSize, useAccount } from 'src/app/hooks';
import { toastHandler } from 'src/utils/toast';

interface BuyMetronionModalProps {
  metronionId: number;
  price: number;
  seller: string;
  refetchMetronion: () => void;
}

export function BuyMetronionModal(props: BuyMetronionModalProps) {
  const { account, library } = useEthers();
  const provider = library as Web3Provider;
  const { isActivated } = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmiting, setIsSubmitting] = useBoolean();

  const buttonSize = useButtonSize();

  const buyMetronion = useBuyMetronion(provider, account);

  const submit = async () => {
    setIsSubmitting.on();
    const metronionId = BigNumber.from(props.metronionId);
    const price = ethers.utils.parseEther(props.price.toString());
    const seller = props.seller;

    const txHashPromise = buyMetronion.mutateAsync({
      metronionId,
      price,
      seller,
    });

    toastHandler(
      txHashPromise,
      'Buying metronion',
      'Buy successfully',
      () => {
        onClose();
        setIsSubmitting.off();
        props.refetchMetronion();
      },
      () => {
        setIsSubmitting.off();
      },
    );
  };

  return (
    <React.Fragment>
      <Button
        variant="solid"
        size={buttonSize}
        disabled={!isActivated}
        onClick={onOpen}
        width="100%"
      >
        Buy
      </Button>
      <CommonModal isShow={isOpen} handleClose={onClose} header="Buy Metronion">
        <Box>
          <Text textStyle="appNormal" mb={8}>
            Are you sure you want to buy this Metronion?
          </Text>
          <Grid
            templateColumns="repeat(2, 120px)"
            gap={4}
            justifyContent="flex-end"
            mb={4}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              disabled={isSubmiting}
            >
              No
            </Button>
            <Button
              variant="solid"
              size="sm"
              onClick={submit}
              disabled={isSubmiting}
            >
              Yes
            </Button>
          </Grid>
        </Box>
      </CommonModal>
    </React.Fragment>
  );
}
