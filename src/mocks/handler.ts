import { rest } from 'msw';
import {
  metronionByOwnerHandler,
  metronionInfoHandler,
  metronionActivitiesHandler,
  metronionOffersHandler,
} from './metronion';
import { accessoriesByOwnerHandler } from './accessories';

export const handlers = [
  rest.post('/v1/metronion/metronionByOwner', metronionByOwnerHandler),
  rest.get('/v1/metronion/metronionInfo', metronionInfoHandler),
  rest.get('/v1/metronion/activities', metronionActivitiesHandler),
  rest.get('/v1/metronion/offers', metronionOffersHandler),

  rest.post('/v1/accessories/accessoriesByOwner', accessoriesByOwnerHandler),
];
