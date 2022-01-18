import * as React from 'react';
import { Box, Text, Flex, Image, Grid, Button } from '@chakra-ui/react';
import { MetronionInfo } from 'src/app/service/Metronion';
import { IconComponent } from 'src/app/components/CurrencyLogo';
import { safeMul, formatNumber } from 'src/utils/helpers';
import { selectGlobal } from 'src/app/globalSlice/selectors';
import { useSelector } from 'react-redux';
import MaleIcon from 'src/app/assets/icon/male.svg';
import FemaleIcon from 'src/app/assets/icon/female.svg';
import { useButtonSize, useAccount } from 'src/app/hooks';
import { useEthers, addressEqual } from '@quangkeu1995/dappcore';

interface BasicInfoProps {
  data: MetronionInfo;
}

export function BasicInfo(props: BasicInfoProps) {
  const { account } = useEthers();
  const { isActivated } = useAccount();
  const globalState = useSelector(selectGlobal);
  const lastPrice = props.data.lastPrice ? props.data.lastPrice : 0;

  const usdPrice = safeMul(lastPrice, globalState.avaxPrice);

  const gender = props.data.gender;

  const buttonSize = useButtonSize();

  let isOwner = false;
  if (account) {
    isOwner = addressEqual(account, props.data.owner);
  }

  return (
    <Box
      bgColor="grayBlur.200"
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
      position="relative"
    >
      {/* Name */}
      {props.data.name ? (
        <Text
          textStyle="appNormal"
          textTransform="uppercase"
          fontFamily="Acrom-Bold"
          mb={3}
        >
          {props.data.name}
        </Text>
      ) : (
        <Text
          textStyle="appNormal"
          textTransform="uppercase"
          fontFamily="Acrom-Bold"
          mb={3}
          color="white.100"
        >
          No Name
        </Text>
      )}
      {/* Last Price */}
      {lastPrice === 0 ? (
        <Box>
          <Text textStyle="appNormal" color="whiteBlur.100">
            Unlisted
          </Text>
        </Box>
      ) : (
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
      )}

      {/* Button Group */}
      {!isOwner && (
        <Grid mt={8} gridTemplateColumns="repeat(2, 1fr)" gap={4}>
          {lastPrice !== 0 && (
            <Button variant="solid" size={buttonSize} disabled={!isActivated}>
              Buy
            </Button>
          )}
          <Button variant="outline" size={buttonSize} disabled={!isActivated}>
            Make Offer
          </Button>
        </Grid>
      )}

      {/* Gender */}
      {gender && (
        <Box position="absolute" top="10px" right="10px">
          <Image
            src={gender === 'male' ? MaleIcon : FemaleIcon}
            width={{ base: '24px', md: '28px' }}
            height={{ base: '24px', md: '28px' }}
          />
        </Box>
      )}
    </Box>
  );
}
