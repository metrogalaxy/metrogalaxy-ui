import * as React from 'react';
import { Box, Text, Flex, Image, Grid, GridItem } from '@chakra-ui/react';
import { MetronionInfo } from 'src/app/service/Metronion';
import { MetroTokenComponent } from 'src/app/components/CurrencyLogo';
import { safeMul, formatNumber } from 'src/utils/helpers';
import { selectGlobal } from 'src/app/globalSlice/selectors';
import { useSelector } from 'react-redux';
import MaleIcon from 'src/app/assets/icon/male.svg';
import FemaleIcon from 'src/app/assets/icon/female.svg';
import { useAccount } from 'src/app/hooks';
import { useEthers, addressEqual } from '@quangkeu1995/dappcore';
import { ListMetronionModal } from './ListMetronionModal';
import { DelistMetronionModal } from './DelistMetronionModal';
import { BuyMetronionModal } from './BuyMetronionModal';
import { OfferMetronionModal } from './OfferMetronionModal';

interface BasicInfoProps {
  data: MetronionInfo;
  refetchMetronion: () => void;
}

export function BasicInfo(props: BasicInfoProps) {
  const { account } = useEthers();
  const { isActivated } = useAccount();
  const globalState = useSelector(selectGlobal);
  const lastPrice = props.data.lastPrice ? props.data.lastPrice : 0;

  const currentPrice = props.data.currentPrice ? props.data.currentPrice : 0;
  const listedBy = props.data.listedBy;
  const topBid = props.data.topBid ? props.data.topBid : 0;
  const currentPriceUSD = safeMul(currentPrice, globalState.metroPrice);

  const gender = props.data.gender;

  let isOwner = false;
  if (account) {
    isOwner = addressEqual(account, props.data.owner);
  }

  let isListed = false;
  if (listedBy && account) {
    isListed = addressEqual(account, listedBy);
  }

  return (
    <Box
      bgColor="grayBlur.200"
      border="2px solid"
      borderColor="greenBlur.100"
      borderRadius={14}
      p={{ base: 6, md: 8 }}
      width={{
        base: '100%',
      }}
      position="relative"
    >
      <Grid
        templateColumns={{ base: '1fr', md: 'auto auto' }}
        templateRows={{ base: 'auto auto', md: '1fr' }}
        rowGap={6}
      >
        {/* Basic Info */}
        <GridItem>
          {/* Name */}
          <Box position="relative" width="fit-content">
            <Text
              textStyle="appNormal"
              fontFamily="Acrom-Bold"
              mb={3}
              color={props.data.name ? 'white' : 'white.100'}
            >
              {props.data.name ? props.data.name : 'No Name'}
            </Text>
            {/* Gender */}
            {gender && (
              <Box
                position="absolute"
                top="50%"
                right="-35px"
                transform="translateY(-50%)"
              >
                <Image
                  src={gender === 'male' ? MaleIcon : FemaleIcon}
                  width={{ base: '24px', md: '28px' }}
                  height={{ base: '24px', md: '28px' }}
                />
              </Box>
            )}
          </Box>
          {/* Current Price */}
          {currentPrice === 0 ? (
            <Box>
              <Text textStyle="appNormal" color="whiteBlur.100">
                Unlisted
              </Text>
            </Box>
          ) : (
            <Flex>
              <Flex alignItems="center">
                <MetroTokenComponent
                  width={{ base: '18px', md: '24px' }}
                  height={{ base: '18px', md: '24px' }}
                  mr={2}
                />
                <Text
                  textStyle="appNormal"
                  fontFamily="Acrom-Bold"
                  mr={2}
                  fontSize={{ lg: '24px' }}
                >
                  {formatNumber(currentPrice, 2)}
                </Text>
                <Text textStyle="appNormal" color="whiteBlur.100" pt="4px">
                  ~ ${formatNumber(currentPriceUSD, 2)}
                </Text>
              </Flex>
            </Flex>
          )}
          {/* Last Price and Top Bid */}
          {(topBid !== 0 || lastPrice !== 0) && (
            <Grid
              mt={4}
              // gridTemplateColumns={{ xxs: 'repeat(2, auto)' }}
              gap={2}
            >
              {/* Top Bid */}
              {topBid !== 0 && (
                <Flex alignItems="center">
                  <Text textStyle="appNormal" color="white.100" mr={3}>
                    Top Bid
                  </Text>
                  <MetroTokenComponent
                    width={{ base: '12px', md: '16px' }}
                    height={{ base: '12px', md: '16px' }}
                    mr={1}
                  />
                  <Text textStyle="appNormal" fontFamily="Acrom-Bold">
                    {formatNumber(topBid, 2)}
                  </Text>
                </Flex>
              )}

              {/* Last Price */}
              {lastPrice !== 0 && (
                <Flex alignItems="center">
                  <Text textStyle="appNormal" color="white.100" mr={3}>
                    Last
                  </Text>
                  <MetroTokenComponent
                    width={{ base: '12px', md: '16px' }}
                    height={{ base: '12px', md: '16px' }}
                    mr={1}
                  />
                  <Text textStyle="appNormal" fontFamily="Acrom-Bold">
                    {formatNumber(lastPrice, 2)}
                  </Text>
                </Flex>
              )}
            </Grid>
          )}
        </GridItem>

        {/* Button Group */}
        <GridItem justifyContent="flex-end">
          {/* Button Group List and Delist */}
          {isOwner && isActivated && (
            <Flex justifyContent="flex-end">
              <Flex width="100%" maxWidth="130px" justifyContent="flex-end">
                <ListMetronionModal
                  metronionId={props.data.id}
                  refetchMetronion={props.refetchMetronion}
                />
              </Flex>
            </Flex>
          )}
          {isListed && isActivated && (
            <Flex justifyContent="flex-end">
              <Flex width="100%" maxWidth="130px" justifyContent="flex-end">
                <DelistMetronionModal
                  metronionId={props.data.id}
                  refetchMetronion={props.refetchMetronion}
                />
              </Flex>
            </Flex>
          )}

          {!isOwner && !isListed && isActivated && (
            <Flex justifyContent="flex-end">
              <Flex width="100%" maxWidth="130px" justifyContent="flex-end">
                {props.data.listedBy && (
                  <BuyMetronionModal
                    metronionId={props.data.id}
                    price={currentPrice}
                    seller={props.data.listedBy}
                    refetchMetronion={props.refetchMetronion}
                  />
                )}
              </Flex>
              <Flex
                width="100%"
                maxWidth="130px"
                ml={2}
                justifyContent="flex-end"
              >
                <OfferMetronionModal
                  metronionId={props.data.id}
                  refetchMetronion={props.refetchMetronion}
                />
              </Flex>
            </Flex>
          )}
        </GridItem>
      </Grid>
    </Box>
  );
}
