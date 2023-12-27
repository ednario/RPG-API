import { Injectable } from '@nestjs/common';

import { Attributes } from '@attributes/entities/attributes';

import { AttributesRepository } from '@attributes/repositories/AttributesRepository';

interface CreateAttributesRequest {
  hp: number;
  mp: number;
  strength: number;
  agility: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
}

interface CreateAttributesResponse {
  attributes: Attributes;
}

@Injectable()
export class CreateAttributesUseCase {
  constructor(private attributesRepository: AttributesRepository) {}

  async execute(
    request: CreateAttributesRequest,
  ): Promise<CreateAttributesResponse> {
    const { hp, mp, strength, agility, dexterity, constitution, intelligence } =
      request;

    const attributes = new Attributes({
      hp,
      mp,
      strength,
      agility,
      dexterity,
      constitution,
      intelligence,
    });

    await this.attributesRepository.create(attributes);

    return {
      attributes,
    };
  }
}
