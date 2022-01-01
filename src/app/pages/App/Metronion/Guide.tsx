import * as React from 'react';
import {
  Box,
  Text,
  Grid,
  Flex,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import BookmarkIcon from './assets/bookmark.webp';
import env from 'src/app/config';

export function Guide() {
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
      mt={10}
      position="relative"
      _after={{
        content: '""',
        display: 'block',
        bgImage: `url(${BookmarkIcon})`,
        bgSize: '38px 48px',
        bgRepeat: 'no-repeat',
        position: 'absolute',
        top: '-12px',
        left: '24px',
        w: '100%',
        h: '100%',
      }}
    >
      <Text
        textStyle="appNormal"
        textTransform="uppercase"
        fontFamily="Acrom-Bold"
        pl={12}
      >
        Guide
      </Text>
      <Grid
        templateRows="repeat(3, 1fr)"
        gap={2}
        mt={3}
        borderBottom="1px dashed"
        borderBottomColor="greenBlur.100"
        pb={5}
      >
        <Flex>
          <Box
            color="#0b1926"
            fontFamily="Acrom-Bold"
            fontSize="12px"
            textStyle="appNormal"
            bgColor="#da3f76"
            boxShadow="0px 2px 0px rgba(142, 14, 59, 0.68)"
            borderRadius="50%"
            w={5}
            h={5}
            textAlign="center"
            mr={3}
          >
            1
          </Box>
          <Text textStyle="appNormal">Connect Wallet</Text>
        </Flex>
        <Flex>
          <Box
            color="#0b1926"
            fontFamily="Acrom-Bold"
            fontSize="12px"
            textStyle="appNormal"
            bgColor="#da3f76"
            boxShadow="0px 2px 0px rgba(142, 14, 59, 0.68)"
            borderRadius="50%"
            w={5}
            h={5}
            textAlign="center"
            mr={3}
          >
            2
          </Box>
          <Text textStyle="appNormal">Choose Quantity</Text>
        </Flex>
        <Flex>
          <Box
            color="#0b1926"
            fontFamily="Acrom-Bold"
            fontSize="12px"
            textStyle="appNormal"
            bgColor="#da3f76"
            boxShadow="0px 2px 0px rgba(142, 14, 59, 0.68)"
            borderRadius="50%"
            w={5}
            h={5}
            textAlign="center"
            mr={3}
          >
            3
          </Box>
          <Text textStyle="appNormal">Click Mint</Text>
        </Flex>
      </Grid>
      <Box mt={5}>
        <UnorderedList color="#FFCB4E" textStyle="appNormal" fontStyle="italic">
          <ListItem>
            Each Metronion costs {env.metronionSale.metronionUnitPrice}{' '}
            {env.chainToken}
          </ListItem>
          <ListItem>
            You can buy up to {env.metronionSale.privateCap} Metronion in
            Private Sale
          </ListItem>
          <ListItem>
            You can buy up to {env.metronionSale.publicCap} Metronions in Public
            Sale
          </ListItem>
          {/* <ListItem>All Metronions are going to be revealed on Oct 31 2021</ListItem> */}
        </UnorderedList>
      </Box>
    </Box>
  );
}
