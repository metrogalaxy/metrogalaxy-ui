import * as React from 'react';
import { Box, Text, Grid, Image, Flex, Spinner } from '@chakra-ui/react';

import MintInfoIcon from './assets/mint_info_icon.webp';
import { MAX_METRONION_COUNT } from 'src/app/config/constants';
import { useGetSaleRecord } from 'src/app/service/MetronionSale';

const REFETCH_INTERVAL = 5000; // milliseconds

export function TotalMintInfo() {
  const { data: saleRecord, isLoading } = useGetSaleRecord({
    refetchInterval: REFETCH_INTERVAL,
  });

  const totalSold = saleRecord?.totalSold ? saleRecord.totalSold : 0;

  return (
    <Box
      bgColor="grayBlur.200"
      border="2px solid"
      borderColor="blue.300"
      borderRadius={14}
      boxShadow=" 0px 17.1491px 42.8728px rgba(7, 105, 140, 0.66);"
      p={{ base: 6, md: 8 }}
      w={{
        base: '100%',
        xs: '375px',
      }}
      h="fit-content"
      position="relative"
    >
      <Grid templateColumns="80px 1fr" gap={3}>
        <Image src={MintInfoIcon} />
        <Flex flexDirection="column" justifyContent="center">
          <Text
            textStyle="appNormal"
            textTransform="uppercase"
            fontFamily="Acrom-Bold"
          >
            Total Minted
          </Text>

          <Box textStyle="appTitle" mt={2} fontSize={{ base: 'lg', md: 'xl' }}>
            <Text as="span" color="blue.400">
              {totalSold.toLocaleString()}
            </Text>
            <Text as="span">/{MAX_METRONION_COUNT.toLocaleString()}</Text>
          </Box>
        </Flex>
      </Grid>
      {isLoading && (
        <Spinner
          size="sm"
          position="absolute"
          top="20px"
          right="20px"
          color="white"
        />
      )}
    </Box>
  );
}
