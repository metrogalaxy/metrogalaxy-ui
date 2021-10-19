import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'src/utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'src/utils/redux-injectors';
import { accountSaga } from './saga';
import { AccountState } from './types';

export const initialState: AccountState = {
  account: null,
  currentChainId: 0,
};

const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount(state, action: PayloadAction<string | null>) {
      state.account = action.payload;
    },
    setCurrentChainId(state, action: PayloadAction<number>) {
      state.currentChainId = action.payload;
    },
  },
});

export const { actions: accountActions } = slice;

export const useAccountSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
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
