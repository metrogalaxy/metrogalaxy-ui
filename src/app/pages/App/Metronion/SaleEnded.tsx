import * as React from 'react';
import { Box, Text, Grid, Flex } from '@chakra-ui/react';

interface SaleEndedProps {
  privateBought: number;
  publicBought: number;
}

export function SaleEnded(props: SaleEndedProps) {
  return (
    <Box
      bgColor="grayBlur.100"
      border="2px solid"
      borderColor="greenBlur.100"
      borderRadius={14}
      boxShadow="0px 25.6667px 42.7778px rgba(32, 138, 55, 0.28)"
      p={{ base: 6, md: 8 }}
      w={{
        base: '100%',
        xs: '375px',
      }}
    >
      <Text
        textStyle="appNormal"
        fontFamily="Acrom-Bold"
        textTransform="uppercase"
        mb={4}
        pb={4}
        borderBottom="1px dashed"
        borderBottomColor="greenBlur.100"
      >
        Sale Ended
      </Text>
      <Text
        textStyle="appNormal"
        fontFamily="Acrom-Bold"
        textTransform="uppercase"
        mb={4}
      >
        Your Sale Stats
      </Text>
      <Grid templateRows="repeat(2, 1fr)" gap={2} mt={4}>
        <Flex justifyContent="space-between">
          <Text color="whiteBlur.200" textStyle="appNormal">
            Private Bought
          </Text>
          <Text color="green.200" textStyle="appNormal">
            {props.privateBought}{' '}
            {props.privateBought <= 1 ? 'Metronion' : 'Metronions'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text color="whiteBlur.200" textStyle="appNormal">
            Public Bought
          </Text>
          <Text color="green.200" textStyle="appNormal">
            {props.publicBought}{' '}
            {props.publicBought <= 1 ? 'Metronion' : 'Metronions'}
          </Text>
        </Flex>
      </Grid>
    </Box>
  );
}
