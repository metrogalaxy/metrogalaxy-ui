import * as React from 'react';
import {
  Box,
  Text,
  Link,
  Grid,
  GridItem,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Tooltip,
  Button,
  Center,
  Stack,
  useDisclosure,
  useClipboard,
} from '@chakra-ui/react';
import { CopyIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { ethers } from 'ethers';
import {
  useEtherBalance,
  useEthers,
  shortenAddress,
} from '@quangkeu1995/dappcore';
import { useAccount, useButtonSize } from 'src/app/hooks';
import { formatNumber } from 'src/utils/helpers';
import { GetExplorerAddressLink } from 'src/app/config/constants';
import { IconComponent } from 'src/app/components/CurrencyLogo';
import env from 'src/app/config';

export function AccountInfo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useAccount();
  const { account } = useEthers();

  const { hasCopied, onCopy } = useClipboard(account!);

  const ethBalance = useEtherBalance(account);
  // const formattedAddress = formatAddress(account!, 4, -3);
  const formattedAddress = shortenAddress(account!);
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
            onClick={onOpen}
          >
            <Text>{formattedAddress}</Text>
          </Box>
        </GridItem>
      </Grid>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text textStyle="appTitle">Wallet</Text>
          </DrawerHeader>

          <DrawerBody>
            <Flex alignItems="center">
              <Text
                textStyle="appTitle"
                fontSize={{ base: '22px', lg: '28px' }}
                mr={2}
              >
                {formattedAddress}
              </Text>

              <Tooltip
                label={hasCopied ? 'Copied' : 'Copy to clipboard'}
                closeDelay={500}
              >
                <CopyIcon
                  color="white"
                  mr={2}
                  width="16px"
                  height="16px"
                  cursor="pointer"
                  onClick={onCopy}
                />
              </Tooltip>

              <Tooltip label="View on explorer">
                <ExternalLinkIcon
                  color="white"
                  width="16px"
                  height="16px"
                  cursor="pointer"
                  onClick={() => {
                    window.open(accountExplorerLink, '_blank');
                  }}
                />
              </Tooltip>
            </Flex>

            <Stack
              mt={6}
              pb={3}
              borderBottom="1px dashed"
              borderBottomColor="whiteBlur.300"
            >
              <Box>
                <Link href="/inventory">
                  <Text
                    textStyle="appNormal"
                    _hover={{
                      color: 'green.200',
                    }}
                  >
                    Inventory
                  </Text>
                </Link>
              </Box>
            </Stack>

            <Stack mt={4}>
              <Text textStyle="appNormal" color="white">
                Balances
              </Text>
              <Flex justifyContent="space-between">
                <Flex>
                  <IconComponent
                    mr={2}
                    w={{ base: 4, sm: 6 }}
                    h={{ base: 4, sm: 6 }}
                  />
                  <Text>{env.chainToken}</Text>
                </Flex>

                <Text>{formattedBalance ? formattedBalance : 0}</Text>
              </Flex>
            </Stack>

            <Center width="100%" mt={10}>
              <Button variant="outline" size={useButtonSize()} onClick={logout}>
                Disconnect
              </Button>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
