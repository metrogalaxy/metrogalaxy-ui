import { useSelector } from 'react-redux';
import { selectAccount } from 'src/app/components/Account/slice/selectors';
import { useConfig, useEthers } from '@quangkeu1995/dappcore';
import { useDispatch } from 'react-redux';
import { useAccountSlice } from 'src/app/components/Account/slice';

interface useAccountReturn {
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
  const { deactivate, account } = useEthers();
  const { actions } = useAccountSlice();
  const config = useConfig();
  const dispatch = useDispatch();
  const accountState = useSelector(selectAccount);

  const logout = async (): Promise<void> => {
    await deactivate();
    dispatch(actions.setIsConnected(false));
    return;
  };

  let isActivated = false;
  if (
    account &&
    accountState.isConnected &&
    accountState.currentChainId &&
    accountState.currentChainId === config.readOnlyChainId
  ) {
    isActivated = true;
  }

  return {
    currentChainId: accountState.currentChainId,
    isActivated: isActivated,
    logout: logout,
  };
}
