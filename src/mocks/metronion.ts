import { IGetMetronionByPageParams } from 'src/app/service/Metronion/api';
import { ACTIVITIY_TYPE } from 'src/app/config/constants';

export const metronionByOwnerHandler = (req, res, ctx) => {
  const params: IGetMetronionByPageParams = req.body;

  const ids: number[] = [];
  for (
    let i = params.offset * params.limit;
    i < params.offset * params.limit + params.limit;
    i++
  ) {
    ids.push(i);
  }

  return res(
    ctx.json({
      timestamp: 1642057390,
      count: 10,
      data: ids.map(item => {
        return {
          id: item,
          createdAtTimestamp: 1641976640 + item,
          updatedAtTimestamp: 1641976640 + item,
          createdAtBlock: 4746545 + item,
          updatedAtBlock: 4746545 + item,
          name: '',
          versionId: 0,
          owner: params.account,
          currency: 'AVAX',
          uri: 'https://api.metrogalaxy.io/metronion/metadata' + item,
        };
      }),
    }),
  );
};

export const metronionInfoHandler = (req, res, ctx) => {
  const metronionId = req.url.searchParams.get('id');
  return res(
    ctx.json({
      timestamp: 1642057390,
      data: {
        id: metronionId,
        createdAtTimestamp: 1641976640,
        updatedAtTimestamp: 1641976640,
        createdAtBlock: 4746545,
        updatedAtBlock: 4746545,
        name: '',
        versionId: 0,
        lastPrice: 1,
        owner: '0xF21D8Bf96390B1c9FB49f3951Ef33B06CE9AF428',
        currency: 'AVAX',
        uri: 'https://api.metrogalaxy.io/metronion/metadata' + metronionId,
      },
    }),
  );
};

export const metronionActivitiesHandler = (req, res, ctx) => {
  const metronionId = req.url.searchParams.get('id');
  return res(
    ctx.json({
      timestamp: 1642057390,
      data: [
        {
          id: metronionId,
          activityType: ACTIVITIY_TYPE.MINT,
          from: '0x09B64e3d589AE90ACCE69C75C346722D8EbFB65D',
          to: '0x2CDbB4ae2bc4CBa896FD8aBc526D4ac0F459C33B',
          timestamp: 1640970000,
          blockNumber: 4746545,
        },
        {
          id: metronionId,
          activityType: ACTIVITIY_TYPE.TRANSFER,
          from: '0x2CDbB4ae2bc4CBa896FD8aBc526D4ac0F459C33B',
          to: '0x9bA0E58997182E6d09B736F3de9Dc58F93250578',
          timestamp: 1642416665,
          blockNumber: 4766545,
        },
        {
          id: metronionId,
          activityType: ACTIVITIY_TYPE.OFFER,
          from: '0x6Af3E39171611c3659df320Ae98cb9f2be3209FD',
          to: '0x9bA0E58997182E6d09B736F3de9Dc58F93250578',
          timestamp: 1642417016,
          blockNumber: 4768545,
          price: 1.2,
        },
      ],
    }),
  );
};

export const metronionOffersHandler = (req, res, ctx) => {
  const metronionId = req.url.searchParams.get('id');
  return res(
    ctx.json({
      timestamp: 1642057390,
      data: [
        {
          id: metronionId,
          from: '0x09B64e3d589AE90ACCE69C75C346722D8EbFB65D',
          to: '0x2CDbB4ae2bc4CBa896FD8aBc526D4ac0F459C33B',
          price: 0.12345,
          timestamp: 1640970000,
          blockNumber: 4746545,
        },
        {
          id: metronionId,
          from: '0x6Af3E39171611c3659df320Ae98cb9f2be3209FD',
          to: '0x2CDbB4ae2bc4CBa896FD8aBc526D4ac0F459C33B',
          price: 1.24565,
          timestamp: 1642416665,
          blockNumber: 4766545,
        },
      ],
    }),
  );
};
