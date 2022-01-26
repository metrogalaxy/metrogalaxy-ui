import * as React from 'react';
import {
  Box,
  FormControl,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Checkbox,
  CheckboxGroup,
  HStack,
  Select,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button,
  useMediaQuery,
  useDisclosure,
  Grid,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useForm, useWatch } from 'react-hook-form';
import {
  SORT_TYPE,
  GENDER,
  STATS,
  DEFAULT_SORT,
  ACCESSORY_TYPE,
  RARITY,
} from 'src/app/config/constants';
import FilterIcon from 'src/app/assets/icon/filter.svg';
import {
  AccessoriesFilterParams,
  DEFAULT_ACCESSORIES_FILTER_PARAMS,
} from 'src/app/service/Accessories';

const MIN_STAT = 0;
const MAX_STAT = 100;

interface AccessoriesFilterProps {
  onFilterChange: (params: AccessoriesFilterParams) => void;
}

export function AccessoriesFilter(props: AccessoriesFilterProps) {
  const [isMobile] = useMediaQuery('(max-width: 576px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filter, setFilter] = React.useState<AccessoriesFilterParams>(
    DEFAULT_ACCESSORIES_FILTER_PARAMS,
  );

  const statRef: React.RefObject<IStatSliderRef>[] = [];
  const { register, control, setValue, getValues, reset } =
    useForm<AccessoriesFilterParams>({
      defaultValues: DEFAULT_ACCESSORIES_FILTER_PARAMS,
    });

  const watchAllFields = useWatch({
    control: control,
  });

  React.useMemo(() => {
    let gender: GENDER[] = [];
    if (watchAllFields.gender) {
      gender = watchAllFields.gender.map(item => {
        return item!;
      });
    }

    let stat: Record<string, number[]> = {};
    if (watchAllFields.stat) {
      for (let k in watchAllFields.stat) {
        if (watchAllFields.stat[k]) {
          stat[k] = watchAllFields.stat[k]!.map(item => {
            return item!;
          });
        }
      }
    }

    setFilter({
      sort: watchAllFields.sort ? watchAllFields.sort : DEFAULT_SORT,
      id: watchAllFields.id,
      accessoryType: watchAllFields.accessoryType,
      rarity: watchAllFields.rarity,
      gender: gender,
      stat: stat,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchAllFields]);

  React.useEffect(() => {
    props.onFilterChange(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  React.useEffect(() => {
    register('sort');
    register('id');
    register('gender');
    register('stat');
    register('accessoryType');
    register('rarity');
  }, [register]);

  const onSortchange = (value: string) => {
    setValue('sort', value);
  };

  const onIdChange = (event: any) => {
    const id = event.target.value === '' ? undefined : +event.target.value;
    setValue('id', id);
  };

  const onGenderChange = (values: GENDER[]) => {
    setValue('gender', values);
  };

  const onStatChange = (name: string, value: number[]) => {
    const stat = getValues('stat');
    stat[name] = value;
    setValue('stat', stat);
  };

  const onAccessoryTypeChange = (value: ACCESSORY_TYPE) => {
    setValue('accessoryType', value);
  };

  const onRarityChange = (value: string) => {
    if (getValues('rarity') === value) {
      setValue('rarity', undefined);
    } else {
      setValue('rarity', value as RARITY);
    }
  };

  const clearFilter = () => {
    reset(DEFAULT_ACCESSORIES_FILTER_PARAMS);

    statRef.forEach(item => {
      if (item && item.current) {
        item.current.resetAll();
      }
    });
  };

  const createStatRef = () => {
    const ref = React.createRef<IStatSliderRef>();
    statRef.push(ref);
    return ref;
  };

  const FilterComponent = (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Text
          textStyle="appNormal"
          textTransform="uppercase"
          fontFamily="Acrom-Bold"
        >
          Filter
        </Text>
        <Button size="sm" variant="outline" onClick={clearFilter}>
          Clear Filter
        </Button>
      </Flex>
      {/* Sort */}
      <FormControl>
        <Select
          layerStyle="selectDefault"
          bgColor="gray.500"
          border="2px solid"
          borderColor="gray.300"
          color="white"
          _focus={{
            borderColor: 'green.300',
          }}
          fontSize={{
            base: 'sm',
            md: 'md',
          }}
          mb={4}
          value={getValues('sort')}
          onChange={event => {
            onSortchange(event.target.value);
          }}
        >
          {Object.keys(SORT_TYPE).map(key => (
            <option key={key} value={key}>
              {SORT_TYPE[key]}
            </option>
          ))}
        </Select>
        {/* Search By Id */}
        <Box mb={8}>
          <InputGroup>
            <Input
              boxSizing="border-box"
              bg="gray.500"
              border="2px solid"
              borderColor="gray.300"
              borderRadius="6px"
              color="white"
              type="number"
              _focus={{ borderColor: 'greenBlur.100' }}
              placeholder="Search by ID"
              _placeholder={{
                color: 'white',
                fontSize: {
                  base: 'sm',
                  md: 'md',
                },
              }}
              value={getValues('id') ? getValues('id') : ''}
              onChange={onIdChange}
            />
            <InputRightElement
              h="100%"
              children={<SearchIcon color="whiteBlur.100" />}
            />
          </InputGroup>
        </Box>

        {/* Accessory Type */}
        <Box
          mb={5}
          pb={5}
          borderBottom="1px dashed"
          borderBottomColor="whiteBlur.300"
        >
          <Text
            textStyle="appNormal"
            textTransform="uppercase"
            fontFamily="Acrom-Bold"
            color="white"
            mb={5}
          >
            Accessory Type
          </Text>
          <Select
            layerStyle="selectDefault"
            bgColor="gray.500"
            border="2px solid"
            borderColor="gray.300"
            color="white"
            _focus={{
              borderColor: 'green.300',
            }}
            fontSize={{
              base: 'sm',
              md: 'md',
            }}
            mb={4}
            value={getValues('accessoryType')}
            onChange={event => {
              onAccessoryTypeChange(event.target.value as ACCESSORY_TYPE);
            }}
          >
            {Object.values(ACCESSORY_TYPE).map(value => (
              <option key={value} value={value}>
                {formatAccessoryType(value)}
              </option>
            ))}
          </Select>
        </Box>

        {/* Rarity */}
        <Box
          mb={5}
          pb={5}
          borderBottom="1px dashed"
          borderBottomColor="whiteBlur.300"
        >
          <Text
            textStyle="appNormal"
            textTransform="uppercase"
            fontFamily="Acrom-Bold"
            color="white"
            mb={5}
          >
            Rarity
          </Text>

          <Grid
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(3, 1fr)"
            gap={3}
            rowGap={3}
          >
            {Object.values(RARITY).map(value => (
              <Box
                key={value}
                bgColor={
                  value === getValues('rarity') ? 'green.200' : 'whiteBlur.300'
                }
                textAlign="center"
                py={{ base: 3 }}
                borderRadius="5px"
                cursor="pointer"
                _hover={{
                  bgColor: 'whiteBlur.100',
                }}
                onClick={() => onRarityChange(value)}
              >
                <Text
                  textStyle="appNormal"
                  textTransform="uppercase"
                  fontSize={{ base: 'xs', md: 'sm' }}
                >
                  {value}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Gender */}
        <Box
          mb={5}
          pb={5}
          borderBottom="1px dashed"
          borderBottomColor="whiteBlur.300"
        >
          <Text
            textStyle="appNormal"
            textTransform="uppercase"
            fontFamily="Acrom-Bold"
            color="white"
            mb={5}
          >
            Gender
          </Text>
          <CheckboxGroup onChange={onGenderChange} value={getValues('gender')}>
            <HStack spacing={5}>
              <Checkbox
                value={GENDER.MALE}
                textTransform="capitalize"
                textStyle="appNormal"
              >
                {GENDER.MALE}
              </Checkbox>
              <Checkbox
                value={GENDER.FEMALE}
                textTransform="capitalize"
                textStyle="appNormal"
              >
                {GENDER.FEMALE}
              </Checkbox>
            </HStack>
          </CheckboxGroup>
        </Box>

        {/* Stat */}
        <Text
          textStyle="appNormal"
          textTransform="uppercase"
          fontFamily="Acrom-Bold"
          color="white"
          mb={5}
        >
          Stats
        </Text>
        <Box>
          {STATS.map(item => {
            return (
              <StatSlider
                key={item}
                label={item}
                onStatChange={onStatChange}
                stats={getValues('stat')}
                ref={createStatRef()}
              />
            );
          })}
        </Box>
      </FormControl>
    </Box>
  );

  const FilterIconComponent = (
    <Box
      bg="gray.500"
      border="2px solid"
      borderColor="gray.300"
      borderRadius="12px"
      p="5px"
      cursor="pointer"
      onClick={onOpen}
    >
      <Image src={FilterIcon} />
    </Box>
  );

  return (
    <Box width="100%">
      {isMobile ? (
        <Box>
          <Flex justifyContent="flex-end">{FilterIconComponent}</Flex>
          <Modal
            size="full"
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInBottom"
            variant="dark"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Box pt={14} pb={8} px={1}>
                  {FilterComponent}
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      ) : (
        <Flex justifyContent="center">
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
            {FilterComponent}
          </Box>
        </Flex>
      )}
    </Box>
  );
}

interface IStatSlider {
  label: string;
  stats: Record<string, number[]>;
  onStatChange: (name: string, values: number[]) => void;
}

type IStatSliderRef = {
  resetAll: () => void;
};

const StatSlider = React.forwardRef<IStatSliderRef, IStatSlider>(
  (props: IStatSlider, ref) => {
    const propStat = React.useMemo(() => {
      return props.stats[props.label] ? props.stats[props.label] : [0, 100];
    }, [props]);
    const [stat, setStat] = React.useState<number[]>(propStat);
    const [image, setImage] = React.useState<string>('');

    const onChange = (value: number[]) => {
      setStat(value);
    };

    const onChangeEnd = (value: number[]) => {
      props.onStatChange(props.label, value);
    };

    const reset = () => {
      setStat([0, 100]);
      props.onStatChange(props.label, [0, 100]);
    };

    React.useImperativeHandle(ref, () => ({
      resetAll() {
        setStat([0, 100]);
      },
    }));

    React.useEffect(() => {
      const loadImage = async () => {
        try {
          const importImage = await import(
            `src/app/assets/icon/${props.label}.svg`
          );
          setImage(importImage.default);
        } catch (error) {
          console.error(error);
        }
      };

      loadImage();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Box mb={5}>
        <Flex justifyContent="space-between" mb={2}>
          <Flex>
            {image ? (
              <Image borderRadius="50%" src={image} w="24px" h="24px" mr={3} />
            ) : (
              <Box
                bg="gray.600"
                borderRadius="50%"
                w="24px"
                h="24px"
                mr={3}
              ></Box>
            )}
            <Text textStyle="appNormal" textTransform="capitalize" mr={3}>
              {props.label}
            </Text>
            {(stat[0] !== 0 || stat[1] !== 100) && (
              <Text textStyle="appNormal" color="blue.300">
                {stat[0]} - {stat[1]}
              </Text>
            )}
          </Flex>
          <Text
            textStyle="appNormal"
            textTransform="uppercase"
            color="green.200"
            cursor="pointer"
            fontSize={{ base: '12px', md: '14px' }}
            onClick={reset}
          >
            Reset
          </Text>
        </Flex>
        <Box ml={3}>
          <RangeSlider
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-label={[`${props.label}_min`, `${props.label}_max`]}
            defaultValue={[MIN_STAT, MAX_STAT]}
            value={stat}
            onChange={onChange}
            onChangeEnd={onChangeEnd}
          >
            <RangeSliderTrack bg="gray.600" h="8px" borderRadius="25px">
              <RangeSliderFilledTrack bg="blue.300" />
            </RangeSliderTrack>
            <RangeSliderThumb w="16px" h="16px" index={0} />
            <RangeSliderThumb w="16px" h="16px" index={1} />
          </RangeSlider>
        </Box>
        {/* <Flex justifyContent="space-between" ml={1}>
        <Text textStyle="appNormal">{MIN_STAT}</Text>
        <Text textStyle="appNormal">{MAX_STAT}</Text>
      </Flex> */}
      </Box>
    );
  },
);

const formatAccessoryType = (value: string): string => {
  return value
    .split('_')
    .map(item => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join(' ');
};
