import * as React from 'react';
import { viewportContext } from 'src/utils/viewport';

export function useViewport() {
  /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
}
