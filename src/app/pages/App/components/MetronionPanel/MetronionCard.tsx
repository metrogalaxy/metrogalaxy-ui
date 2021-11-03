import * as React from 'react';
import styled from 'styled-components/macro';
import { Image } from 'react-bootstrap';
import { ColorConstants } from 'src/styles/StyleConstants';
import { formatNumber } from 'src/utils/helpers';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { useHistory } from 'react-router-dom';
import { IconComponent } from 'src/app/components/CurrencyLogo';

interface MetronionCardProps {
  id: string;
  url: string;
  price: string;
}

export function MetronionCard(props: MetronionCardProps) {
  const history = useHistory();
  const price = formatNumber(props.price, 4);

  const openMetronionInfoPage = () => {
    history.push(`/metronion/${props.id}`);
  };

  return (
    <Wrapper onClick={openMetronionInfoPage}>
      <Image className="metronion-card--image" src={props.url} />
      <div className="metronion-card--info">
        <div className="metronion-card--title">Metronion #{props.id}</div>
        <div className="metronion-card--price-info">
          <IconComponent className="metronion-card--icon" />
          <span className="metronion-card--price">{price}</span>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 22rem;
  background: rgba(5, 15, 26, 0.4);
  border: 2px solid rgba(98, 228, 127, 0.4);
  border-radius: 2rem;
  cursor: pointer;
  margin-bottom: 2rem;
  margin-right: 3rem;

  ${mediaQuery.lessThan(ScreenSize.LG)`
    margin: 2rem 1rem 0;
  `}

  &:hover {
    border: 2px solid #2d9de3;
  }

  .metronion-card--image {
    width: 100%;
  }

  .metronion-card--info {
    height: 8rem;
    width: 100%;
    background: rgba(5, 15, 26, 0.5);
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    padding: 1.6rem 2.8rem;
  }
  .metronion-card--icon {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.8rem;
  }

  .metronion-card--price-info {
    display: flex;
    align-items: center;
  }

  .metronion-card--title {
    font-family: 'Acrom-Light';
    color: ${ColorConstants.WHITE_SECONDARY};
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-transform: capitalize;
    margin-bottom: 0.8rem;
  }

  .metronion-card--price {
    font-family: 'Acrom-Bold';
    color: ${ColorConstants.WHITE_SECONDARY};
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-transform: capitalize;
  }
`;
