import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'src/utils/@reduxjs/toolkit';
import { useInjectReducer } from 'src/utils/redux-injectors';
import { InventoryState } from './types';
import { METRONION_PANEL_LIMITS_PER_PAGE } from 'src/app/config/constants';
import { FetchInventoryQuery } from 'src/app/service/API/inventory';
import { SortType } from 'src/app/pages/App/components/FilterBox';
import { getEnumKey } from 'src/utils/helpers';

export const initialState: InventoryState = {
  address: '',
  id: '',
  sort: getEnumKey(SortType, SortType.LowestID),
  page: 0,
  limit: METRONION_PANEL_LIMITS_PER_PAGE,
};

const slice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<FetchInventoryQuery>) {
      state.address = action.payload.address;
      state.id = action.payload.id;
      state.sort = action.payload.sort;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
    },
    setAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
  },
});

export const { actions: inventoryActions } = slice;

export const useInventorySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useInventorySlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
