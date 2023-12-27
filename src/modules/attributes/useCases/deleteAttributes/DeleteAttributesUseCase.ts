import { Injectable } from '@nestjs/common';

import { AttributesRepository } from '@attributes/repositories/AttributesRepository';

interface DeleteAttributesUseCaseRequest {
  id: string;
}

@Injectable()
export class DeleteAttributesUseCase {
  constructor(private attributesRepository: AttributesRepository) {}

  async execute({ id }: DeleteAttributesUseCaseRequest): Promise<void> {
    const attributes = await this.attributesRepository.findById(id);

    if (!attributes) {
      throw new Error('Attributes not found');
    }

    await this.attributesRepository.delete(attributes.id);
  }
}
