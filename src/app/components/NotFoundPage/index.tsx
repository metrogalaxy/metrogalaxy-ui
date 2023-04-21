import * as React from 'react';
import { Center, Grid, Text, Flex } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();

  const onBackToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Center height="100vh" width="100%" flexDirection="column">
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <Text textStyle="appTitle">4</Text>
          <Text>😢</Text>
          <Text textStyle="appTitle">4</Text>
        </Grid>
        <Text textStyle="appTitle" fontSize="2xl">
          Page Not Found
        </Text>
        <Flex onClick={onBackToHome} alignItems="center" cursor="pointer">
          <ArrowBackIcon width="24px" height="24px" color="white" mr={2} />
          <Text textStyle="appTitle">Back To Home</Text>
        </Flex>
      </Center>
    </div>
  );
}
