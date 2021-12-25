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
} from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useEtherBalance, useEthers } from '@quangkeu1995/dappcore';
import { useAccount } from 'src/app/hooks';
import { formatAddress, formatNumber } from 'src/utils/helpers';
import ENV from 'src/app/config/env';
import { GetExplorerAddressLink } from 'src/app/config/constants';

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
    accountExplorerLink = GetExplorerAddressLink(ENV.CHAIN_ID, account);
  }

  return (
    <Box color="white" fontSize={{ base: 'sm', sm: 'md' }}>
      <Grid templateColumns={{ md: 'auto auto' }} gap={2} justifyItems="end">
        <Box
          bgColor="gray.200"
          py={{ base: 2, sm: 3 }}
          px={{ base: 7, sm: 9 }}
          border="2px solid"
          borderColor="green.300"
          borderRadius="50px"
        >
          {ENV.CHAIN_NAME}
        </Box>
        <Popover>
          <PopoverTrigger>
            <Box
              bgColor="gray.200"
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
                  Balance: {formattedBalance} {ENV.CHAIN_TOKEN}
                </Link>
                <Link onClick={logout}>Logout</Link>
              </Grid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Grid>
    </Box>
  );
}
