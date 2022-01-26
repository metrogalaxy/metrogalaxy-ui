import * as React from 'react';
import { Box, Grid, Image, Text, Flex } from '@chakra-ui/react';
import { Accessories } from 'src/app/service/Accessories';
import { selectGlobal } from 'src/app/globalSlice/selectors';
import { useSelector } from 'react-redux';
import { safeMul, formatNumber } from 'src/utils/helpers';
import { IconComponent } from 'src/app/components/CurrencyLogo';
// import { useNavigate } from 'react-router-dom';

interface AccessoriesPanelProps {
  data: Accessories[];
}

export function AccessoriesPanel(props: AccessoriesPanelProps) {
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
  item: Accessories;
}

function Item(props: ItemProps) {
  // const navigate = useNavigate();
  const globalState = useSelector(selectGlobal);

  const lastPrice = props.item.lastPrice ? props.item.lastPrice : 0;

  const usdPrice = safeMul(lastPrice, globalState.avaxPrice);

  const onClickItem = () => {
    // TODO implement accessory info page first
    // navigate('/accessory/' + props.item.id);
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
      onClick={onClickItem}
    >
      <Flex
        minWidth={{ base: 'auto', xl: '220px' }}
        pt={{ base: 4, md: 6 }}
        mb={{ base: 4, md: 6 }}
        justifyContent="center"
      >
        <Image
          src={props.item.image}
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
          <Text textStyle="appNormal">{props.item.name}</Text>
        </Flex>
        {/* Last Price */}
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
      </Box>
    </Box>
  );
}
