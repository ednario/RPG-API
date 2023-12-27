import { Character } from '@character/entities/Character';

export class CharacterViewModel {
  static toHTTP(character: Character) {
    return {
      id: character.id,
      name: character.name,
      race: character.race,
      level: character.level,
      experience: character.experience,
      gold: character.gold,
      maximumAttack: character.maximumAttack,
      maximumDefense: character.maximumDefense,
      userId: character.userId,
    };
  }
}
