import * as React from 'react';
import styled from 'styled-components/macro';
import MintInfoIcon from './assets/mint_info_icon.png';
import { Image } from 'react-bootstrap';
import { ColorConstants } from 'src/styles/StyleConstants';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { MAX_METRONION_COUNT } from 'src/app/config/constants';
import ENV from 'src/app/config/env';
import { useEthers } from '@usedapp/core';
import { Web3Provider } from '@ethersproject/providers';
import { useGetSaleRecord } from 'src/app/service/web3';

export function TotalMintInfo() {
  const { library } = useEthers();
  const provider = library as Web3Provider;
  const { data: saleRecord } = useGetSaleRecord(
    provider,
    ENV.CURRENT_METRONION_VERSION_ID,
  );

  const totalSold = saleRecord ? saleRecord.totalSold : 0;

  return (
    <Wrapper>
      <Box>
        <Background />
        <Image className="icon" src={MintInfoIcon} />
        <div className="text-wrapper">
          <div className="title">Total Metronions Minted</div>
          <div className="text">
            <span className="text--highlight">{totalSold}</span>
            <span>/{MAX_METRONION_COUNT}</span>
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
  border: 2px solid #1bc4ff;
  box-sizing: border-box;
  box-shadow: 0px 20px 50px rgba(7, 105, 140, 0.66);
  border-radius: 2rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 36rem;

  .icon {
    width: 6.4rem;
    height: 6.4rem;
  }

  .text-wrapper {
    font-family: 'Acrom-Light';
    margin-left: 2.4rem;
  }

  .title {
    margin-bottom: 1.2rem;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${ColorConstants.WHITE};
  }

  .text {
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: ${ColorConstants.WHITE};

    &--highlight {
      color: #2d9de3;
    }
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
