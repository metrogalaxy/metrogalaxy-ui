import * as React from 'react';
import styled from 'styled-components/macro';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';
import { useTimer } from 'react-timer-hook';
import { Round } from './index';

interface CountdownProps {
  deadline: Date;
  round?: Round;
}

export function Countdown(props: CountdownProps) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: props.deadline,
  });

  return (
    <Wrapper>
      <Box>
        <div className="countdown--line">
          <div className="countdown--title">{props.round} Starts In</div>
          <div className="countdown--time-box-wrapper">
            <div className="countdown-time-box">{days}D</div>
            <div className="countdown-time-box">{hours}H</div>
            <div className="countdown-time-box">{minutes}M</div>
            <div className="countdown-time-box">{seconds}S</div>
          </div>
        </div>
        <div>
          <div className="countdown--title">Start Time</div>
          <div className="countdown--date">
            {props.deadline.toDateString()},{' '}
            {props.deadline.toLocaleTimeString()}
          </div>
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
  min-width: 36rem;
  margin-bottom: 2rem;

  font-family: 'Acrom';
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: ${ColorConstants.WHITE_SECONDARY};

  ${mediaQuery.lessThan(ScreenSize.LG)`
  `}

  .countdown--title {
    font-family: 'Acrom-Bold';
    text-transform: uppercase;
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
  }

  .countdown--time-box-wrapper {
    font-family: 'Acrom-Bold';
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .countdown--date {
    font-family: 'Acrom-Bold';
    color: ${ColorConstants.MAIN_GREEN};
  }

  .countdown-time-box {
    background: rgba(5, 15, 26, 0.8);
    border-radius: 10px;
    padding: 1.4rem;
    width: 6.5rem;
    margin-right: 0.5rem;
    text-align: center;
  }

  .countdown--line {
    margin-bottom: 3rem;
  }
`;
