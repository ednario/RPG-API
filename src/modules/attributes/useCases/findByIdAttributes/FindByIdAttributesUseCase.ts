import { Injectable } from '@nestjs/common';

import { Attributes } from '@attributes/entities/attributes';

import { AttributesRepository } from '@attributes/repositories/AttributesRepository';

interface FindByIdAttributesUseCaseRequest {
  id: string;
}

interface FindByIdAttributesUseCaseResponse {
  attributes: Attributes;
}

@Injectable()
export class FindByIdAttributesUseCase {
  constructor(private attributesRepository: AttributesRepository) {}

  async execute({
    id,
  }: FindByIdAttributesUseCaseRequest): Promise<FindByIdAttributesUseCaseResponse> {
    const attributes = await this.attributesRepository.findById(id);

    return {
      attributes,
    };
  }
}
