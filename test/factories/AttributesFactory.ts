import { Attributes, AttributesProps } from '@attributes/entities/attributes';

type Override = Partial<AttributesProps>;

export function makeAttributes(override: Override = {}): Attributes {
  const attributes = new Attributes({
    hp: 100,
    mp: 100,
    strength: 10,
    agility: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    characterId: 'a813bbb8-f052-47a0-a548-675455ebd8a7',
    ...override,
  });

  return attributes;
}
