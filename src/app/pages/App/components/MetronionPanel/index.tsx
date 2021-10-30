import * as React from 'react';
import styled from 'styled-components/macro';
import { FetchInventoryItem } from 'src/app/service/API/inventory';
import { MetronionCard } from './MetronionCard';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';

interface MetronionPanelProp {
  items: FetchInventoryItem[];
  count: number;
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
  width: 100%;
  font-family: 'Acrom';
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${ColorConstants.WHITE};
  text-align: center;
`;
