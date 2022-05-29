import { grpc } from '@improbable-eng/grpc-web';
import { default as GrpcFetcher } from '../grpc';
import {
  GetMetadataResponse,
  MetronionStats,
  Wearables,
} from 'src/proto/metronion/v1/metronion_pb';
import { Stats } from 'src/app/service/types';
import { MetronionWearables } from '../index';
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

describe('Metronion GRPC Service Test Suite', () => {
  let grpcFetcher: GrpcFetcher;
  beforeAll(() => {
    grpc.setDefaultTransport(NodeHttpTransport());
    grpcFetcher = new GrpcFetcher();
  });

  // test('test getMetronionInfo', async () => {
  //   const metronion = await grpcFetcher.getMetronionInfo(1);
  //   console.log(metronion);
  // });

  // test('test ConvertMetadataResponse', () => {
  //   const testData = {
  //     id: 1,
  //     createdAtTimestamp: 1653464857,
  //     updatedAtTimestamp: 1653464859,
  //     createdAtBlock: 123456,
  //     updatedAtBlock: 234567,
  //     name: 'Metronion 1',
  //     owner: '0x6Af3E39171611c3659df320Ae98cb9f2be3209FD',
  //     versionId: 0,
  //     gender: 'male',
  //     type: 'basic',
  //     lastPrice: 1.23,
  //     currentPrice: 2.345,
  //     topBid: 3.456,
  //     listedBy: '0x09B64e3d589AE90ACCE69C75C346722D8EbFB65D',
  //     image: '',
  //     baseStats: {
  //       creativity: 10,
  //       charisma: 11,
  //       resolve: 12,
  //       intellect: 13,
  //       fitness: 14,
  //     },
  //     specialStats: {
  //       creativity: 0,
  //       charisma: 0,
  //       resolve: 0,
  //       intellect: 0,
  //       fitness: 0,
  //     },
  //     star: 3,
  //     specialStar: 0,
  //     wearables: [
  //       {
  //         id: 'B_Hair_01',
  //         type: 'hair',
  //         name: 'Hair Red',
  //         gender: 'male',
  //         rarity: 'common',
  //         changeable: true,
  //         isOrigin: true,
  //         isRequired: true,
  //         image: '',
  //         stats: {
  //           creativity: 10,
  //           charisma: 11,
  //           resolve: 12,
  //           intellect: 13,
  //           fitness: 14,
  //         },
  //       },
  //     ],
  //   };
  //   const data = new GetMetadataResponse();
  //   data.setId(testData.id);
  //   data.setCreatedAtTimestamp(testData.createdAtTimestamp);
  //   data.setUpdatedAtTimestamp(testData.updatedAtTimestamp);
  //   data.setCreatedAtBlock(testData.createdAtBlock);
  //   data.setUpdatedAtBlock(testData.updatedAtBlock);
  //   data.setName(testData.name);
  //   data.setOwner(testData.owner);
  //   data.setVersionId(testData.versionId);
  //   data.setType(testData.type);
  //   data.setGender(testData.gender);
  //   data.setLastPrice(testData.lastPrice);
  //   data.setCurrentPrice(testData.currentPrice);
  //   data.setTopBid(testData.topBid);
  //   data.setListedBy(testData.listedBy);
  //   data.setImage(testData.image);
  //   data.setBaseStats(composeMetronionStats(testData.baseStats));
  //   data.setSpecialStats(composeMetronionStats(testData.specialStats));
  //   data.setStar(testData.star);
  //   data.setSpecialStar(testData.specialStar);
  //   data.setWearablesList(composeWearablesList(testData.wearables));
  //   const result = ConvertMetadataResponse(data);
  //   expect(result).toEqual(testData);
  // });
});

function composeMetronionStats(stats: Stats): MetronionStats {
  const result = new MetronionStats();
  result.setCreativity(stats.creativity);
  result.setCharisma(stats.charisma);
  result.setResolve(stats.resolve);
  result.setIntellect(stats.intellect);
  result.setFitness(stats.fitness);
  return result;
}

function composeWearablesList(data: MetronionWearables[]): Array<Wearables> {
  return data.map(item => {
    const resItem = new Wearables();
    resItem.setId(item.id);
    resItem.setType(item.type);
    resItem.setName(item.name);
    resItem.setGender(item.gender);
    resItem.setRarity(item.rarity);
    resItem.setChangeable(item.changeable);
    resItem.setIsOrigin(item.isOrigin);
    resItem.setIsRequired(item.isRequired);
    resItem.setImage(item.image);
    if (item.stats) {
      resItem.setStats(composeMetronionStats(item.stats));
    }
    return resItem;
  });
}
