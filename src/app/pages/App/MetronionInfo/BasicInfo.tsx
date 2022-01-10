import * as React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { MetronionInfo } from 'src/app/service/Metronion';
import { IconComponent } from 'src/app/components/CurrencyLogo';
import { safeMul, formatNumber } from 'src/utils/helpers';
import { selectGlobal } from 'src/app/globalSlice/selectors';
import { useSelector } from 'react-redux';

interface BasicInfoProps {
  data: MetronionInfo;
}

export function BasicInfo(props: BasicInfoProps) {
  const globalState = useSelector(selectGlobal);
  const lastPrice = props.data ? props.data.lastPrice : 0;

  const usdPrice = safeMul(lastPrice, globalState.avaxPrice);

  return (
    <Box
      bgColor="grayBlur.100"
      border="2px solid"
      borderColor="greenBlur.100"
      borderRadius={14}
      boxShadow="0px 25.6667px 42.7778px rgba(32, 138, 55, 0.28)"
      p={{ base: 6, md: 8 }}
      w={{
        base: '100%',
        xs: '375px',
      }}
      mb={10}
    >
      {/* Name */}
      <Text
        textStyle="appNormal"
        textTransform="uppercase"
        fontFamily="Acrom-Bold"
        mb={3}
      >
        {props.data.name || 'No Name'}
      </Text>
      {/* Last Price */}
      <Flex>
        <Flex alignItems="center">
          <IconComponent
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
            {formatNumber(lastPrice, 2)}
          </Text>
          <Text textStyle="appNormal" color="whiteBlur.100" pt="4px">
            ~ ${formatNumber(usdPrice, 2)}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
