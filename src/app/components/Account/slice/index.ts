import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'src/utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { accountSaga } from './saga';
import { AccountState } from './types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const reducer = persistReducer(
  {
    key: slice.name,
    storage,
  },
  slice.reducer,
);

export const useAccountSlice = () => {
  useInjectReducer({ key: slice.name, reducer: reducer });
  useInjectSaga({ key: slice.name, saga: accountSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAccountSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
