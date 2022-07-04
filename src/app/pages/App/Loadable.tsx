import * as React from 'react';
import { lazyLoad } from 'src/utils/loadable';
import { LoadingBackground } from './components/Background';

export const Metronion = lazyLoad(
  () => import('./Metronion'),
  module => module.Metronion,
  {
    fallback: <LoadingBackground />,
  },
);

export const Marketplace = lazyLoad(
  () => import('./Marketplace'),
  module => module.Marketplace,
  {
    fallback: <LoadingBackground />,
  },
);

// export const Staking = lazyLoad(
//   () => import('./Staking'),
//   module => module.Staking,
//   {
//     fallback: <LoadingBackground />,
//   },
// );

// export const Land = lazyLoad(
//   () => import('./Land'),
//   module => module.Land,
//   {
//     fallback: <LoadingBackground />,
//   },
// );

export const Inventory = lazyLoad(
  () => import('./Inventory'),
  module => module.Inventory,
  {
    fallback: <LoadingBackground />,
  },
);

export const MetronionInfo = lazyLoad(
  () => import('./MetronionInfo'),
  module => module.MetronionInfo,
  {
    fallback: <LoadingBackground />,
  },
);

export const Login = lazyLoad(
  () => import('./Login'),
  module => module.Login,
  {
    fallback: <LoadingBackground />,
  },
);

export const SignUp = lazyLoad(
  () => import('./SignUp'),
  module => module.SignUp,
  {
    fallback: <LoadingBackground />,
  },
);

export const ResetPassword = lazyLoad(
  () => import('./ResetPassword'),
  module => module.ResetPassword,
  {
    fallback: <LoadingBackground />,
  },
);

export const Profile = lazyLoad(
  () => import('./Profile'),
  module => module.Profile,
  {
    fallback: <LoadingBackground />,
  },
);

export const VerifyEmail = lazyLoad(
  () => import('./VerifyEmail'),
  module => module.VerifyEmail,
  {
    fallback: <LoadingBackground />,
  },
);
