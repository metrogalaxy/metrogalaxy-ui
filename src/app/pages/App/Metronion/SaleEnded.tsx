import * as React from 'react';
import styled from 'styled-components/macro';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { ColorConstants } from 'src/styles/StyleConstants';
import { useGetUserRecord } from 'src/app/service/web3';
import { useEthers } from '@usedapp/core';
import ENV from 'src/app/config/env';
import { Link as LinkLib } from 'react-router-dom';
import { Web3Provider } from '@ethersproject/providers';

export function SaleEnded() {
  const { library, account } = useEthers();
  const provider = library as Web3Provider;
  const { data: userRecord } = useGetUserRecord(
    provider,
    ENV.CURRENT_METRONION_VERSION_ID,
    account!,
    {
      enabled: account !== undefined && account !== null,
    },
  );

  const privateBought = userRecord?.privateBought || 0;
  const publicBought = userRecord?.publicBought || 0;

  return (
    <Wrapper>
      <Box>
        <div className="sale-ended--title">Sale Ended</div>
        <div>You have bought:</div>
        <div className="sale-ended--content">
          <ul>
            <li>
              In Private Sale:{' '}
              <span>
                {privateBought}{' '}
                {privateBought <= 1 ? 'Metronion' : 'Metronions'}
              </span>
            </li>
            <li>
              In Public Sale:{' '}
              <span>
                {publicBought} {publicBought <= 1 ? 'Metronion' : 'Metronions'}
              </span>
            </li>
          </ul>
        </div>
        <Link to="/inventory">Go to inventory</Link>
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

const Link = styled(LinkLib)`
  text-decoration: none;
  color: ${ColorConstants.WHITE_SECONDARY};

  &:hover {
    color: ${ColorConstants.MAIN_GREEN};
  }
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

  ${mediaQuery.lessThan(ScreenSize.LG)`
  `}

  .sale-ended--title {
    font-family: 'Acrom-Bold';
    text-transform: uppercase;
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
  }

  .sale-ended--content {
    margin-top: 2rem;
    li {
      line-height: 2.4rem;
    }

    span {
      color: ${ColorConstants.MAIN_GREEN};
    }
  }
`;
