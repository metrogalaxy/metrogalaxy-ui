import * as React from 'react';
import { Box, Grid, Image, Text, Flex } from '@chakra-ui/react';
import { Metronions } from 'src/app/service/Metronion';
import { selectGlobal } from 'src/app/globalSlice/selectors';
import { useSelector } from 'react-redux';
import { safeMul, formatNumber } from 'src/utils/helpers';
import MaleIcon from 'src/app/assets/icon/male.svg';
import FemaleIcon from 'src/app/assets/icon/female.svg';
import { IconComponent } from 'src/app/components/CurrencyLogo';
import { useNavigate } from 'react-router-dom';
import { UNKNOWN_METRONION_IMG_URL } from 'src/app/config/constants';

interface MetronionPanelProps {
  data: Metronions[];
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
  item: Metronions;
}

function Item(props: ItemProps) {
  const navigate = useNavigate();
  const globalState = useSelector(selectGlobal);

  const gender = props.item.gender;
  const lastPrice = props.item.lastPrice ? props.item.lastPrice : 0;

  const usdPrice = safeMul(lastPrice, globalState.avaxPrice);

  const onClickItem = () => {
    navigate('/metronion/' + props.item.id);
  };

  return (
    <Box
      bgColor="grayBlur.200"
      border="2px solid"
      borderColor="greenBlur.100"
      borderRadius={14}
      boxShadow="0px 25.6667px 42.7778px rgba(32, 138, 55, 0.28)"
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
      {gender && (
        <Box position="absolute" top="10px" right="10px">
          <Image
            src={gender === 'male' ? MaleIcon : FemaleIcon}
            width={{ base: '20px', md: '24px' }}
            height={{ base: '20px', md: '24px' }}
          />
        </Box>
      )}
      <Flex
        minWidth={{ base: 'auto', xl: '220px' }}
        pt={{ base: 4, md: 6 }}
        mb={{ base: 4, md: 6 }}
        justifyContent="center"
      >
        <Image
          src={props.item.image || UNKNOWN_METRONION_IMG_URL}
          width={{ base: 'auto' }}
          height={{ base: '130px', xl: '160px' }}
        />
      </Flex>
      <Box
        bg="gray.500"
        px={{ base: 4, md: 5, lg: 6 }}
        py={{ base: 2, md: 4 }}
        borderBottomLeftRadius={14}
        borderBottomRightRadius={14}
      >
        {/* Title */}
        <Flex justifyContent="space-between" mb={2}>
          <Text textStyle="appNormal">{`Metronion #${props.item.id}`}</Text>
        </Flex>
        {/* Last Price */}
        {lastPrice === 0 ? (
          <Box>
            <Text textStyle="appNormal" color="whiteBlur.100">
              Unlisted
            </Text>
          </Box>
        ) : (
          <Flex justifyContent="space-between" flexWrap="wrap">
            <Flex alignItems="center">
              <IconComponent
                width={{ base: '14px', md: '16px' }}
                height={{ base: '14px', md: '16px' }}
                mr={2}
              />
              <Text textStyle="appNormal" fontFamily="Acrom-Bold" mr={2}>
                {formatNumber(lastPrice, 2)}
              </Text>
            </Flex>
            <Box>
              <Text textStyle="appNormal" color="whiteBlur.100">
                ~ ${formatNumber(usdPrice, 2)}
              </Text>
            </Box>
          </Flex>
        )}
      </Box>
    </Box>
  );
}
