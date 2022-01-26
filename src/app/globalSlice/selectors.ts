import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/types';
import { initialState } from '.';

const selectSlice = (state: RootState) => {
  if (state) {
    return state.global || initialState;
  }
  return initialState;
};

export const selectGlobal = createSelector([selectSlice], state => state);
