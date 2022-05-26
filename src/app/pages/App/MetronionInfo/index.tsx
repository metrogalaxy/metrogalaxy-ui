import * as React from 'react';
import {
  Text,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Grid,
  GridItem,
  Center,
  Box,
  Stack,
  Link,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { BigNumber } from 'bignumber.js';
import ArrowLeftIcon from 'src/app/assets/icon/arrow_left.svg';
import { LoadingSpinner } from 'src/app/components/Loading';
import {
  useGetMetronionInfo,
  useGetMetronionActivities,
  useGetMetronionOffers,
} from 'src/app/service/Metronion';
import { PageLayout } from '../components/PageLayout';
import { BasicInfo } from './BasicInfo';
import { AccessoriesPanel } from './AccessoriesPanel';
import { OffersPanel } from './OffersPanel';
import { ActivitiesPanel } from './ActivitiesPanel';
import { UNKNOWN_METRONION_IMG_URL } from 'src/app/config/constants';
import { StatsComponent } from './Stats';
import { Avatar } from './Avatar';

// const Panel = lazyLoad(
//   () => import('./Panel'),
//   module => module.Panel,
//   {
//     fallback: <LoadingSpinnerWrapper />,
//   },
// );

export function MetronionInfo() {
  const navigate = useNavigate();
  const { id } = useParams();

  const idNumber = new BigNumber(id!);

  const {
    data: metronionInfo,
    isLoading: metronionInfoIsLoading,
    refetch: refetchMetronionInfo,
  } = useGetMetronionInfo(idNumber.toNumber(), {
    enabled: !idNumber.isNaN(),
  });

  const {
    data: metronionActivities,
    isLoading: metronionActivitiesIsLoading,
    refetch: refetchMetronionActivities,
  } = useGetMetronionActivities(idNumber.toNumber(), {
    enabled: !idNumber.isNaN(),
  });

  const {
    data: metronionOffers,
    isLoading: metronionOffersIsLoading,
    refetch: refetchMetronionOffers,
  } = useGetMetronionOffers(idNumber.toNumber(), {
    enabled: !idNumber.isNaN(),
  });

  const isLoading = metronionInfoIsLoading && metronionActivitiesIsLoading;

  let metronionOwner = '';
  if (metronionInfo) {
    if (metronionInfo.listedBy) {
      metronionOwner = metronionInfo.listedBy;
    } else {
      metronionOwner = metronionInfo.owner;
    }
  } else if (!metronionInfo && !isLoading) {
    return (
      <PageLayout title="Metronion Info" content="Metronion Info">
        <Center>
          <Link onClick={() => navigate(-1)}>
            <Image src={ArrowLeftIcon} width="32px" height="32px" />
          </Link>
          <Text textStyle="appTitle" ml={2}>
            Metronion Not Found
          </Text>
        </Center>
      </PageLayout>
    );
  }

  const refetchMetronion = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await refetchMetronionInfo();
    await refetchMetronionActivities();
    await refetchMetronionOffers();
  };

  return (
    <PageLayout title="Metronion Info" content="Metronion Info">
      <Flex
        alignItems="center"
        pt={{ base: 0, md: '8px' }}
        mb={{ base: 6, sm: 8 }}
        alignSelf={{ base: 'flex-start', md: 'center' }}
      >
        <Breadcrumb spacing={0}>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate(-1)}>
              <Image src={ArrowLeftIcon} width="32px" height="32px" />
            </BreadcrumbLink>
            <Text textStyle="appTitle" textTransform="capitalize" ml={2}>
              Metronion #{idNumber.toString()}
            </Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Center width="full" display={isLoading ? 'flex' : 'none'}>
        <LoadingSpinner />
      </Center>

      {/* Main Panel */}
      {metronionInfo && (
        <Box>
          <Grid
            templateColumns={{ base: '1fr', xl: '2fr 3fr' }}
            gap={{ base: 2, xl: 14 }}
            rowGap={{ base: 10 }}
            display={isLoading ? 'none' : 'grid'}
            justifyItems="center"
          >
            <GridItem width="100%">
              <Stack gap={8}>
                {/* Avatar */}
                <Avatar
                  image={metronionInfo.image || UNKNOWN_METRONION_IMG_URL}
                />
                {/* Stats */}
                <StatsComponent stats={metronionInfo.baseStats} />
                {/* Accessories */}
                <AccessoriesPanel parts={metronionInfo.wearables} />
              </Stack>
            </GridItem>
            <GridItem width="100%">
              <Stack gap={8}>
                {/* Basic Info */}
                <BasicInfo
                  data={metronionInfo}
                  refetchMetronion={refetchMetronion}
                />
                {/* Offers */}
                <OffersPanel
                  owner={metronionOwner}
                  data={metronionOffers}
                  isLoading={metronionOffersIsLoading}
                  refetchMetronion={refetchMetronion}
                />
                {/* Activities */}
                <ActivitiesPanel
                  data={metronionActivities}
                  isLoading={metronionActivitiesIsLoading}
                />
              </Stack>
            </GridItem>
          </Grid>
        </Box>
      )}
    </PageLayout>
  );
}
