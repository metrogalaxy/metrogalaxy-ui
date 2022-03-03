import { Image } from '@chakra-ui/react';
import env from 'src/app/config';
import MetroTokenImg from 'src/app/assets/icon/metro.svg';

let IconComp;
switch (env.chainToken) {
  case 'AVAX':
    IconComp = require('src/app/assets/icon/avax.svg').default;
    break;
}

export function IconComponent({ ...props }) {
  return <Image src={IconComp} {...props} />;
}

export function MetroTokenComponent({ ...props }) {
  return <Image src={MetroTokenImg} {...props} />;
}
