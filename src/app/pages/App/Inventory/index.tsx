import * as React from 'react';
import {
  Box,
  Text,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
} from '@chakra-ui/react';
import ArrowLeftIcon from 'src/app/assets/icon/arrow_left.svg';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { CATEGORY } from 'src/app/config/constants';
import { MetronionTab } from './MetronionTab';
import { AccessoriesTab } from './AccessoriesTab';

export function Inventory() {
  const [category, setCategory] = React.useState<CATEGORY>(CATEGORY.METRONION);
  const navigate = useNavigate();

  return (
    <PageLayout title="Inventory" content="User Inventory">
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Flex
          alignItems="center"
          mb={{ base: 6, sm: 8 }}
          alignSelf={{ base: 'flex-start', md: 'center' }}
        >
          <Breadcrumb spacing={0}>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => navigate(-1)}>
                <Image src={ArrowLeftIcon} width="32px" height="32px" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/inventory">
                <Text
                  textStyle="appTitle"
                  textTransform="capitalize"
                  _hover={{
                    color: 'green.200',
                  }}
                >
                  Inventory
                </Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        <Box mb={{ base: 2, sm: 8 }} ml={{ base: 0, sm: 8 }}>
          <Flex>
            <Category
              isSelected={category === CATEGORY.METRONION}
              onClick={() => setCategory(CATEGORY.METRONION)}
            >
              {CATEGORY.METRONION}
            </Category>
            <Category
              isSelected={category === CATEGORY.ACCESSORIES}
              onClick={() => setCategory(CATEGORY.ACCESSORIES)}
            >
              {CATEGORY.ACCESSORIES}
            </Category>
          </Flex>
        </Box>
      </Flex>

      {/* Main Panel */}
      {category === CATEGORY.METRONION ? <MetronionTab /> : <AccessoriesTab />}
    </PageLayout>
  );
}

interface ICategoryProps {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick: () => void;
}

function Category(props: ICategoryProps) {
  return (
    <Box
      bg={props.isSelected ? 'gray.500' : 'transparent'}
      borderRadius="20px"
      px={{ base: 6, md: 8 }}
      py={{ base: 3 }}
      cursor="pointer"
      onClick={props.onClick}
    >
      <Flex alignItems="center">
        <Box
          bg={props.isSelected ? 'green.200' : 'white.100'}
          borderRadius="50%"
          w="8px"
          h="8px"
          mr={2}
        ></Box>
        <Text textStyle="appNormal" textTransform="uppercase">
          {props.children}
        </Text>
      </Flex>
    </Box>
  );
}
