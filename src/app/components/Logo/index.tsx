import * as React from 'react';
import { Image, Flex, Text, Center } from '@chakra-ui/react';
import LogoImg from 'src/app/assets/logo.svg';

export const Logo = () => {
  return (
    <Flex
      direction="row"
      fontSize={{
        base: 'md',
      }}
      fontWeight="bold"
      fontFamily="Acrom"
    >
      <Image src={LogoImg} width="52px" height="52px" />
      <Center ml="1.5">
        <Text as="span" color="white" fontWeight={700}>
          Metro
        </Text>
        <Text as="span" color="green.200" fontWeight={700}>
          Galaxy
        </Text>
      </Center>
    </Flex>
  );
};
