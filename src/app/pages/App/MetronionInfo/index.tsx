import * as React from 'react';
import {
  Box,
  Text,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Grid,
  GridItem,
  Center,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { BigNumber } from 'bignumber.js';
import ArrowLeftIcon from 'src/app/assets/icon/arrow_left.svg';
import { LoadingSpinner } from 'src/app/components/Loading';

import { PageLayout } from '../components/PageLayout';
import { useGetMetronionInfo } from 'src/app/service/Metronion';
import { BasicInfo } from './BasicInfo';
import { AccessoriesPanel } from './AccessoriesPanel';
import { OffersPanel } from './OffersPanel';

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

  const { data, isFetching } = useGetMetronionInfo(idNumber.toNumber(), {
    enabled: !idNumber.isNaN(),
  });

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
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href={`metronion/${idNumber.toString()}`}>
              <Text
                textStyle="appTitle"
                textTransform="capitalize"
                hover={{
                  color: 'green.200',
                }}
              >
                Metronion #{idNumber.toString()}
              </Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Center width="full" display={isFetching ? 'flex' : 'none'}>
        <LoadingSpinner />
      </Center>

      {/* Main Panel */}
      {data && (
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
          templateRows="1fr"
          gap={{ base: 4, lg: 10 }}
          display={isFetching ? 'none' : 'grid'}
          justifyItems="center"
        >
          {/* Accessories */}
          <AccessoriesPanel accessoryIds={data.accessoryIds} />
          {/* Avatar */}
          <GridItem rowStart={1} rowEnd={{ base: 2 }}>
            <Center>
              <Image
                src={data.image}
                width="auto"
                height="auto"
                maxHeight={{ sm: '500px' }}
              />
            </Center>
          </GridItem>
          {/* Basic Info */}
          <GridItem rowStart={{ base: 2, lg: 1 }} rowEnd={{ base: 3 }}>
            <BasicInfo data={data} />
            <OffersPanel />
          </GridItem>
          {/* Offers */}
        </Grid>
      )}
    </PageLayout>
  );
}
