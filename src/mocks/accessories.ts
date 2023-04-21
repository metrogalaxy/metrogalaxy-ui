import { IGetAccessoriesByPageParams } from 'src/app/service/Accessories/api';

export const accessoriesByOwnerHandler = (req, res, ctx) => {
  const params: IGetAccessoriesByPageParams = req.body;

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
          name: 'Red Hat',
          totalSupply: 100,
          owner: params.account,
          currency: 'AVAX',
          uri: 'https://api.metrogalaxy.io/accessories/metadata' + item,
        };
      }),
    }),
  );
};
