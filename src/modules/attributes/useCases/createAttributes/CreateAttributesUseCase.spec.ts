import { AttributesRepositoryInMemory } from '@test/repositories/AttributesRepositoryInMemory';

import { CreateAttributesUseCase } from './CreateAttributesUseCase';

import { makeAttributes } from '@test/factories/AttributesFactory';

describe('CreateAttributesUseCase', () => {
  it('should be able to create a new attribute', async () => {
    const attributesRepositoryInMemory = new AttributesRepositoryInMemory();

    const createAttributesUseCase = new CreateAttributesUseCase(
      attributesRepositoryInMemory,
    );

    const attributes = makeAttributes();

    const response = await createAttributesUseCase.execute({
      hp: attributes.hp,
      mp: attributes.mp,
      strength: attributes.strength,
      agility: attributes.agility,
      dexterity: attributes.dexterity,
      constitution: attributes.constitution,
      intelligence: attributes.intelligence,
    });

    console.log(response);

    expect(response).toHaveProperty('attributes');
  });
});
