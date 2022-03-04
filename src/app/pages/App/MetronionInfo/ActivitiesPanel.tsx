import * as React from 'react';
import {
  Box,
  Text,
  Flex,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { MetronionActivities } from 'src/app/service/Metronion';
import { MetroTokenComponent } from 'src/app/components/CurrencyLogo';
import {
  formatNumber,
  getRelativeTime,
  shortenAddress,
} from 'src/utils/helpers';
import { GetExplorerTransactionLink } from 'src/app/config/constants';
import env from 'src/app/config/';

interface ActivitiesPanelProps {
  data: MetronionActivities[] | undefined;
  isLoading: boolean;
}

export function ActivitiesPanel(props: ActivitiesPanelProps) {
  return (
    <Box
      bgColor="grayBlur.200"
      border="2px solid"
      borderColor="greenBlur.100"
      borderRadius={14}
      py={{ base: 6, md: 8 }}
      width={{
        base: '100%',
      }}
      position="relative"
      css={{
        '&::-webkit-scrollbar': {
          height: '6px',
        },
        '&::-webkit-scrollbar-track': {
          width: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(98, 228, 127, 0.8)',
          borderRadius: 14,
        },
      }}
    >
      <Box px={{ base: 6, md: 8 }} pb={{ base: 3, md: 4 }}>
        <Text
          textStyle="appNormal"
          textTransform="uppercase"
          fontFamily="Acrom-Bold"
        >
          Activities
        </Text>
      </Box>

      <Box
        overflow="auto"
        maxHeight="300px"
        width="100%"
        maxWidth={{ base: 'calc(100vw - 48px)', md: 'calc(100vw - 96px)' }}
      >
        <Table>
          <Thead position="sticky" top={0}>
            <Tr>
              <Th pl={{ base: 6, md: 8 }} minWidth="150px">
                <Text
                  textStyle="appNormal"
                  fontSize={{ base: '12px', md: '14px' }}
                  color="whiteBlur.200"
                >
                  Event
                </Text>
              </Th>
              <Th minWidth="165px">
                <Text
                  textStyle="appNormal"
                  fontSize={{ base: '12px', md: '14px' }}
                  color="whiteBlur.200"
                >
                  From
                </Text>
              </Th>
              <Th minWidth="165px">
                <Text
                  textStyle="appNormal"
                  fontSize={{ base: '12px', md: '14px' }}
                  color="whiteBlur.200"
                >
                  To
                </Text>
              </Th>
              <Th minWidth="150px">
                <Text
                  textStyle="appNormal"
                  fontSize={{ base: '12px', md: '14px' }}
                  color="whiteBlur.200"
                >
                  Price
                </Text>
              </Th>
              <Th minWidth="180px">
                <Text
                  textStyle="appNormal"
                  fontSize={{ base: '12px', md: '14px' }}
                  color="whiteBlur.200"
                >
                  Time
                </Text>
              </Th>
            </Tr>
          </Thead>
          {/* Table Data */}
          <Tbody>
            {props.data &&
              props.data.map((item, index) => (
                <Tr key={index}>
                  <Td pl={{ base: 6, md: 8 }}>
                    <Text
                      textStyle="appNormal"
                      fontSize={{ base: '12px', md: '14px' }}
                      color="whiteBlur.200"
                    >
                      {formatActivityType(item.activityType)}
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      textStyle="appNormal"
                      fontSize={{ base: '12px', md: '14px' }}
                      color="whiteBlur.200"
                    >
                      {shortenAddress(item.from)}
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      textStyle="appNormal"
                      fontSize={{ base: '12px', md: '14px' }}
                      color="whiteBlur.200"
                    >
                      {shortenAddress(item.to)}
                    </Text>
                  </Td>
                  <Td>
                    {item.price ? (
                      <Flex alignItems="center">
                        <MetroTokenComponent
                          width={{ base: '12px', md: '14px' }}
                          height={{ base: '12px', md: '14px' }}
                          mr={2}
                        />
                        <Text
                          textStyle="appNormal"
                          fontSize={{ base: '12px', md: '14px' }}
                          color="whiteBlur.200"
                        >
                          {formatNumber(item.price, 2)}
                        </Text>
                      </Flex>
                    ) : (
                      <Text></Text>
                    )}
                  </Td>
                  <Td>
                    <Text
                      textStyle="appNormal"
                      fontSize={{ base: '12px', md: '14px' }}
                      color="whiteBlur.200"
                    >
                      <Link
                        href={GetExplorerTransactionLink(
                          env.chainId,
                          item.txHash,
                        )}
                        isExternal
                      >
                        {getRelativeTime(item.timestamp)}{' '}
                        <ExternalLinkIcon mx="2px" />
                      </Link>
                    </Text>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
      {/* No Data */}
      {(!props.data || (props.data && props.data.length === 0)) &&
        !props.isLoading && (
          <Center mt={4} width="100%">
            <Text
              textStyle="appNormal"
              fontSize={{ base: '12px', md: '14px' }}
              textTransform="uppercase"
              color="whiteBlur.200"
            >
              No Data
            </Text>
          </Center>
        )}
      {/* Loading */}
      {props.isLoading && (
        <Center mt={4} width="100%">
          <Spinner size="sm" color="white" />
        </Center>
      )}
    </Box>
  );
}

function formatActivityType(input: string): string {
  return input.split('_').join(' ').toUpperCase();
}
