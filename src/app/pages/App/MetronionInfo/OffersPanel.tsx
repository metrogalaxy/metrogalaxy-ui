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
import { useGetMetronionOffers } from 'src/app/service/Metronion';
import { shortenAddress } from '@quangkeu1995/dappcore';
import { IconComponent } from 'src/app/components/CurrencyLogo';
import { formatNumber, getRelativeTime } from 'src/utils/helpers';

interface OffersPanelProps {
  id: number;
}

export function OffersPanel(props: OffersPanelProps) {
  const { data, isLoading } = useGetMetronionOffers(props.id);

  return (
    <Box
      bgColor="grayBlur.200"
      border="2px solid"
      borderColor="greenBlur.100"
      borderRadius={14}
      boxShadow="0px 25.6667px 42.7778px rgba(32, 138, 55, 0.28)"
      py={{ base: 6, md: 8 }}
      width={{
        base: '100%',
        xs: '375px',
      }}
      maxWidth={{ base: 'min(90vw, 431px)', xs: '100vw' }}
      overflowX="auto"
      whiteSpace="nowrap"
      mb={10}
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

      <Table>
        <Thead>
          <Tr>
            <Th pl={{ base: 6, md: 8 }}>
              <Text
                textStyle="appNormal"
                fontSize={{ base: '12px', md: '14px' }}
                color="whiteBlur.200"
              >
                From
              </Text>
            </Th>
            <Th>
              <Text
                textStyle="appNormal"
                fontSize={{ base: '12px', md: '14px' }}
                color="whiteBlur.200"
              >
                Price
              </Text>
            </Th>
            <Th pl={{ base: 6, md: 8 }}>
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
          {data &&
            data.map((item, index) => (
              <Tr key={index}>
                <Td pl={{ base: 6, md: 8 }}>
                  <Text
                    textStyle="appNormal"
                    fontSize={{ base: '12px', md: '14px' }}
                    color="whiteBlur.200"
                  >
                    {shortenAddress(item.from)}
                  </Text>
                </Td>
                <Td>
                  {item.price ? (
                    <Flex alignItems="center">
                      <IconComponent
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
                    {getRelativeTime(item.timestamp)}
                  </Text>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
      {/* No Data */}
      {(!data || (data && data.length === 0)) && !isLoading && (
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
      {isLoading && (
        <Center mt={4} width="100%">
          <Spinner size="sm" color="white" />
        </Center>
      )}
    </Box>
  );
}
