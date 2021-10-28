import * as React from 'react';
import styled from 'styled-components/macro';
import { Image } from 'react-bootstrap';
import InventoryIcon from './assets/inventory_icon.png';
import { ColorConstants } from 'src/styles/StyleConstants';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { useHistory } from 'react-router';
import { useFetchMetronionsCount } from 'src/app/service/API/inventory';
import { useEthers } from '@usedapp/core';
import { useAccount } from 'src/app/hooks';

export function Inventory() {
  const { account } = useEthers();
  const { isActivated } = useAccount();
  const history = useHistory();
  const openInventoryPage = () => {
    history.push('/inventory');
  };

  const { data } = useFetchMetronionsCount(account!, {
    enabled: isActivated,
  });

  return (
    <Wrapper onClick={openInventoryPage}>
      <Image className="inventory-icon" src={InventoryIcon} />
      <div className="inventory-text">Inventory</div>
      {data && (
        <div className="inventory-text inventory-number">{data.count}</div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  height: 4.8rem;
  bottom: -5rem;
  right: 4rem;
  background: rgba(11, 25, 38, 0.8);
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  padding: 1rem 1.5rem;

  ${mediaQuery.lessThan(ScreenSize.MD)`
    right: 3rem;
  `}

  .inventory-icon {
    width: 3.2rem;
    height: 100%;
  }

  .inventory-text {
    font-family: 'Acrom';
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${ColorConstants.WHITE};
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  .inventory-number {
    font-family: 'Acrom-Bold';
    margin-left: 2rem;
  }
`;
