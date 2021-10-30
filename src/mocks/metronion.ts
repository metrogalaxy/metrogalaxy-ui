import MetronionImage from './assets/Boy_1.png';
import BodyImage from './assets/body.png';
import HairImage from './assets/hair.png';
import FaceImage from './assets/face.png';
import TopImage from './assets/top.png';
import BottomImage from './assets/bottom.png';
import AccessoriesImage from './assets/accessories.png';
import EquipmentImage from './assets/equipment.png';
import { AttributeType } from 'src/app/config/constants';

export const metronionInfoHandler = (req, res, ctx) => {
  const { id } = req.params;

  return res(
    ctx.json({
      id: id,
      url: MetronionImage,
      listPrice: 1,
      attributes: [
        {
          type: AttributeType.Body,
          url: BodyImage,
          description: 'Basic White',
          rarity: 35,
        },
        {
          type: AttributeType.Hair,
          url: HairImage,
          description: 'Orange High Bun',
          rarity: 5,
        },
        {
          type: AttributeType.Face,
          url: FaceImage,
          description: 'Dove Eyes',
          rarity: 65,
        },
        {
          type: AttributeType.Top,
          url: TopImage,
          description: 'White Shirt',
          rarity: 50,
        },
        {
          type: AttributeType.Bottom,
          url: BottomImage,
          description: 'Loose Pant',
          rarity: 40,
        },
        {
          type: AttributeType.Accessories,
          url: AccessoriesImage,
          description: 'Pink Heart Glass',
          rarity: 30,
        },
        {
          type: AttributeType.Equipment,
          url: EquipmentImage,
          description: 'Green Skateboard',
          rarity: 1,
        },
      ],
    }),
  );
};
