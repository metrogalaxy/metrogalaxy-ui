import * as React from 'react';
import {
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  Image,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { METRONION_PARTS } from 'src/app/config/constants';
import { MetronionParts } from 'src/app/service/Metronion';

interface AccessoriesPanelProps {
  parts?: MetronionParts[];
}

const parts = Object.values(METRONION_PARTS)
  .map(item => {
    return item;
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
      p={{ base: 6, md: 8 }}
      w={{
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
                Body Parts & Accessories
              </Text>
              <AccordionIcon color="white" />
            </Flex>
          </AccordionButton>
          <AccordionPanel>
            <Grid
              templateColumns={{ md: 'repeat(3, 1fr)', xl: 'repeat(2, 1fr)' }}
              gap={4}
              mt={8}
            >
              {parts.map(partType => (
                <AccessoriesItem
                  key={partType}
                  partType={partType}
                  parts={props.parts}
                />
              ))}
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

interface AccessoriesItemProps {
  key: any;
  partType: string;
  parts?: MetronionParts[];
}

function AccessoriesItem(props: AccessoriesItemProps) {
  const [part, setPart] = React.useState<MetronionParts>();

  React.useEffect(() => {
    if (props.parts) {
      const filterComps = props.parts.filter(
        item => item.type === props.partType,
      );
      if (filterComps.length > 0) {
        setPart(filterComps[0]);
      }
    }
  }, [props.parts, props.partType]);

  const label = props.partType.split('_').join(' ').toUpperCase();
  return (
    <Box
      bg="gray.500"
      borderRadius="12px"
      border="1px dashed #2E3D4D"
      padding={2}
      height="fit-content"
      width="100%"
    >
      <Grid templateColumns="40px auto" gap={2}>
        <GridItem>
          <Flex justifyContent="center" mb={2}>
            <Box
              bgColor="gray.200"
              borderRadius="50%"
              width={{ base: '24px', xl: '36px' }}
              height={{ base: '24px', xl: '36px' }}
            >
              {part && part.image ? <Image src={part.image} /> : null}
            </Box>
          </Flex>
          <Flex justifyContent="center">
            <Text textStyle="appNormal" fontSize={{ base: '14px', xl: '14px' }}>
              {part ? `${part.rarity}%` : '--'}
            </Text>
          </Flex>
        </GridItem>
        <GridItem maxWidth="150px" width="100%" overflowWrap="break-word">
          <Text
            textStyle="appNormal"
            color="green.200"
            fontSize={{ base: '12px', xl: '12px' }}
            fontFamily="Acrom-Bold"
          >
            {label}
          </Text>
          <Text
            textStyle="appNormal"
            fontSize={{ base: '14px', xl: '14px' }}
            mt={1}
          >
            {part ? part.name : ''}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}
