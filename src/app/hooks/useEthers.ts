import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

export function useEthers() {
  const result = useWeb3React<Web3Provider>();
}
