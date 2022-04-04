import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'src/utils/@reduxjs/toolkit';
import { GlobalState } from './types';
import { useSelector } from 'react-redux';
import { selectGlobal } from './selectors';
import { UserInfo } from 'src/app/service/Auth';

export const initialState: GlobalState = {
  avaxPrice: 0,
  metroPrice: 0.01,
  userInfo: null,
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setAvaxPrice(state, action: PayloadAction<number>) {
      state.avaxPrice = action.payload;
    },
    setMetroPrice(state, action: PayloadAction<number>) {
      state.metroPrice = action.payload;
    },
    setUserInfo(state, action: PayloadAction<UserInfo | null>) {
      if (action.payload) {
        state.userInfo = JSON.parse(JSON.stringify(action.payload));
      } else {
        state.userInfo = null;
      }
    },
  },
});

export const { actions: globalActions } = slice;

export const useGlobalSlice = () => {
  return { actions: slice.actions };
};

export const useGlobalState = (): GlobalState => {
  return useSelector(selectGlobal);
};

export default slice.reducer;
