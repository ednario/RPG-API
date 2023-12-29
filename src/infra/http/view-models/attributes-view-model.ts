import { Attributes } from '@attributes/entities/Attributes';

export class AttributesViewModel {
  static toHTTP(attributes: Attributes) {
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
}
