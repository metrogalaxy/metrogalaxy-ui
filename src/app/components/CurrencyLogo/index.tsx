import ENV from 'src/app/config/env';
import { Image } from 'react-bootstrap';

let IconComp;
switch (ENV.CHAIN_TOKEN) {
  case 'ETH':
    IconComp = require('./assets/ETH.png').default;
    break;
  case 'BNB':
    IconComp = require('./assets/BNB.png').default;
    break;
}

export function IconComponent({ ...props }) {
  return <Image src={IconComp} {...props} />;
}
