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
import { useDelistMetronion } from 'src/app/service/Metronion';
import { useButtonSize, useAccount } from 'src/app/hooks';
import { toastHandler } from 'src/utils/toast';

interface DelistMetronionModalProps {
  metronionId: number;
  refetchMetronion: () => void;
}

export function DelistMetronionModal(props: DelistMetronionModalProps) {
  const { account, library } = useEthers();
  const provider = library as Web3Provider;
  const { isActivated } = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmiting, setIsSubmitting] = useBoolean();

  const buttonSize = useButtonSize();

  const delistMetronionMutation = useDelistMetronion(provider, account);

  const submitDelistMetronion = async () => {
    setIsSubmitting.on();
    const txHashPromise = delistMetronionMutation.mutateAsync({
      metronionId: BigNumber.from(props.metronionId),
    });

    toastHandler(
      txHashPromise,
      'Delisting metronion',
      'Delisting successfully',
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
        Delist
      </Button>
      <CommonModal
        isShow={isOpen}
        handleClose={onClose}
        header="Delist Metronion"
      >
        <Box>
          <Text textStyle="appNormal" mb={8}>
            Are you sure you want to delist Metronion {props.metronionId}?
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
              disabled={isSubmiting || !isActivated}
            >
              No
            </Button>
            <Button
              variant="solid"
              size="sm"
              onClick={submitDelistMetronion}
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
