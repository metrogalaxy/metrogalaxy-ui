/**
 * Asynchronously loads the component for HomePage
 */

import { LoadingScreen } from 'src/app/components/Loading';
import { lazyLoad } from 'src/utils/loadable';

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
  {
    fallback: <LoadingScreen />,
  },
);
