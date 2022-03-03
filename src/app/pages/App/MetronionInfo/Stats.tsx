import * as React from 'react';
import {
  Box,
  Progress,
  Stack,
  Flex,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Stats } from 'src/app/service/types';
import { StatIcon } from 'src/app/pages/App/components';
import { MAX_STATS_VALUE } from 'src/app/config/constants';
import CreativityImage from 'src/app/assets/icon/creativity.svg';
import CharismaImage from 'src/app/assets/icon/charisma.svg';
import ResolveImage from 'src/app/assets/icon/resolve.svg';
import IntellectImage from 'src/app/assets/icon/intellect.svg';
import FitnessImage from 'src/app/assets/icon/fitness.svg';

interface StatsProps {
  stats: Stats;
}

export function StatsComponent(props: StatsProps) {
  return (
    <Box
      bgColor="grayBlur.200"
      border="2px solid"
      borderColor="greenBlur.100"
      borderRadius={14}
      // boxShadow="0px 25.6667px 42.7778px rgba(32, 138, 55, 0.28)"
      p={{ base: 6, md: 8 }}
      width={{
        base: '100%',
      }}
    >
      <Accordion allowToggle>
        <AccordionItem border="none">
          <AccordionButton width="100%" p={0}>
            <Flex justifyContent="space-between" width="100%">
              <Text
                textStyle="appNormal"
                textTransform="uppercase"
                fontFamily="Acrom-Bold"
              >
                Stats
              </Text>
              <AccordionIcon color="white" />
            </Flex>
          </AccordionButton>
          <AccordionPanel>
            <Stack spacing={4} mt={8}>
              <ItemComponent
                image={CreativityImage}
                label="Creativity"
                statValue={props.stats.creativity}
                barVariant="customGreen"
              />
              <ItemComponent
                image={CharismaImage}
                label="Charisma"
                statValue={props.stats.charisma}
                barVariant="customOrange"
              />
              <ItemComponent
                image={ResolveImage}
                label="Resolve"
                statValue={props.stats.resolve}
                barVariant="customPink"
              />
              <ItemComponent
                image={FitnessImage}
                label="Fitness"
                statValue={props.stats.fitness}
                barVariant="customBlue"
              />
              <ItemComponent
                image={IntellectImage}
                label="Intellect"
                statValue={props.stats.intellect}
                barVariant="customPurple"
              />
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

interface ItemComponentProps {
  image: string;
  label: string;
  statValue: number;
  barVariant: string;
}

function ItemComponent(props: ItemComponentProps) {
  return (
    <Box width="100%">
      <Flex justifyContent="space-between">
        {/* Label */}
        <Flex>
          <StatIcon image={props.image} />
          <Flex alignItems="center" mr={3} ml={3}>
            <Text textStyle="appNormal" textTransform="capitalize">
              {props.label}
            </Text>
          </Flex>
        </Flex>
        {/* Value */}
        <Flex alignItems="center">
          <Text textStyle="appNormal">
            {props.statValue}/{MAX_STATS_VALUE}
          </Text>
        </Flex>
      </Flex>
      <Progress
        size="md"
        value={props.statValue}
        variant={props.barVariant}
        mt={2}
      />
    </Box>
  );
}
