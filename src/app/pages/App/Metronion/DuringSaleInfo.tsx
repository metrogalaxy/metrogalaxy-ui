import * as React from 'react';
import styled from 'styled-components/macro';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';
import { useTimer } from 'react-timer-hook';

interface DuringSaleInfoProps {
  title: string;
  nextRoundTitle: string;
  nextRoundDate: Date;
  subtitle?: string;
}

export function DuringSaleInfo(props: DuringSaleInfoProps) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: props.nextRoundDate,
  });

  return (
    <Wrapper>
      <Box>
        <div className="countdown--title">{props.nextRoundTitle}</div>
        <div className="countdown--time-box-wrapper">
          <div className="countdown-time-box">{days}D</div>
          <div className="countdown-time-box">{hours}H</div>
          <div className="countdown-time-box">{minutes}M</div>
          <div className="countdown-time-box">{seconds}S</div>
        </div>
        <div className="countdown--date">
          {props.nextRoundDate.toDateString()},{' '}
          {props.nextRoundDate.toLocaleTimeString()}
        </div>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  ${mediaQuery.lessThan(ScreenSize.LG)`
    display: flex;
    justify-content: center;
  `};

  ${mediaQuery.greaterThan(ScreenSize.LG)`
    display: flex;
    justify-content: flex-end;
  `}
`;

const Box = styled.div`
  background: rgba(5, 15, 26, 0.6);
  border: 2px solid #1bc4ff;
  box-sizing: border-box;
  box-shadow: 0px 20px 50px rgba(7, 105, 140, 0.66);
  border-radius: 2rem;
  padding: 3.6rem;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  max-width: 36rem;
  margin-bottom: 2rem;

  font-family: 'Acrom';
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: ${ColorConstants.WHITE_SECONDARY};

  .countdown--title {
    font-family: 'Acrom-Bold';
    text-transform: uppercase;
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
  }

  .countdown--sub-title-sale-ended {
    font-family: 'Acrom';
    text-transform: none;
    margin-top: 3rem;
    letter-spacing: -0.02em;
  }

  .countdown--time-box-wrapper {
    font-family: 'Acrom-Bold';
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .countdown--date {
    font-family: 'Acrom-Bold';
    color: rgba(247, 255, 248, 0.5);
  }

  .countdown-time-box {
    background: rgba(5, 15, 26, 0.8);
    border-radius: 10px;
    padding: 1.4rem;
    width: 6.5rem;
    margin-right: 0.5rem;
    text-align: center;
  }
`;
