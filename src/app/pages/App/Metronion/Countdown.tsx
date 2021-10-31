import * as React from 'react';
import styled from 'styled-components/macro';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import ENV from 'src/app/config/env';
import { ColorConstants } from 'src/styles/StyleConstants';
import { useTimer } from 'react-timer-hook';

export function Countdown() {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: ENV.MINT_DATE,
  });

  return (
    <Wrapper>
      <Box>
        <div className="countdown--title">Start In</div>
        <div className="countdown--time-box-wrapper">
          <div className="countdown-time-box">{days}D</div>
          <div className="countdown-time-box">{hours}H</div>
          <div className="countdown-time-box">{minutes}M</div>
          <div className="countdown-time-box">{seconds}S</div>
        </div>
        <div className="countdown--sub-title">Starting Time</div>
        <div className="countdown--date">{ENV.MINT_DATE.toLocaleString()}</div>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mediaQuery.lessThan(ScreenSize.LG)`
    display: flex;
    justify-content: center;
  `};
`;

const Box = styled.div`
  background: rgba(5, 15, 26, 0.6);
  border: 2px solid rgba(98, 228, 127, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 30px 50px rgba(32, 138, 55, 0.28);
  border-radius: 2rem;
  padding: 4rem;
  margin-top: 4rem;
  justify-content: flex-start;
  position: relative;
  width: fit-content;

  font-family: 'Acrom-Bold';
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: ${ColorConstants.WHITE_SECONDARY};

  ${mediaQuery.lessThan(ScreenSize.SM)`
    padding: 4rem 2.5rem;
  `}

  .countdown--title {
    margin-bottom: 3rem;
  }

  .countdown--sub-title {
    margin: 3rem 0 2rem;
  }

  .countdown--time-box-wrapper {
    display: flex;
    flex-direction: row;
  }

  .countdown--date {
    color: ${ColorConstants.MAIN_GREEN};
  }

  .countdown-time-box {
    background: rgba(5, 15, 26, 0.8);
    border-radius: 10px;
    padding: 1.4rem;
    width: 6.5rem;
    margin-right: 1rem;
    text-align: center;
  }
`;
