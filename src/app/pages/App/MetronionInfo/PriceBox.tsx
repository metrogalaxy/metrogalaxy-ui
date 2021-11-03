import * as React from 'react';
import styled from 'styled-components/macro';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';
import { IconComponent } from 'src/app/components/CurrencyLogo';

interface PriceBoxProps {
  id: string;
  listPrice?: string;
}

export function PriceBox(props: PriceBoxProps) {
  return (
    <Wrapper>
      <Box>
        <Title>
          <div className="title-filters">Metronion #{props.id}</div>
        </Title>
        {props.listPrice && (
          <div className="price-box--info">
            <div className="price-box--title">Listing price: </div>
            <IconComponent className="price-box--currency" />
            <div className="price-box--price">{props.listPrice}</div>
          </div>
        )}
        <div className="price-box--btn-group">
          {props.listPrice && <PrimaryButton>Buy Now</PrimaryButton>}
          <OutlineButton>Make Offer</OutlineButton>
        </div>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;

  ${mediaQuery.lessThan(ScreenSize.LG)`
    width: 100%;
    display: flex;
    justify-content: center;
  `};
`;

const Box = styled.div`
  min-width: 30rem;
  background: rgba(5, 15, 26, 0.6);
  border: 0.2rem solid rgba(98, 228, 127, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 30px 50px rgba(32, 138, 55, 0.28);
  border-radius: 2rem;
  padding: 3.4rem;

  .price-box--info {
    display: flex;
    align-items: center;
  }

  .price-box--title {
    font-family: 'Acrom';
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${ColorConstants.WHITE};
    text-transform: capitalize;
  }

  .price-box--currency {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1rem;
  }

  .price-box--price {
    font-family: 'Acrom-Bold';
    font-style: normal;
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: ${ColorConstants.WHITE_SECONDARY};
    text-transform: capitalize;
    margin-left: 1rem;
  }

  .price-box--btn-group {
    display: flex;
    flex-direction: row;
    margin-top: 2.8rem;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  margin-bottom: 0.6rem;

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

const PrimaryButton = styled.div`
  font-family: 'Acrom-Bold';
  font-size: 1.4rem;
  line-height: 1.7rem;
  background: ${ColorConstants.MAIN_GREEN};
  border: 2px solid transparent;
  border-radius: 10rem;
  padding: 1.2rem 2rem;
  cursor: pointer;
  text-align: center;
  margin-right: 1.2rem;
`;

const OutlineButton = styled.div`
  font-family: 'Acrom-Bold';
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: ${ColorConstants.MAIN_GREEN};
  border: 2px solid ${ColorConstants.MAIN_GREEN};
  border-radius: 10rem;
  padding: 1.2rem 2rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: ${ColorConstants.MAIN_GREEN};
    color: ${ColorConstants.PRIMARY_BLACK};
    border-color: transparent;
  }
`;
