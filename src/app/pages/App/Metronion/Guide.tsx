import * as React from 'react';
import { ColorConstants } from 'src/styles/StyleConstants';
import styled from 'styled-components/macro';
import BookmarkIcon from './assets/bookmark.png';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import ENV from 'src/app/config/env';

export function Guide() {
  return (
    <Wrapper>
      <Box>
        <Background />
        <div className="text-wrapper">
          <div className="title">Guide</div>
          <div className="text-item">
            <div className="index">1</div>
            <div className="description">Connect Wallet</div>
          </div>
          <div className="text-item">
            <div className="index">2</div>
            <div className="description">Choose Quantity</div>
          </div>
          <div className="text-item">
            <div className="index">3</div>
            <div className="description">Click Mint</div>
          </div>
          <div className="line-dashed"></div>
          <div className="notice">
            <ul>
              <li>Each wallet can mint up to 5 Metronions</li>
              <li>
                Each Metronion costs {ENV.METRONION_UNIT_PRICE}{' '}
                {ENV.CHAIN_TOKEN}
              </li>
              {/* <li>All Metronions are going to be revealed on Oct 31 2021</li> */}
            </ul>
          </div>
        </div>
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
  border: 2px solid rgba(98, 228, 127, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 30px 50px rgba(32, 138, 55, 0.28);
  border-radius: 2rem;
  padding: 4rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  max-width: 36rem;

  &::after {
    content: '';
    display: block;
    background-image: url(${BookmarkIcon});
    background-size: 4.6rem 6.5rem;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1.5rem;
    left: 2.5rem;
  }

  .text-wrapper {
    width: 100%;
  }

  .title {
    color: ${ColorConstants.WHITE};
    font-family: 'Acrom-Bold';
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    margin-left: 3.6rem;
  }

  .text-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .index {
    color: #0b1926;
    font-family: 'Acrom-Bold';
    font-size: 1.2rem;
    line-height: 1.4rem;
    width: 2.4rem;
    height: 2.4rem;
    line-height: 2.4rem;
    background: #da3f76;
    box-shadow: 0px 2px 0px rgba(142, 14, 59, 0.68);
    border-radius: 50%;
    text-align: center;
    margin-right: 1.2rem;
  }

  .description {
    color: ${ColorConstants.WHITE};
    font-family: 'Acrom-Light';
    font-size: 1.6rem;
    line-height: 3.5rem;
  }

  .line-dashed {
    border: 1px dashed #62e47f;
    opacity: 0.3;
    margin-top: 2.6rem;
  }

  .notice {
    color: #ffcb4e;
    font-family: 'Acrom-Light';
    font-size: 1.4rem;
    font-style: italic;
    line-height: 2.4rem;
    margin-top: 2.6rem;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: #050f1a;
  opacity: 0.6;
  border-radius: 2rem;
`;
