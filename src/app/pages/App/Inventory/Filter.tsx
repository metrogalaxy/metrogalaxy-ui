import * as React from 'react';
import { FilterBox, FormData } from '../components/FilterBox';
import { useDispatch } from 'react-redux';
import { useInventorySlice } from './slice';
import { useEthers } from '@quangkeu1995/dappcore';
import { SortType } from '../components/FilterBox';
import { getEnumKey } from 'src/utils/helpers';
import { useAccount } from 'src/app/hooks';

export function Filter() {
  const { isActivated } = useAccount();
  const { account } = useEthers();
  const dispatch = useDispatch();
  const { actions } = useInventorySlice();

  React.useEffect(() => {
    dispatch(actions.setId(''));
    dispatch(actions.setSort(getEnumKey(SortType, SortType.LowestID)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (account && isActivated) {
      dispatch(actions.setAddress(account));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, isActivated]);

  const filterHandler = (data: FormData) => {
    if (isActivated) {
      if ('id' in data) {
        dispatch(actions.setId(data.id));
      }
      if ('sort' in data) {
        dispatch(actions.setSort(data.sort));
      }
    }
  };

  return <FilterBox filterHandler={filterHandler} isActivated={isActivated} />;
}
