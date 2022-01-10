import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

export function OffersPanel() {
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
      mb={10}
    >
      <Text
        textStyle="appNormal"
        textTransform="uppercase"
        fontFamily="Acrom-Bold"
      >
        Offers
      </Text>
    </Box>
  );
}
