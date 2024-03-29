import * as React from 'react';
import { Box, Grid, Flex, Center, Text } from '@chakra-ui/react';
import { useEthers } from '@quangkeu1995/dappcore';
import { Pagination } from 'src/app/components/Pagination';
import { LoadingSpinner } from 'src/app/components/Loading';
import { useAccount } from 'src/app/hooks';
import {
  useGetAccessoriesByPage,
  AccessoriesFilterParams,
  DEFAULT_ACCESSORIES_FILTER_PARAMS,
} from 'src/app/service/Accessories';
import { AccessoriesFilter, AccessoriesPanel } from '../components/Accessories';

const ITEMS_PER_PAGE: number = 6;

export function AccessoriesTab() {
  const [offset, setOffset] = React.useState<number>(0);
  const [filter, setFilter] = React.useState<AccessoriesFilterParams>(
    DEFAULT_ACCESSORIES_FILTER_PARAMS,
  );
  const { isActivated } = useAccount();
  const { account } = useEthers();

  // fetch accessories
  const { data, isFetching } = useGetAccessoriesByPage(
    account!,
    offset,
    ITEMS_PER_PAGE,
    filter,
    {
      enabled:
        isActivated &&
        account !== null &&
        account !== undefined &&
        account !== '',
    },
  );

  const onFilterChange = params => {
    if (!isActivated) {
      return;
    }
    console.log('call api get accessories');
    setFilter(params);
  };

  const onPageChange = (page: number) => {
    setOffset(page - 1);
  };

  if (!isActivated) {
    return (
      <Box textAlign="center" mt={{ base: 8 }}>
        <Text textStyle="appTitle">Please Connect Your Wallet</Text>
      </Box>
    );
  }

  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '1fr 2fr' }}
      templateRows={{
        base: 'auto 1fr',
        lg: '1fr',
      }}
      justifyContent="center"
      gap={{ base: 6, lg: 12 }}
      mb={10}
    >
      <AccessoriesFilter onFilterChange={onFilterChange} />
      <Flex width="100%" justifyContent={{ base: 'center', lg: 'flex-start' }}>
        <Center width="full" display={isFetching ? 'flex' : 'none'}>
          <LoadingSpinner />
        </Center>
        <Box width="fit-content" display={isFetching ? 'none' : 'block'}>
          <Center
            width="100%"
            display={
              !data || (data && data.data.length === 0) ? 'block' : 'none'
            }
          >
            <Text textStyle="appNormal">No Data</Text>
          </Center>
          <Box display={data && data.data.length > 0 ? 'block' : 'none'}>
            <AccessoriesPanel data={data ? data.data : []} />
            <Center>
              <Pagination
                count={data ? data.count : 0}
                limit={ITEMS_PER_PAGE}
                handlePageChange={onPageChange}
              />
            </Center>
          </Box>
        </Box>
      </Flex>
    </Grid>
  );
}
