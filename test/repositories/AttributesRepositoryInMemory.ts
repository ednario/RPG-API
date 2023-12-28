import { Attributes } from 'src/modules/attributes/entities/attributes';

import { AttributesRepository } from 'src/modules/attributes/repositories/AttributesRepository';

export class AttributesRepositoryInMemory implements AttributesRepository {
  public attributes: Attributes[] = [];

  async create(attributes: Attributes): Promise<void> {
    this.attributes.push(attributes);
  }

  async findAll(): Promise<Attributes[]> {
    return this.attributes;
  }

  async findById(id: string): Promise<Attributes> {
    const attribute = this.attributes.find((attribute) => attribute.id === id);

    if (!attribute) {
      throw new Error('Attribute not found');
    }

    return attribute;
  }

  async update(attributes: Attributes): Promise<void> {
    const index = this.attributes.findIndex(
      (attribute) => attribute.id === attributes.id,
    );

    this.attributes[index] = attributes;
  }

  async delete(id: string): Promise<void> {
    const index = this.attributes.findIndex((attribute) => attribute.id === id);

    this.attributes.splice(index, 1);
  }
}
