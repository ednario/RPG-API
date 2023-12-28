import { Attributes } from './attributes';

let attributes: Attributes;

describe('Attributes', () => {
  beforeEach(() => {
    attributes = new Attributes({
      hp: 100,
      mp: 100,
      strength: 10,
      agility: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      characterId: 'a813bbb8-f052-47a0-a548-675455ebd8a7',
    });
  });

  it('should create attributes', () => {
    expect(attributes).toBeDefined();
  });
});
