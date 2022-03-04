import * as React from 'react';
import { Box, Grid, Flex, Center, Text } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { Pagination } from 'src/app/components/Pagination';
import { LoadingSpinner } from 'src/app/components/Loading';
import {
  useGetAccessoriesByPage,
  AccessoriesFilterParams,
  DEFAULT_ACCESSORIES_FILTER_PARAMS,
} from 'src/app/service/Accessories';
import { AccessoriesFilter, AccessoriesPanel } from '../components/Accessories';
import { ITEMS_PER_PAGE } from 'src/app/config/constants';

export function AccessoriesTab() {
  const [offset, setOffset] = React.useState<number>(0);
  const [filter, setFilter] = React.useState<AccessoriesFilterParams>(
    DEFAULT_ACCESSORIES_FILTER_PARAMS,
  );

  // fetch accessories
  const { data, isFetching } = useGetAccessoriesByPage(
    offset,
    ITEMS_PER_PAGE,
    filter,
  );

  const onFilterChange = params => {
    setFilter(params);
  };

  const onPageChange = (page: number) => {
    setOffset(page - 1);
  };

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
