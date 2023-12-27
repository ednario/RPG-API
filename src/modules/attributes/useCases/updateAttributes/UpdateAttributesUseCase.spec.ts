import { AttributesRepositoryInMemory } from '@test/repositories/AttributesRepositoryInMemory';

import { UpdateAttributesUseCase } from './UpdateAttributesUseCase';

import { makeAttributes } from '@test/factories/AttributesFactory';

describe('UpdateAttributesUseCase', () => {
  it('should be able to update a attribute', async () => {
    const attributesRepositoryInMemory = new AttributesRepositoryInMemory();

    const updateAttributesUseCase = new UpdateAttributesUseCase(
      attributesRepositoryInMemory,
    );

    const attributes = makeAttributes();

    await attributesRepositoryInMemory.create(attributes);

    await updateAttributesUseCase.execute({
      id: attributes.id,
      hp: attributes.hp,
      mp: attributes.mp,
      strength: attributes.strength,
      agility: attributes.agility,
      dexterity: attributes.dexterity,
      constitution: attributes.constitution,
      intelligence: attributes.intelligence,
    });

    expect(attributesRepositoryInMemory.attributes[0].hp).toBe(100);
  });
});
