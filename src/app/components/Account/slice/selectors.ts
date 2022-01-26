import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/types';
import { initialState } from '.';

const selectSlice = (state: RootState) => {
  if (state) {
    return state.account || initialState;
  }
  return initialState;
};

export const selectAccount = createSelector([selectSlice], state => state);
