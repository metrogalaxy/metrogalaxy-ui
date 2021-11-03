import * as React from 'react';
import styled from 'styled-components/macro';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';
import { AttributeInfo } from 'src/app/service/API/metronion';
import { SingleAttribute } from './SingleAttribute';

interface AttributesProps {
  attributes: AttributeInfo[];
}

export function Attributes(props: AttributesProps) {
  const listAttributes = props.attributes.map(item => (
    <SingleAttribute
      key={item.type}
      url={item.url}
      type={item.type}
      description={item.description}
      rarity={item.rarity}
    />
  ));
  return (
    <Wrapper>
      <Box>
        <Title>
          <div className="title-filters">Attributes</div>
        </Title>
        {listAttributes}
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mediaQuery.lessThan(ScreenSize.LG)`
    display: flex;
    justify-content: center;
  `}
`;

const Box = styled.div`
  min-width: 30rem;
  background: rgba(5, 15, 26, 0.6);
  border: 0.2rem solid rgba(98, 228, 127, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 30px 50px rgba(32, 138, 55, 0.28);
  border-radius: 2rem;
  padding: 3.4rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  margin-bottom: 0.6rem;

  border-bottom: 1px dashed #2e3d4d;

  .title-filters {
    font-family: 'Acrom';
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${ColorConstants.WHITE};
    text-transform: uppercase;
  }
`;
