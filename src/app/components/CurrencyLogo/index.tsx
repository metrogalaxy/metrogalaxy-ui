import ENV from 'src/app/config/env';
import { Image } from '@chakra-ui/react';

let IconComp;
switch (ENV.CHAIN_TOKEN) {
  case 'AVAX':
    IconComp = require('src/app/assets/icon/avax.svg').default;
    break;
}

export function IconComponent({ ...props }) {
  return <Image src={IconComp} {...props} />;
}
