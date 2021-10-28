import { rest } from 'msw';
import { inventoryHandler, inventoryCountHandler } from './inventory';

export const handlers = [
  rest.get('/api/inventory', inventoryHandler),
  rest.get('/api/inventory/count', inventoryCountHandler),
];
