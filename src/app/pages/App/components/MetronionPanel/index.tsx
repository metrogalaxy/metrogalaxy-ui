import * as React from 'react';
import styled from 'styled-components/macro';
import { FetchMetronionItem } from 'src/app/service/API/inventory';
import { MetronionCard } from './MetronionCard';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { Pagination } from './Pagination';
import { METRONION_PANEL_LIMITS_PER_PAGE } from 'src/app/config/constants';
import { ColorConstants } from 'src/styles/StyleConstants';

interface MetronionPanelProp {
  items: FetchMetronionItem[];
  count: number;
  handlePageChange: (page: number) => any;
}

export function MetronionPanel(props: MetronionPanelProp) {
  const listItems = props.items.map(item => {
    return (
      <MetronionCard
        key={item.id}
        id={item.id}
        url={item.url}
        price={item.price}
      />
    );
  });

  return (
    <Wrapper>
      <Box>
        {listItems.length > 0 && listItems}
        {listItems.length === 0 && <Warning>No Metronions</Warning>}
        {props.count > METRONION_PANEL_LIMITS_PER_PAGE && (
          <Pagination
            count={props.count}
            handlePageChange={props.handlePageChange}
          />
        )}
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 80rem;
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  ${mediaQuery.lessThan(ScreenSize.LG)`
    justify-content: center;
  `}
`;

const Warning = styled.div`
  font-family: 'Acrom';
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${ColorConstants.WHITE};
  text-align: center;
`;
