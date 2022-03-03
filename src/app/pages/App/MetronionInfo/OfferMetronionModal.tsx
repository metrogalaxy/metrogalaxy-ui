import * as React from 'react';
import { CommonModal } from './CommonModal';
import {
  Box,
  Text,
  Image,
  Grid,
  Button,
  InputGroup,
  Input,
  InputLeftElement,
  useDisclosure,
  useBoolean,
} from '@chakra-ui/react';
import { Web3Provider } from '@ethersproject/providers';
import { ethers, BigNumber } from 'ethers';
import { useForm } from 'react-hook-form';
import { useEthers } from '@quangkeu1995/dappcore';
import { MAX_METRONION_PRICE_PER_UNIT } from 'src/app/config/constants';
import MetroToken from 'src/app/assets/icon/metro.svg';
import { useOfferMetronion } from 'src/app/service/Metronion';
import { useButtonSize, useAccount } from 'src/app/hooks';
import { toastHandler } from 'src/utils/toast';

interface IFormInput {
  offerPrice: number;
}

interface MetronionOfferModalProps {
  metronionId: number;
  refetchMetronion: () => void;
}

export function OfferMetronionModal(props: MetronionOfferModalProps) {
  const { account, library } = useEthers();
  const provider = library as Web3Provider;
  const { isActivated } = useAccount();
  const { register, getValues, setValue, formState, watch } =
    useForm<IFormInput>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmiting, setIsSubmitting] = useBoolean();
  const buttonSize = useButtonSize();

  const offerPrice = watch('offerPrice');
  const priceInvalid =
    offerPrice < 1 || offerPrice > MAX_METRONION_PRICE_PER_UNIT;

  const offerMetronionMutation = useOfferMetronion(provider, account);

  const submit = async () => {
    if (priceInvalid) {
      return;
    }
    setIsSubmitting.on();
    const metronionId = BigNumber.from(props.metronionId);

    // TODO handle validation
    const offerPrice = getValues('offerPrice');
    const price = ethers.utils.parseEther(offerPrice.toString());

    const txHashPromise = offerMetronionMutation.mutateAsync({
      metronionId,
      price,
    });

    toastHandler(
      txHashPromise,
      'Making offer',
      'Make offer successfully',
      () => {
        handleClose();
        props.refetchMetronion();
      },
      () => {
        setIsSubmitting.off();
      },
    );
  };

  const handleClose = () => {
    onClose();
    setIsSubmitting.off();
    setValue('offerPrice', 0);
  };

  return (
    <React.Fragment>
      <Button
        variant="outline"
        size={buttonSize}
        disabled={!isActivated}
        onClick={onOpen}
        width="100%"
      >
        Offer
      </Button>
      <CommonModal
        isShow={isOpen}
        handleClose={handleClose}
        header="List Metronion"
      >
        <Box>
          <Text textStyle="appNormal" mb={4}>
            Make offer for Metronion at price
          </Text>
          <InputGroup mb={4}>
            <Input
              boxSizing="border-box"
              bg="gray.500"
              border="2px solid"
              borderColor={priceInvalid ? 'red.100' : 'gray.300'}
              borderRadius="6px"
              color="white"
              isInvalid={priceInvalid && formState.isDirty}
              type="number"
              _focus={
                priceInvalid && formState.isDirty
                  ? { borderColor: 'red.100' }
                  : { borderColor: 'greenBlur.100' }
              }
              placeholder="0"
              _placeholder={{
                color: 'white',
                fontSize: {
                  base: 'sm',
                  md: 'md',
                },
              }}
              {...register('offerPrice', {
                required: true,
                min: 1,
                max: MAX_METRONION_PRICE_PER_UNIT,
              })}
              disabled={isSubmiting}
            />
            <InputLeftElement
              h="100%"
              children={<Image src={MetroToken} w="24px" h="24px" />}
            />
          </InputGroup>
          {priceInvalid && formState.isDirty && (
            <Text textStyle="appNormal" color="red" mb={4}>
              Price should be in range 1 to{' '}
              {MAX_METRONION_PRICE_PER_UNIT.toLocaleString()}
            </Text>
          )}
          <Grid
            templateColumns="repeat(2, 100px)"
            gap={4}
            justifyContent="flex-end"
            mb={4}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={handleClose}
              disabled={isSubmiting}
            >
              Close
            </Button>
            <Button
              variant="solid"
              size="sm"
              onClick={submit}
              disabled={isSubmiting}
            >
              Offer
            </Button>
          </Grid>
        </Box>
      </CommonModal>
    </React.Fragment>
  );
}
