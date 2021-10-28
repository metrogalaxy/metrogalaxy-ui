import { HttpStatusCode } from './constants';
import { newErrorResponse, generateArray } from './utils';
import { FetchMetronionItem } from 'src/app/service/API/inventory';
import MetronionImage from './assets/Boy_1.png';
import BigNumber from 'bignumber.js';

enum SortType {
  LowestID = 'LowestID',
  HighestID = 'HighestID',
  LowestPrice = 'LowestPrice',
  HighestPrice = 'HighestPrice',
}

function generateItems(address: string): FetchMetronionItem[] {
  return generateArray(1, 10).map(item => ({
    id: item.toString(),
    owner: address,
    url: MetronionImage,
    price: new BigNumber(0.1).multipliedBy(item).toString(),
  }));
}

export const inventoryHandler = (req, res, ctx) => {
  const address = req.url.searchParams.get('address');
  if (address === '') {
    return res(
      ctx.status(HttpStatusCode.BadRequest),
      ctx.json(newErrorResponse('invalid request params')),
    );
  }

  const id = req.url.searchParams.get('id');
  const sortParams = req.url.searchParams.get('sort');
  const page = req.url.searchParams.get('page');
  const limit = req.url.searchParams.get('limit');

  const items = generateItems(address);

  let filtered = items.filter(item => {
    let condition = true;
    if (id) {
      condition = condition && item.id === id;
    }
    return condition;
  });

  filtered.sort((firstItem, secondItem) => {
    if (sortParams === SortType.LowestID) {
      const first = new BigNumber(firstItem.id);
      const second = new BigNumber(secondItem.id);
      return first.comparedTo(second);
    } else if (sortParams === SortType.HighestID) {
      const first = new BigNumber(firstItem.id);
      const second = new BigNumber(secondItem.id);
      return -first.comparedTo(second);
    } else if (sortParams === SortType.LowestPrice) {
      const first = new BigNumber(firstItem.price);
      const second = new BigNumber(secondItem.price);
      return first.comparedTo(second);
    } else if (sortParams === SortType.HighestPrice) {
      const first = new BigNumber(firstItem.price);
      const second = new BigNumber(secondItem.price);
      return -first.comparedTo(second);
    }
    return 0;
  });

  const pageNumber = new BigNumber(page);
  const limitNumber = new BigNumber(limit);
  const startOffset = pageNumber.multipliedBy(limitNumber);
  const endOffset = startOffset.plus(limitNumber);
  filtered = filtered.slice(startOffset.toNumber(), endOffset.toNumber());

  return res(
    ctx.json({
      count: items.length,
      items: filtered,
    }),
  );
};

export const inventoryCountHandler = (req, res, ctx) => {
  const address = req.url.searchParams.get('address');
  if (address === '') {
    return res(
      ctx.status(HttpStatusCode.BadRequest),
      ctx.json(newErrorResponse('invalid request params')),
    );
  }

  const items = generateItems(address);

  return res(
    ctx.json({
      count: items.length,
    }),
  );
};
