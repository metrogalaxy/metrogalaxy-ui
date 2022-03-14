import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'src/utils/@reduxjs/toolkit';
import { GlobalState } from './types';
import { User } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { selectGlobal } from './selectors';

export const initialState: GlobalState = {
  avaxPrice: 0,
  metroPrice: 0.01,
  user: null,
  userName: '',
  userWeb3Address: '',
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
    setUserProfile(state, action: PayloadAction<User | null>) {
      if (action.payload) {
        state.user = JSON.parse(JSON.stringify(action.payload));
      } else {
        state.user = null;
      }
    },
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
    setUserWeb3Address(state, action: PayloadAction<string>) {
      state.userWeb3Address = action.payload;
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
