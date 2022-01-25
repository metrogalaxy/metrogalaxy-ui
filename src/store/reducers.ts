/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

import accountReducer from 'src/app/components/Account/slice';
import inventoryReducer from 'src/app/pages/App/Inventory/slice';
import globalReducer from 'src/app/globalSlice';

export function createReducer() {
  return combineReducers({
    account: accountReducer,
    inventory: inventoryReducer,
    global: globalReducer,
  });
}
