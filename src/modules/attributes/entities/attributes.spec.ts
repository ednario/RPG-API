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
    });
  });

  it('should create attributes', () => {
    expect(attributes).toBeDefined();
  });
});
