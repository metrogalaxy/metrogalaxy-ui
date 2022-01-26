import * as React from 'react';
import { Box, Text, Grid } from '@chakra-ui/react';
import { useTimer } from 'react-timer-hook';
import { Round } from './index';

interface CountdownProps {
  deadline: Date;
  round?: Round;
}

export function Countdown(props: CountdownProps) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: props.deadline,
    onExpire: () => {
      window.location.reload();
    },
  });

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
      h="fit-content"
    >
      <Text
        textStyle="appNormal"
        fontFamily="Acrom-Bold"
        textTransform="uppercase"
        mb={4}
      >
        {props.round === Round.ENDED
          ? 'Sale Ends In'
          : `${props.round} Starts In`}
      </Text>
      <Grid
        maxW="300px"
        templateColumns="repeat(4, 1fr)"
        gap={2}
        textStyle="appNormal"
        textTransform="uppercase"
        mb={4}
      >
        <Box
          bgColor="grayBlur.300"
          borderRadius={8}
          p={3}
          textAlign="center"
          fontFamily="Acrom-Bold"
        >
          {days}D
        </Box>
        <Box
          bgColor="grayBlur.300"
          borderRadius={8}
          p={3}
          textAlign="center"
          fontFamily="Acrom-Bold"
        >
          {hours}H
        </Box>
        <Box
          bgColor="grayBlur.300"
          borderRadius={8}
          p={3}
          textAlign="center"
          fontFamily="Acrom-Bold"
        >
          {minutes}M
        </Box>
        <Box
          bgColor="grayBlur.300"
          borderRadius={8}
          p={3}
          textAlign="center"
          fontFamily="Acrom-Bold"
        >
          {seconds}S
        </Box>
      </Grid>
      <Text textStyle="appNormal" color="whiteBlur.100">
        {props.deadline.toDateString()}, {props.deadline.toLocaleTimeString()}
      </Text>
    </Box>
  );
}
