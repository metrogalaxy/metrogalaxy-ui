import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Pagination as PaginationLib,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
  PaginationSeparator,
} from '@ajna/pagination';

interface PaginationProps {
  count: number;
  limit: number;
  handlePageChange: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  const pageCount = Math.ceil(props.count / props.limit);

  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: pageCount,
    initialState: { currentPage: 1, pageSize: props.limit },
    limits: {
      outer: 1,
      inner: 1,
    },
  });

  const handlePageChange = (nextPage: number) => {
    setCurrentPage(nextPage);
    props.handlePageChange(nextPage);
  };

  return (
    <Box>
      <PaginationLib
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      >
        <PaginationContainer flexWrap="wrap">
          <PaginationPrevious
            bgColor="transparent"
            borderRadius="50%"
            width={{ base: '40px', md: '42px' }}
            height={{ base: '40px', md: '42px' }}
            color="white"
            mr={4}
            p={{ base: 1, md: 2 }}
            border="none"
            _hover={{
              color: 'green.200',
            }}
            _disabled={{
              bgColor: 'gray.600',
              color: 'white.300',
              _hover: {
                color: 'white.300',
              },
            }}
          >
            <ChevronLeftIcon />
          </PaginationPrevious>
          <PaginationPageGroup
            spacing={{ base: 2, md: 4 }}
            separator={
              <PaginationSeparator
                width={{ base: '40px', md: '42px' }}
                height={{ base: '40px', md: '42px' }}
                p={{ md: '2' }}
                bgColor="transparent"
                border="none"
                color="white"
              />
            }
          >
            {pages.map((page: number) => (
              <PaginationPage
                key={page}
                page={page}
                fontSize={{ base: 'sm', md: 'md' }}
                p={{ base: 1, md: 2 }}
                width={{ base: '40px', md: '42px' }}
                height={{ base: '40px', md: '42px' }}
                bgColor="transparent"
                border="none"
                color="white"
                _current={{
                  bgColor: 'green.200',
                  color: 'gray.500',
                  _hover: {
                    bgColor: 'green.200',
                    color: 'gray.500',
                  },
                }}
              />
            ))}
          </PaginationPageGroup>
          <PaginationNext
            bgColor="transparent"
            borderRadius="50%"
            width={{ base: '40px', md: '42px' }}
            height={{ base: '40px', md: '42px' }}
            color="white"
            ml={4}
            p={{ md: 2 }}
            border="none"
            _hover={{
              color: 'green.200',
            }}
            _disabled={{
              bgColor: 'gray.600',
              color: 'white.300',
              _hover: {
                color: 'white.300',
              },
            }}
          >
            <ChevronRightIcon />
          </PaginationNext>
        </PaginationContainer>
      </PaginationLib>
    </Box>
  );
}
