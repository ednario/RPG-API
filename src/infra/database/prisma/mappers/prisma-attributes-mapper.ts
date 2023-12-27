import { Attributes as RawAttributes } from '@prisma/client';

import { Attributes } from '@attributes/entities/attributes';

export class PrismaAttributesMapper {
  static toPrisma(attributes: Attributes) {
    return {
      id: attributes.id,
      hp: attributes.hp,
      mp: attributes.mp,
      strength: attributes.strength,
      agility: attributes.agility,
      dexterity: attributes.dexterity,
      constitution: attributes.constitution,
      intelligence: attributes.intelligence,
      characterId: attributes.characterId,
    };
  }

  static toDomain(raw: RawAttributes): Attributes {
    return new Attributes(
      {
        hp: raw.hp,
        mp: raw.mp,
        strength: raw.strength,
        agility: raw.agility,
        dexterity: raw.dexterity,
        constitution: raw.constitution,
        intelligence: raw.intelligence,
        characterId: raw.characterId,
      },
      raw.id,
    );
  }
}
