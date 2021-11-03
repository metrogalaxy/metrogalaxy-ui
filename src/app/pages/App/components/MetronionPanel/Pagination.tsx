import * as React from 'react';
import styled from 'styled-components/macro';
import ReactPaginate from 'react-paginate';
import PreviousButtonIcon from './assets/previous.png';
import NextButtonIcon from './assets/next.png';
import { useViewport } from 'src/app/hooks/useViewport';
import { ScreenSizeNumber } from 'src/styles/media';
import { METRONION_PANEL_LIMITS_PER_PAGE } from 'src/app/config/constants';
import { Image } from 'react-bootstrap';
import { ColorConstants } from 'src/styles/StyleConstants';

interface PaginationProps {
  count: number;
  handlePageChange: (page: number) => any;
}

export function Pagination(props: PaginationProps) {
  const { width } = useViewport();
  const pageCount = Math.ceil(props.count / METRONION_PANEL_LIMITS_PER_PAGE);

  const handlePageChange = ({ selected }) => {
    props.handlePageChange(selected);
  };

  return (
    <Wrapper>
      <ReactPaginate
        onPageChange={handlePageChange}
        pageCount={pageCount}
        pageRangeDisplayed={width > ScreenSizeNumber.SM ? 3 : 2}
        marginPagesDisplayed={width > ScreenSizeNumber.SM ? 2 : 1}
        containerClassName="metronion-panel--pagination"
        previousLabel={<Image src={PreviousButtonIcon} />}
        nextLabel={<Image src={NextButtonIcon} />}
        disabledClassName="metronion-panel--disabled"
        activeClassName="metronion-panel--active-page"
        pageClassName="metronion-panel--page"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  .metronion-panel--pagination {
    height: 5rem;
    font-family: 'Acrom';
    color: ${ColorConstants.WHITE};
    font-size: 1.4rem;
    line-height: 1.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .metronion-panel--disabled {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3e4c59;
    opacity: 0.4;
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }

  .metronion-panel--page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 0 1rem;
  }

  .metronion-panel--active-page {
    background: #62e47f;
    color: #050f1a;
  }

  li {
    display: inline-block;
  }
`;
