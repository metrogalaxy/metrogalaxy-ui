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
import { BigNumber } from 'ethers';
import { useEthers } from '@quangkeu1995/dappcore';
import { useCancelOfferMetronion } from 'src/app/service/Metronion';
import { useAccount } from 'src/app/hooks';
import { toastHandler } from 'src/utils/toast';

interface CancelOfferModalProps {
  metronionId: number;
  refetchMetronion: () => void;
}

export function CancelOfferModal(props: CancelOfferModalProps) {
  const { account, library } = useEthers();
  const provider = library as Web3Provider;
  const { isActivated } = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmiting, setIsSubmitting] = useBoolean();

  const mutation = useCancelOfferMetronion(provider, account);

  const submit = async () => {
    setIsSubmitting.on();
    const txHashPromise = mutation.mutateAsync({
      metronionId: BigNumber.from(props.metronionId),
    });

    toastHandler(
      txHashPromise,
      'Cancelling offer',
      'Cancel offer successfully',
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
        Cancel Offer
      </Button>
      <CommonModal
        isShow={isOpen}
        handleClose={onClose}
        header="Cancel Offer Metronion"
      >
        <Box>
          <Text textStyle="appNormal" mb={4}>
            Are you sure you want to cancel offer for Metronion{' '}
            {props.metronionId}?
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
              Close
            </Button>
            <Button
              variant="solid"
              size="sm"
              onClick={submit}
              disabled={isSubmiting || !isActivated}
            >
              Cancel Offer
            </Button>
          </Grid>
        </Box>
      </CommonModal>
    </React.Fragment>
  );
}
