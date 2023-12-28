import { Injectable } from '@nestjs/common';

import { Attributes } from '@attributes/entities/attributes';

import { AttributesRepository } from '@attributes/repositories/AttributesRepository';

interface UpdateAttributesUseCaseRequest {
  id: string;
  hp: number;
  mp: number;
  strength: number;
  agility: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  characterId: string;
}

interface UpdateAttributesUseCaseResponse {
  attributes: Attributes;
}

@Injectable()
export class UpdateAttributesUseCase {
  constructor(private attributesRepository: AttributesRepository) {}

  async execute(
    request: UpdateAttributesUseCaseRequest,
  ): Promise<UpdateAttributesUseCaseResponse> {
    const {
      id,
      hp,
      mp,
      strength,
      agility,
      dexterity,
      constitution,
      intelligence,
      characterId,
    } = request;
    const attributesExists = await this.attributesRepository.findById(id);

    if (!attributesExists) {
      throw new Error('Attributes not found');
    }

    attributesExists.hp = hp;
    attributesExists.mp = mp;
    attributesExists.strength = strength;
    attributesExists.agility = agility;
    attributesExists.dexterity = dexterity;
    attributesExists.constitution = constitution;
    attributesExists.intelligence = intelligence;
    attributesExists.characterId = characterId;

    await this.attributesRepository.update(attributesExists);

    return { attributes: attributesExists };
  }
}
