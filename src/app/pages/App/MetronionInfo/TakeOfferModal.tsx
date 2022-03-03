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
import { useTakeOfferMetronion } from 'src/app/service/Metronion';
import { useAccount } from 'src/app/hooks';
import { toastHandler } from 'src/utils/toast';

interface TakeOfferModalProps {
  metronionId: number;
  offerPrice: number;
  buyer: string;
  refetchMetronion: () => void;
}

export function TakeOfferModal(props: TakeOfferModalProps) {
  const { account, library } = useEthers();
  const provider = library as Web3Provider;
  const { isActivated } = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmiting, setIsSubmitting] = useBoolean();

  const mutation = useTakeOfferMetronion(provider, account);

  const submit = async () => {
    setIsSubmitting.on();
    const price = ethers.utils.parseEther(props.offerPrice.toString());
    const txHashPromise = mutation.mutateAsync({
      metronionId: BigNumber.from(props.metronionId),
      price: price,
      buyer: props.buyer,
    });

    toastHandler(
      txHashPromise,
      'Taking offer',
      'Take offer successfully',
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
        size="sm"
        height="2rem"
        variant="outline"
        py={0}
        paddingLeft={3}
        paddingRight={3}
        onClick={onOpen}
      >
        Take Offer
      </Button>
      <CommonModal
        isShow={isOpen}
        handleClose={onClose}
        header="Take Offer Metronion"
      >
        <Box>
          <Text textStyle="appNormal" mb={4}>
            Do you want to take offer for Metronion {props.metronionId} at price{' '}
            {props.offerPrice}?
          </Text>
          <Text textStyle="appNormal" mb={4} color="green.200">
            Note: You have to delist Metronion first in order to take offer.
          </Text>
          <Grid
            templateColumns="repeat(2, 100px)"
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
              Close
            </Button>
            <Button
              variant="solid"
              size="sm"
              onClick={submit}
              disabled={isSubmiting || !isActivated}
            >
              Take Offer
            </Button>
          </Grid>
        </Box>
      </CommonModal>
    </React.Fragment>
  );
}
