import * as React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  Center,
} from '@chakra-ui/react';
import TitleIcon from './assets/title_icon.svg';
import { TotalMintInfo } from './TotalMintInfo';
import { Guide } from './Guide';
import { MintBox } from './MintBox';
import { Countdown } from './Countdown';
import { SaleEnded } from './SaleEnded';

import { useEthers } from '@quangkeu1995/dappcore';
import {
  METRONION_PRIVATE_CAP,
  METRONION_PUBLIC_CAP,
} from 'src/app/config/constants';
import env from 'src/app/config';
import {
  useGetUserRecord,
  useIsWhitelistedAddress,
} from 'src/app/service/MetronionSale';
import { PageLayout } from '../components/PageLayout';
import AvatarGif from './assets/avatar.gif';
import { useAccount } from 'src/app/hooks';

export enum Round {
  PRIVATE = 'Private Sale',
  PUBLIC = 'Public Sale',
  ENDED = 'Sale Ended',
}

export function Metronion() {
  const { account } = useEthers();
  const { isActivated } = useAccount();
  const now = Date.now();

  const isPrePrivateSale = now < env.metronionSale.privateSaleTime.getTime();
  const duringPrivateSale =
    now >= env.metronionSale.privateSaleTime.getTime() &&
    now < env.metronionSale.publicSaleTime.getTime();
  const duringPublicSale =
    now >= env.metronionSale.publicSaleTime.getTime() &&
    now < env.metronionSale.endSaleTime.getTime();
  const saleEnded = now >= env.metronionSale.endSaleTime.getTime();

  // check address is whitelisted if on the private sale phase
  const { data: isWhitelisted } = useIsWhitelistedAddress(account!, {
    enabled:
      isActivated &&
      duringPrivateSale &&
      account !== undefined &&
      account !== null,
  });

  // get user record on private and public sale
  const { data: userRecord, refetch: refetchUserRecord } = useGetUserRecord(
    account!,
    {
      enabled:
        isActivated &&
        (duringPrivateSale || duringPublicSale || saleEnded) &&
        account !== undefined &&
        account !== null,
    },
  );

  let CountdownComponent: React.ReactNode;
  let round = Round.PRIVATE;
  let allocation = 0;
  let purchased = 0;
  if (isPrePrivateSale) {
    CountdownComponent = (
      <Countdown
        deadline={env.metronionSale.privateSaleTime}
        round={Round.PRIVATE}
      />
    );
  } else if (duringPrivateSale) {
    CountdownComponent = (
      <Countdown
        deadline={env.metronionSale.publicSaleTime}
        round={Round.PUBLIC}
      />
    );
    allocation = isWhitelisted ? METRONION_PRIVATE_CAP : 0;
    purchased = userRecord ? userRecord!.privateBought : 0;
  } else if (duringPublicSale) {
    CountdownComponent = (
      <Countdown deadline={env.metronionSale.endSaleTime} round={Round.ENDED} />
    );
    round = Round.PUBLIC;
    allocation = METRONION_PUBLIC_CAP;
    purchased = userRecord ? userRecord!.publicBought : 0;
  } else if (saleEnded) {
    CountdownComponent = (
      <SaleEnded
        privateBought={userRecord ? userRecord.privateBought : 0}
        publicBought={userRecord ? userRecord.publicBought : 0}
      />
    );
  }

  return (
    <PageLayout title="Metronion" content="The Metronion">
      <Flex alignItems="center">
        <Image src={TitleIcon} w={8} h={8} mr={2} />
        <Text textStyle="appTitle" textTransform="capitalize">
          Mint Metronion
        </Text>
      </Flex>

      <Grid
        gap={8}
        justifyItems="center"
        mt={8}
        templateAreas={{
          base: `"totalMint" "guide" "avatar" "countdown" "mintBox"`,
          xl: `"totalMint avatar countdown" "totalMint avatar mintBox"`,
        }}
      >
        {/* Total Mint Info */}
        <GridItem width={{ base: '100%', xs: 'auto' }} gridArea="totalMint">
          <TotalMintInfo />
          <Box mt={8}>
            <Guide />
          </Box>
        </GridItem>
        {/* Avatar */}
        <GridItem width={{ base: '100%', xs: 'auto' }} gridArea="avatar">
          <Center>
            <Image
              src={AvatarGif}
              maxW={{ base: '200px', sm: '250px', lg: '300px' }}
            />
          </Center>
        </GridItem>
        {/* Countdown */}
        <GridItem width={{ base: '100%', xs: 'auto' }} gridArea="countdown">
          {CountdownComponent}
        </GridItem>
        {/* Mint Box */}
        <GridItem width={{ base: '100%', xs: 'auto' }} gridArea="mintBox">
          {isPrePrivateSale || saleEnded ? null : (
            <MintBox
              allocation={allocation}
              purchased={purchased}
              round={round}
              updateUserRecord={refetchUserRecord}
            />
          )}
        </GridItem>
      </Grid>
    </PageLayout>
  );
}
