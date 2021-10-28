import * as React from 'react';
import styled from 'styled-components/macro';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { useEthers } from '@usedapp/core';
import { useAccount } from 'src/app/hooks';
import { useFetchMetronions } from 'src/app/service/API/inventory';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from 'react-query';
import { ErrorComponent } from './Error';
import { useSelector, useDispatch } from 'react-redux';
import { selectInventory } from './slice/selectors';
import { useInventorySlice } from './slice';
import { MetronionPanel } from '../components/MetronionPanel';

export function ItemPanel() {
  const { isActivated } = useAccount();
  const { account } = useEthers();
  const dispatch = useDispatch();
  const { actions } = useInventorySlice();
  const query = useSelector(selectInventory);

  const { data } = useFetchMetronions(query, {
    enabled: isActivated && account && query.address !== '',
    staleTime: 2000,
    suspense: true,
  });

  const handlePageChange = (page: number) => {
    dispatch(actions.setPage(page));
  };

  return (
    <Wrapper>
      {isActivated && data && (
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              fallbackRender={({ error, resetErrorBoundary }) => (
                <ErrorComponent
                  error={error}
                  retryHandler={() => resetErrorBoundary()}
                />
              )}
              onReset={reset}
            >
              <MetronionPanel
                items={data.items}
                count={data.count}
                handlePageChange={handlePageChange}
              />
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-left: 6rem;
  height: 100%;
  width: 100%;

  ${mediaQuery.lessThan(ScreenSize.LG)`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
