import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'src/utils/@reduxjs/toolkit';
import { GlobalState } from './types';

export const initialState: GlobalState = {
  avaxPrice: 0,
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setAvaxPrice(state, action: PayloadAction<number>) {
      state.avaxPrice = action.payload;
    },
  },
});

export const { actions: globalActions } = slice;

export const useGlobalSlice = () => {
  return { actions: slice.actions };
};

export default slice.reducer;
