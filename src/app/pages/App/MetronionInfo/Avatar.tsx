import * as React from 'react';
import { Box, Center, Image } from '@chakra-ui/react';

interface AvatarProps {
  image: string;
}

export function Avatar(props: AvatarProps) {
  return (
    <Box
      bgColor="grayBlur.200"
      border="2px solid"
      borderColor="greenBlur.100"
      borderRadius={14}
      // boxShadow="0px 25.6667px 42.7778px rgba(32, 138, 55, 0.28)"
      p={{ base: 6, md: 8 }}
      width={{
        base: '100%',
      }}
    >
      <Center>
        <Image
          src={props.image}
          width="auto"
          height="auto"
          maxHeight={{ sm: '500px' }}
        />
      </Center>
    </Box>
  );
}
