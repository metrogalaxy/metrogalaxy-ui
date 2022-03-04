import * as React from 'react';
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Center,
  Flex,
} from '@chakra-ui/react';
import { MetronionOffers } from 'src/app/service/Metronion';
import { MetroTokenComponent } from 'src/app/components/CurrencyLogo';
import { useEthers, addressEqual } from '@quangkeu1995/dappcore';
import {
  formatNumber,
  getRelativeTime,
  shortenAddress,
} from 'src/utils/helpers';
import { TakeOfferModal } from './TakeOfferModal';
import { CancelOfferModal } from './CancelOfferModal';
import { useAccount } from 'src/app/hooks';

interface OffersPanelProps {
  owner: string;
  data: MetronionOffers[] | undefined;
  isLoading: boolean;
  refetchMetronion: () => void;
}

export function OffersPanel(props: OffersPanelProps) {
  const { account } = useEthers();
  const { isActivated } = useAccount();
  let isOwner = false;
  if (account && props.owner) {
    isOwner = addressEqual(account, props.owner);
  }

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
          Offers
        </Text>
      </Box>

      <Box
        overflow="auto"
        maxHeight="300px"
        width="100%"
        maxWidth={{ base: 'calc(100vw - 48px)', md: 'calc(100vw - 96px)' }}
      >
        <Table>
          <Thead position="sticky" top={0} zIndex={2}>
            <Tr>
              <Th pl={{ base: 6, md: 8 }} minWidth="150px">
                <Text
                  textStyle="appNormal"
                  fontSize={{ base: '12px', md: '14px' }}
                  color="whiteBlur.200"
                >
                  From
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
              <Th minWidth="150px">
                <Text
                  textStyle="appNormal"
                  fontSize={{ base: '12px', md: '14px' }}
                  color="whiteBlur.200"
                >
                  Time
                </Text>
              </Th>
              <Th minWidth="150px">
                <Text
                  textStyle="appNormal"
                  fontSize={{ base: '12px', md: '14px' }}
                  color="whiteBlur.200"
                >
                  Action
                </Text>
              </Th>
            </Tr>
          </Thead>
          {/* Table Data */}
          <Tbody>
            {props.data &&
              props.data.map((item, index) => (
                <Tr key={index}>
                  {/* From */}
                  <Td pl={{ base: 6, md: 8 }}>
                    <Text
                      textStyle="appNormal"
                      fontSize={{ base: '12px', md: '14px' }}
                      color="whiteBlur.200"
                    >
                      {shortenAddress(item.from)}
                    </Text>
                  </Td>
                  {/* Price */}
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
                  {/* Timestamp */}
                  <Td>
                    <Text
                      textStyle="appNormal"
                      fontSize={{ base: '12px', md: '14px' }}
                      color="whiteBlur.200"
                    >
                      {getRelativeTime(item.timestamp)}
                    </Text>
                  </Td>
                  {/* Action */}
                  {isOwner &&
                    account &&
                    isActivated &&
                    !addressEqual(item.from, account) && (
                      <Td>
                        <TakeOfferModal
                          metronionId={item.id}
                          offerPrice={item.price}
                          buyer={item.from}
                          refetchMetronion={props.refetchMetronion}
                        />
                      </Td>
                    )}
                  {account && isActivated && addressEqual(item.from, account) && (
                    <Td>
                      <CancelOfferModal
                        metronionId={item.id}
                        refetchMetronion={props.refetchMetronion}
                      />
                    </Td>
                  )}
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
