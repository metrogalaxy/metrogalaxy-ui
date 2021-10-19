import { useSelector } from 'react-redux';
import { selectAccount } from 'src/app/pages/App/components/Account/slice/selectors';
import { useConfig, useEthers } from '@usedapp/core';
import { useDispatch } from 'react-redux';
import { useAccountSlice } from 'src/app/pages/App/components/Account/slice';

interface useAccountReturn {
  account: string | null;
  currentChainId: number;
  isActivated: boolean;
  logout: () => Promise<void>;
}

// const metamaskService = new MetamaskService();
/**
 * useAccount hook
 * @returns
 * isActivated: indicate user connect wallet status
 * logout: function to logout the wallet
 */
export function useAccount(): useAccountReturn {
  const { deactivate } = useEthers();
  const { actions } = useAccountSlice();
  const config = useConfig();
  const dispatch = useDispatch();
  const accountState = useSelector(selectAccount);

  const logout = async (): Promise<void> => {
    await deactivate();
    dispatch(actions.setAccount(null));
    return;
  };

  let isActivated = false;
  if (
    accountState.account &&
    accountState.currentChainId &&
    accountState.currentChainId === config.readOnlyChainId
  ) {
    isActivated = true;
  }

  // console.log('account ' + account);

  return {
    account: accountState.account,
    currentChainId: accountState.currentChainId,
    isActivated: isActivated,

    logout: logout,
  };
}
