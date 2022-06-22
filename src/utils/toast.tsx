import { toast } from 'react-toastify';
import { ITransactionReceipt } from 'src/app/service/types';
import { GetExplorerTransactionLink } from 'src/app/config/constants';
import env, { ToastConfig } from 'src/app/config';
import { Box, Link } from '@chakra-ui/react';
import { parseError } from 'src/utils/errors';

export async function toastHandler(
  txHashPromise: Promise<ITransactionReceipt>,
  pendingMsg: string,
  successMsg: string,
  successHandler: () => any,
  errorHandler: () => any,
) {
  toast.dismiss();
  toast.promise(
    txHashPromise,
    {
      pending: {
        render() {
          return pendingMsg;
        },
      },
      success: {
        render({ data }) {
          const txReceipt = data as ITransactionReceipt;
          const txHashUrl = GetExplorerTransactionLink(
            env.chainId,
            txReceipt.txHash,
          );
          successHandler();
          return (
            <Box>
              {successMsg}, tx hash:{' '}
              <Link href={txHashUrl} target="_blank" rel="noreferrer">
                {txReceipt.txHash}
              </Link>
            </Box>
          );
        },
      },
      error: {
        render({ data }) {
          errorHandler();
          const err = parseError(data);
          const errMsg = err.data ? err.data.message : err.message;
          return errMsg;
        },
      },
    },
    ToastConfig,
  );
}