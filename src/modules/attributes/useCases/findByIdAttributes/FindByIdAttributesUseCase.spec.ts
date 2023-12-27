import { AttributesRepositoryInMemory } from '@test/repositories/AttributesRepositoryInMemory';

import { FindByIdAttributesUseCase } from './FindByIdAttributesUseCase';

import { makeAttributes } from '@test/factories/AttributesFactory';

describe('FindByIdAttributesUseCase', () => {
  it('should be able to find a attribute by id', async () => {
    const attributesRepositoryInMemory = new AttributesRepositoryInMemory();

    const findByIdAttributesUseCase = new FindByIdAttributesUseCase(
      attributesRepositoryInMemory,
    );

    const attributes = makeAttributes();

    await attributesRepositoryInMemory.create(attributes);

    const response = await findByIdAttributesUseCase.execute({
      id: attributes.id,
    });

    expect(response).toHaveProperty('attributes');
  });
});
