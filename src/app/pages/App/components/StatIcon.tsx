import * as React from 'react';
import { Box, Image } from '@chakra-ui/react';

export function StatIcon({ image }) {
  return (
    <Box bgColor="gray.500" borderRadius="50%" p={1}>
      <Image borderRadius="50%" src={image} w="24px" h="24px" />
    </Box>
  );
}
