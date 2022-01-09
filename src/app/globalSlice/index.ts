import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'src/utils/@reduxjs/toolkit';
import { useInjectReducer } from 'src/utils/redux-injectors';
import { GlobalState } from './types';
import { useEffect } from 'react';
import { persistor } from 'src/index';

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
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useEffect(() => {
    persistor.persist();
  }, []);
  return { actions: slice.actions };
};
