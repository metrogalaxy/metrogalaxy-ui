/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'src/utils/loadable';

export const NotFoundPage = lazyLoad(
  () => import('./index'),
  module => module.NotFoundPage,
);
