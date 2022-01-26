import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'src/utils/@reduxjs/toolkit';
import { AccountState } from './types';

export const initialState: AccountState = {
  currentChainId: 0,
  isConnected: false,
};

const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setCurrentChainId(state, action: PayloadAction<number>) {
      state.currentChainId = action.payload;
    },
    setIsConnected(state, action: PayloadAction<boolean>) {
      state.isConnected = action.payload;
    },
  },
});

export const { actions: accountActions } = slice;

export const useAccountSlice = () => {
  return { actions: slice.actions };
};

export default slice.reducer;
