import * as React from 'react';
import { lazyLoad } from 'src/utils/loadable';
import { LoadingBackground } from './components/Background';

export const Metronion = lazyLoad(
  () => import('./Metronion'),
  module => module.Metronion,
);

export const Marketplace = lazyLoad(
  () => import('./Marketplace'),
  module => module.Marketplace,
);

export const Staking = lazyLoad(
  () => import('./Staking'),
  module => module.Staking,
);

export const Land = lazyLoad(
  () => import('./Land'),
  module => module.Land,
  {
    fallback: <LoadingBackground />,
  },
);
