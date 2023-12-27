import { AttributesRepositoryInMemory } from '@test/repositories/AttributesRepositoryInMemory';

import { DeleteAttributesUseCase } from './DeleteAttributesUseCase';

import { makeAttributes } from '@test/factories/AttributesFactory';

describe('DeleteAttributesUseCase', () => {
  it('should be able to update a attribute', async () => {
    const attributesRepositoryInMemory = new AttributesRepositoryInMemory();

    const deleteAttributesUseCase = new DeleteAttributesUseCase(
      attributesRepositoryInMemory,
    );

    const attributes = makeAttributes();

    await attributesRepositoryInMemory.create(attributes);

    await deleteAttributesUseCase.execute({
      id: attributes.id,
    });

    expect(attributesRepositoryInMemory.attributes).toHaveLength(0);
  });
});
