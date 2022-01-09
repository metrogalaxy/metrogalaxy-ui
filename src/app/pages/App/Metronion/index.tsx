import * as React from 'react';
import { Flex, Text, Image, Grid, GridItem, Center } from '@chakra-ui/react';
import TitleIcon from './assets/title_icon.svg';
import { TotalMintInfo } from './TotalMintInfo';
import { Guide } from './Guide';
import { MintBox } from './MintBox';
import { Countdown } from './Countdown';
import { SaleEnded } from './SaleEnded';

import { useEthers } from '@quangkeu1995/dappcore';
import { Web3Provider } from '@ethersproject/providers';
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
  const { library, account } = useEthers();
  const provider = library as Web3Provider;
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
  const { data: isWhitelisted } = useIsWhitelistedAddress(provider, account!, {
    enabled:
      provider &&
      isActivated &&
      duringPrivateSale &&
      account !== undefined &&
      account !== null,
  });

  // get user record on private and public sale
  const { data: userRecord, refetch: refetchUserRecord } = useGetUserRecord(
    provider,
    account!,
    {
      enabled:
        provider &&
        isActivated &&
        (duringPrivateSale || duringPublicSale) &&
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
        templateColumns={{
          base: '1fr',
          lg: 'repeat(2, 1fr)',
          xl: 'repeat(3, 1fr)',
        }}
        rowGap={5}
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <Grid
            mt={5}
            justifyItems={{
              base: 'center',
            }}
            templateRows={{
              base: '200px 1fr',
              lg: '1fr',
            }}
            templateColumns={{
              xl: 'repeat(2, 1fr)',
            }}
            columnGap={4}
          >
            {CountdownComponent}
            <Center mt={10}>
              <Image
                src={AvatarGif}
                ratio={3 / 4}
                maxW={{ base: '200px', sm: '250px', lg: '300px' }}
              />
            </Center>
          </Grid>
        </GridItem>
        <GridItem
          colStart={{
            base: 1,
            lg: 2,
            xl: 3,
          }}
          colEnd={{
            base: 2,
            lg: 3,
            xl: 4,
          }}
          colSpan={1}
        >
          <Grid
            mt={5}
            justifyItems={{
              base: 'center',
            }}
          >
            {isPrePrivateSale || saleEnded ? null : (
              <MintBox
                allocation={allocation}
                purchased={purchased}
                round={round}
                updateUserRecord={refetchUserRecord}
              />
            )}
            <TotalMintInfo />
            <Guide />
          </Grid>
        </GridItem>
      </Grid>

      {/* <NavBar activeItemId={NAV_BAR_ITEMS_ID.Metronion} />
      <Background />
      <Layout>
        <TitleLayout iconSrc={TitleIcon}>Mint Metronion</TitleLayout>
        <MainLayout>
          <Row className="row-layout">
            <Col sm={12} lg={4} className="col-layout">
              <TotalMintInfo />
              <Guide />
            </Col>
            <Col sm={12} lg={8} className="col-layout col-layout-flex">
              <Avatar />
              {!isRunning && <MintBox />}
              {isRunning && <Countdown />}
            </Col>
          </Row>
        </MainLayout>
      </Layout> */}
    </PageLayout>
  );
}
