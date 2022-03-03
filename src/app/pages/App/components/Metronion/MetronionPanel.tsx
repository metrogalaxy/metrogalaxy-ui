import * as React from 'react';
import { Box, Grid, Image, Text, Flex, GridItem } from '@chakra-ui/react';
import { MetronionInfo } from 'src/app/service/Metronion';
import { formatNumber } from 'src/utils/helpers';
import MaleIcon from 'src/app/assets/icon/male.svg';
import FemaleIcon from 'src/app/assets/icon/female.svg';
import { MetroTokenComponent } from 'src/app/components/CurrencyLogo';
import { useNavigate } from 'react-router-dom';
import { UNKNOWN_METRONION_IMG_URL } from 'src/app/config/constants';

interface MetronionPanelProps {
  data: MetronionInfo[];
}

export function MetronionPanel(props: MetronionPanelProps) {
  return (
    <Grid
      width="fit-content"
      templateColumns={{
        base: 'repeat(2, 1fr)',
        xl: 'repeat(3, 1fr)',
      }}
      templateRows={{
        base: 'auto',
        xl: 'repeat(2, 1fr)',
      }}
      mb={8}
      gap={{ base: 4, xl: 10 }}
      rowGap={{ base: 4, xl: 10 }}
      justifyItems="center"
    >
      {props.data.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Grid>
  );
}

interface ItemProps {
  item: MetronionInfo;
}

function Item(props: ItemProps) {
  const navigate = useNavigate();

  const gender = props.item.gender;
  const lastPrice = props.item.lastPrice ? props.item.lastPrice : 0;
  const currentPrice = props.item.currentPrice ? props.item.currentPrice : 0;
  const topBid = props.item.topBid ? props.item.topBid : 0;

  const onClickItem = () => {
    navigate('/metronion/' + props.item.id);
  };

  return (
    <Box
      bgColor="grayBlur.200"
      border="2px solid"
      borderColor="greenBlur.100"
      borderRadius={14}
      minWidth={{ base: '160px', md: '180px' }}
      width={{ base: '160px', md: 'fit-content' }}
      height="fit-content"
      _hover={{
        borderColor: 'blue.400',
      }}
      cursor="pointer"
      position="relative"
      onClick={onClickItem}
    >
      {/* Gender */}
      {gender && (
        <Box position="absolute" top="10px" right="10px">
          <Image
            src={gender === 'male' ? MaleIcon : FemaleIcon}
            width={{ base: '20px', md: '24px' }}
            height={{ base: '20px', md: '24px' }}
          />
        </Box>
      )}
      {/* Avatar */}
      <Flex
        minWidth={{ base: 'auto', xl: '220px' }}
        pt={{ base: 4, md: 6 }}
        mb={{ base: 4, md: 6 }}
        justifyContent="center"
      >
        <Image
          src={props.item.image || UNKNOWN_METRONION_IMG_URL}
          width={{ base: 'auto' }}
          height={{ base: '130px', lg: '180px' }}
        />
      </Flex>
      {/* Title */}
      <Box
        bg="gray.500"
        minWidth={{ lg: '230px' }}
        px={{ base: 4, md: 5, lg: 5 }}
        py={{ base: 2, md: 4 }}
        borderBottomLeftRadius={14}
        borderBottomRightRadius={14}
      >
        {/* Title */}
        <Flex justifyContent="space-between" mb={2}>
          <Text textStyle="appNormal">{`Metronion #${props.item.id}`}</Text>
        </Flex>
        {/* Unlisted */}
        {lastPrice === 0 && currentPrice === 0 && topBid === 0 && (
          <Grid
            templateRows={{ base: 'repeat(2, 1fr)', lg: '1fr' }}
            templateColumns={{ lg: 'repeat(2, 1fr)' }}
            rowGap={0}
          >
            <Text textStyle="appNormal" color="whiteBlur.100">
              Unlisted
            </Text>
          </Grid>
        )}
        {/* Listed current price */}
        {currentPrice !== 0 && (
          <Grid
            templateRows={{ base: 'repeat(2, 1fr)', lg: '1fr' }}
            templateColumns={{ lg: 'repeat(2, 1fr)' }}
            rowGap={0}
          >
            <GridItem>
              <Text textStyle="appNormal" color="whiteBlur.100">
                For Sale
              </Text>
            </GridItem>
            <GridItem justifySelf={{ lg: 'flex-end' }}>
              <Flex alignItems="center">
                <MetroTokenComponent
                  width={{ base: '14px', md: '16px' }}
                  height={{ base: '14px', md: '16px' }}
                  mr={2}
                />
                <Text textStyle="appNormal" fontFamily="Acrom-Bold">
                  {formatNumber(currentPrice, 2)}
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        )}
        {/* Top Bid */}
        {currentPrice === 0 && topBid !== 0 && (
          <Grid
            templateRows={{ base: 'repeat(2, 1fr)', lg: '1fr' }}
            templateColumns={{ lg: 'repeat(2, 1fr)' }}
            rowGap={0}
          >
            <GridItem>
              <Text textStyle="appNormal" color="whiteBlur.100">
                Top Bid
              </Text>
            </GridItem>
            <GridItem justifySelf={{ lg: 'flex-end' }}>
              <Flex alignItems="center">
                <MetroTokenComponent
                  width={{ base: '14px', md: '16px' }}
                  height={{ base: '14px', md: '16px' }}
                  mr={2}
                />
                <Text textStyle="appNormal" fontFamily="Acrom-Bold">
                  {formatNumber(topBid, 2)}
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        )}
        {/* Last Price */}
        {currentPrice === 0 && topBid === 0 && lastPrice !== 0 && (
          <Grid
            templateRows={{ base: 'repeat(2, 1fr)', lg: '1fr' }}
            templateColumns={{ lg: 'repeat(2, 1fr)' }}
            rowGap={0}
          >
            <GridItem>
              <Text textStyle="appNormal" color="whiteBlur.100">
                Last Price
              </Text>
            </GridItem>
            <GridItem justifySelf={{ lg: 'flex-end' }}>
              <Flex alignItems="center">
                <MetroTokenComponent
                  width={{ base: '14px', md: '16px' }}
                  height={{ base: '14px', md: '16px' }}
                  mr={2}
                />
                <Text textStyle="appNormal" fontFamily="Acrom-Bold">
                  {formatNumber(lastPrice, 2)}
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
