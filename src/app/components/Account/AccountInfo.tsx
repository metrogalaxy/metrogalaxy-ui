import * as React from 'react';
import {
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Link,
  Grid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useEtherBalance, useEthers } from '@quangkeu1995/dappcore';
import { useAccount } from 'src/app/hooks';
import { formatAddress, formatNumber } from 'src/utils/helpers';
import { GetExplorerAddressLink } from 'src/app/config/constants';
import { IconComponent } from 'src/app/components/CurrencyLogo';
import env from 'src/app/config';

export function AccountInfo() {
  const { logout } = useAccount();
  const { account } = useEthers();

  const ethBalance = useEtherBalance(account);
  const formattedAddress = formatAddress(account!, 4, -3);
  let formattedBalance;

  if (ethBalance) {
    formattedBalance = ethers.utils.formatEther(ethBalance);
    formattedBalance = formatNumber(formattedBalance, 4);
  }

  let accountExplorerLink;
  if (account) {
    accountExplorerLink = GetExplorerAddressLink(env.chainId, account);
  }

  return (
    <Box color="white" fontSize={{ base: 'sm', sm: 'md' }}>
      <Grid
        templateColumns={{ base: '1fr', xl: 'auto auto' }}
        templateRows={{ base: 'repeat(2, 1fr)', xl: '1fr' }}
        gap={2}
        justifyItems={{ base: 'start', xl: 'end' }}
        alignItems="center"
      >
        <GridItem>
          <Flex alignItems="center" mr={2}>
            <IconComponent
              mr={2}
              w={{ base: 4, sm: 6 }}
              h={{ base: 4, sm: 6 }}
            />

            <Text>
              {formattedBalance ? formattedBalance : 0} {env.chainToken}
            </Text>
          </Flex>
        </GridItem>
        <GridItem rowStart={{ base: 1 }} colStart={{ xl: 2 }}>
          <Popover>
            <PopoverTrigger>
              <Box
                bgColor="greenBlur.200"
                py={{ base: 2, sm: 3 }}
                px={{ base: 7, sm: 9 }}
                border="2px solid"
                borderColor="green.300"
                borderRadius="50px"
                _hover={{
                  cursor: 'pointer',
                }}
              >
                <Text>{formattedAddress}</Text>
              </Box>
            </PopoverTrigger>
            <PopoverContent
              bg="gray.200"
              color="white"
              fontSize={{ base: 'sm', sm: 'md' }}
              pb={2}
              px={2}
              border="2px solid"
              borderColor="green.300"
              width="fit-content"
            >
              <PopoverArrow
                bg="gray.200"
                borderTop="2px solid"
                borderLeft="2px solid"
                borderColor="green.300"
                top="-2px !important"
              />
              {/* <PopoverCloseButton /> */}
              <PopoverBody>
                <Grid templateRows="repeat(2, 1fr)" gap={2} mt={3}>
                  <Link href={accountExplorerLink} target="_blank">
                    <Text>{env.chainName}</Text>
                  </Link>
                  <Link onClick={logout}>Logout</Link>
                </Grid>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </GridItem>
      </Grid>
    </Box>
  );
}
