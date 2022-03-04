import { LoadingSpinner } from 'src/app/components/Loading';
import { Box, Center } from '@chakra-ui/react';

export function LoadingBackground() {
  return (
    <Box width="100%" height="100vh" bgColor="pageLayoutBg">
      <Center height="100vh">
        <LoadingSpinner />
      </Center>
    </Box>
  );
}
