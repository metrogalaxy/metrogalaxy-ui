import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'src/utils/@reduxjs/toolkit';
import { InventoryState } from './types';
import {
  MetronionFilterParams,
  DEFAULT_METRONION_FILTER_PARAMS,
} from 'src/app/service/Metronion';
import {
  AccessoriesFilterParams,
  DEFAULT_ACCESSORIES_FILTER_PARAMS,
} from 'src/app/service/Accessories';

export const initialState: InventoryState = {
  metronionFilter: DEFAULT_METRONION_FILTER_PARAMS,
  accessoriesFilter: DEFAULT_ACCESSORIES_FILTER_PARAMS,
};

const slice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setMetronionFilter(state, action: PayloadAction<MetronionFilterParams>) {
      state.metronionFilter = action.payload;
    },
    setAccessoriesFilter(
      state,
      action: PayloadAction<AccessoriesFilterParams>,
    ) {
      state.accessoriesFilter = action.payload;
    },
  },
});

export const { actions: inventoryActions } = slice;

export const useInventorySlice = () => {
  // useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

export default slice.reducer;

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
