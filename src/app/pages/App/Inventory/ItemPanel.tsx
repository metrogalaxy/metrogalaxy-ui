import * as React from 'react';
import styled from 'styled-components/macro';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { useEthers } from '@quangkeu1995/dappcore';
import { useAccount } from 'src/app/hooks';
import { useFetchInventory } from 'src/app/service/API/inventory';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from 'react-query';
import { ErrorComponent } from './Error';
import { useSelector, useDispatch } from 'react-redux';
import { selectInventory } from './slice/selectors';
import { useInventorySlice } from './slice';
import { MetronionPanel } from '../components/MetronionPanel';
import { Pagination } from '../components/MetronionPanel/Pagination';
import { METRONION_PANEL_LIMITS_PER_PAGE } from 'src/app/config/constants';

export function ItemPanel() {
  const { isActivated } = useAccount();
  const { account } = useEthers();
  const dispatch = useDispatch();
  const { actions } = useInventorySlice();
  const query = useSelector(selectInventory);

  const { data } = useFetchInventory(query, {
    enabled: isActivated && account && query.address !== '',
    staleTime: 2000,
    suspense: true,
  });

  const handlePageChange = (page: number) => {
    dispatch(actions.setPage(page));
  };

  let isShowPagination = false;
  if (data && data.count > METRONION_PANEL_LIMITS_PER_PAGE) {
    isShowPagination = true;
  }
  if (
    data &&
    data.items.length < METRONION_PANEL_LIMITS_PER_PAGE &&
    query.id !== ''
  ) {
    isShowPagination = false;
  }

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
              <MetronionPanel items={data.items} count={data.count} />
              {isShowPagination && (
                <Pagination
                  count={data.count}
                  handlePageChange={handlePageChange}
                />
              )}
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;
