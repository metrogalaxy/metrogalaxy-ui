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
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useForm, useWatch } from 'react-hook-form';
import {
  SORT_TYPE,
  GENDER,
  STATS,
  DEFAULT_SORT,
  STATUS,
} from 'src/app/config/constants';
import FilterIcon from 'src/app/assets/icon/filter.svg';
import {
  MetronionFilterParams,
  DEFAULT_METRONION_FILTER_PARAMS,
} from 'src/app/service/Metronion';
import { useDebounce } from 'src/app/hooks';
import { StatIcon } from '../StatIcon';

const MIN_STAT = 0;
const MAX_STAT = 100;

interface MetronionFilterProps {
  onFilterChange: (params: MetronionFilterParams) => void;
}

export function MetronionFilter(props: MetronionFilterProps) {
  const [isMobile] = useMediaQuery('(max-width: 576px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filter, setFilter] = React.useState<MetronionFilterParams>(
    DEFAULT_METRONION_FILTER_PARAMS,
  );

  const statRef: React.RefObject<IStatSliderRef>[] = [];
  const { register, control, setValue, getValues, reset } =
    useForm<MetronionFilterParams>({
      defaultValues: DEFAULT_METRONION_FILTER_PARAMS,
    });
  const [filterId, setFilterId] = React.useState<number | undefined>(undefined);
  const debounceFilterId = useDebounce<number | undefined>(filterId, 500);

  const watchAllFields = useWatch({
    control: control,
  });

  React.useMemo(() => {
    let gender: GENDER[] = [];
    let status: STATUS[] = [];
    if (watchAllFields.gender) {
      gender = watchAllFields.gender.map(item => {
        return item!;
      });
    }
    if (watchAllFields.status) {
      status = watchAllFields.status.map(item => {
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
      id: debounceFilterId,
      gender: gender,
      status: status,
      stat: stat,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchAllFields, debounceFilterId]);

  React.useEffect(() => {
    props.onFilterChange(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, debounceFilterId]);

  React.useEffect(() => {
    setFilterId(watchAllFields.id);
  }, [watchAllFields.id]);

  React.useEffect(() => {
    register('sort');
    register('id');
    register('gender');
    register('stat');
    register('status');
  }, [register]);

  const onSortchange = (value: string) => {
    setValue('sort', value);
  };

  const onIdChange = (event: any) => {
    const id = event.target.value === '' ? undefined : event.target.value;
    setFilterId(id);
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

  const onStatusChange = (values: STATUS[]) => {
    setValue('status', values);
  };

  const clearFilter = () => {
    reset(DEFAULT_METRONION_FILTER_PARAMS);

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
              value={
                filterId !== undefined && filterId !== null ? filterId : ''
              }
              onChange={onIdChange}
            />
            <InputRightElement
              h="100%"
              children={<SearchIcon color="whiteBlur.100" />}
            />
          </InputGroup>
        </Box>

        {/* Status */}
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
            Status
          </Text>

          <CheckboxGroup onChange={onStatusChange} value={getValues('status')}>
            <HStack spacing={5}>
              <Checkbox
                value={STATUS.FOR_SALE}
                textTransform="capitalize"
                textStyle="appNormal"
              >
                For Sale
              </Checkbox>
              <Checkbox
                value={STATUS.HAS_OFFERS}
                textTransform="capitalize"
                textStyle="appNormal"
              >
                Has Offers
              </Checkbox>
            </HStack>
          </CheckboxGroup>
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

        {/* Stats */}
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
              <StatIcon image={image} />
            ) : (
              <Box bg="gray.600" borderRadius="50%" w="24px" h="24px"></Box>
            )}
            <Flex alignItems="center" ml={3}>
              <Text textStyle="appNormal" textTransform="capitalize" mr={3}>
                {props.label}
              </Text>
            </Flex>

            {(stat[0] !== 0 || stat[1] !== 100) && (
              <Flex alignItems="center">
                <Text textStyle="appNormal" color="blue.300">
                  {stat[0]} - {stat[1]}
                </Text>
              </Flex>
            )}
          </Flex>
          <Flex alignItems="center">
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
