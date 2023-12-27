import { Character as RawCharacter } from '@prisma/client';

import { Character } from '@character/entities/Character';

export class PrismaCharacterMapper {
  static toPrisma(character: Character) {
    return {
      id: character.id,
      name: character.name,
      race: character.race,
      level: character.level,
      experience: character.experience,
      gold: character.gold,
      maximumAttack: character.maximumAttack,
      maximumDefense: character.maximumDefense,
    };
  }

  static toDomain(raw: RawCharacter): Character {
    return new Character(
      {
        name: raw.name,
        race: raw.race,
        level: raw.level,
        experience: raw.experience,
        gold: raw.gold,
        maximumAttack: raw.maximumAttack,
        maximumDefense: raw.maximumDefense,
      },
      raw.id,
    );
  }
}
