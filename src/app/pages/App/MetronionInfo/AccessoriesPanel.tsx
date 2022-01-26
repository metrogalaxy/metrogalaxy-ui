import * as React from 'react';
import { Box, Text, Stack, Grid } from '@chakra-ui/react';
import { ACCESSORY_TYPE } from 'src/app/config/constants';

interface AccessoriesPanelProps {
  accessoryIds: number[] | undefined;
}

const accessoryLabels = Object.values(ACCESSORY_TYPE)
  .map(item => {
    return item.split('_').join(' ').toUpperCase();
  })
  .slice(1);

export function AccessoriesPanel(props: AccessoriesPanelProps) {
  console.log(props);
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
    >
      <Text
        textStyle="appNormal"
        textTransform="uppercase"
        fontFamily="Acrom-Bold"
      >
        Accessories
      </Text>
      <Stack mt={8}>
        {accessoryLabels.map(label => (
          <Grid
            key={label}
            templateColumns="70px auto 50px"
            borderTop="1px dashed #2E3D4D"
            py={2}
          >
            <Box
              bg="#F7FFF8"
              borderRadius="6px"
              width="42px"
              height="42px"
            ></Box>
            <Box>
              <Text
                textStyle="appNormal"
                textTransform="uppercase"
                fontFamily="Acrom-Bold"
                color="green.200"
                fontSize={{ base: '12px', md: '14px' }}
              >
                {label}
              </Text>
              <Text
                textStyle="appNormal"
                color="whiteBlur.100"
                fontSize={{ base: '12px', md: '14px' }}
              >
                None
              </Text>
            </Box>
          </Grid>
        ))}
      </Stack>
    </Box>
  );
}
