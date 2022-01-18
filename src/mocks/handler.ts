import { rest } from 'msw';
import {
  metronionByOwnerHandler,
  metronionInfoHandler,
  metronionActivitiesHandler,
  metronionOffersHandler,
} from './metronion';

export const handlers = [
  rest.post('/v1/metronion/metronionByOwner', metronionByOwnerHandler),
  rest.get('/v1/metronion/metronionInfo', metronionInfoHandler),
  rest.get('/v1/metronion/activities', metronionActivitiesHandler),
  rest.get('/v1/metronion/offers', metronionOffersHandler),
  // rest.get('/api/inventory', inventoryHandler),
  // rest.get('/api/inventory/count', inventoryCountHandler),
  // rest.get('/api/metronion/:id', metronionInfoHandler),
];
