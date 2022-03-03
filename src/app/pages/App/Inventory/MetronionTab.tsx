import * as React from 'react';
import { Box, Grid, Flex, Center, Text } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useEthers } from '@quangkeu1995/dappcore';
import { MetronionPanel, MetronionFilter } from '../components/Metronion';
import { Pagination } from 'src/app/components/Pagination';
import { LoadingSpinner } from 'src/app/components/Loading';
import { useAccount } from 'src/app/hooks';
import {
  useGetMetronionsByPage,
  MetronionFilterParams,
  DEFAULT_METRONION_FILTER_PARAMS,
} from 'src/app/service/Metronion';

const ITEMS_PER_PAGE: number = 6;

export function MetronionTab() {
  const [offset, setOffset] = React.useState<number>(0);
  const [filter, setFilter] = React.useState<MetronionFilterParams>(
    DEFAULT_METRONION_FILTER_PARAMS,
  );
  const { isActivated } = useAccount();
  const { account } = useEthers();

  // fetch metronions
  const { data, isFetching } = useGetMetronionsByPage(
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
      <MetronionFilter onFilterChange={onFilterChange} />
      <Flex width="100%" justifyContent={{ base: 'center', lg: 'flex-start' }}>
        <Center width="full" display={isFetching ? 'flex' : 'none'}>
          <LoadingSpinner />
        </Center>
        <Box width="fit-content" display={isFetching ? 'none' : 'block'}>
          <Flex
            flexDirection="row"
            alignItems="center"
            width="100%"
            display={
              !data || (data && data.data.length === 0) ? 'flex' : 'none'
            }
          >
            <SmallCloseIcon width="38px" height="38px" color="white" mr={1} />
            <Text textStyle="appTitle">No Data</Text>
          </Flex>
          <Box display={data && data.data.length > 0 ? 'block' : 'none'}>
            <MetronionPanel data={data ? data.data : []} />
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
