import { rest } from 'msw';
import { inventoryHandler, inventoryCountHandler } from './inventory';
import { metronionInfoHandler } from './metronion';

export const handlers = [
  rest.get('/api/inventory', inventoryHandler),
  rest.get('/api/inventory/count', inventoryCountHandler),
  rest.get('/api/metronion/:id', metronionInfoHandler),
];
