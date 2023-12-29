import { Injectable } from '@nestjs/common';

import { Attributes } from '@attributes/entities/Attributes';

import { AttributesRepository } from '@attributes/repositories/AttributesRepository';

interface FindAllAttributesResponse {
  Attributes: Attributes[];
}

@Injectable()
export class FindAllAttributesUseCase {
  constructor(private attributesRepository: AttributesRepository) {}

  async execute(): Promise<FindAllAttributesResponse> {
    const Attributes = await this.attributesRepository.findAll();

    return { Attributes };
  }
}
