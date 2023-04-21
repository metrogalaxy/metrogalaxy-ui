import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.inventory || initialState;

export const selectInventory = createSelector([selectSlice], state => state);
