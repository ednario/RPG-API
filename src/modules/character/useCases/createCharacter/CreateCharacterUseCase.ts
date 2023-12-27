import { Injectable } from '@nestjs/common';

import { Character } from '@character/entities/Character';
import { Attributes } from '@attributes/entities/attributes';
import { Equipments } from '@equipments/entities/Equipments';
import { Phobias } from '@phobias/entities/Phobias';
import { Inventory } from '@inventory/entities/Inventory';
import { Skill } from '@skill/entities/Skill';

import { CharacterRepository } from '@character/repositories/CharacterRepository';

interface CreateCharacterRequest {
  name: string;
  race: string;
  level: number;
  experience: number;
  gold: number;
  maximumAttack: number;
  minimumAttack: number;
  attributes: Attributes;
  equipmenst: Equipments;
  phobias: Phobias;
  inventory: Inventory[];
  skill: Skill[];
}

interface CreateCharacterResponse {
  character: Character;
}

@Injectable()
export class CreateCharacterUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(
    request: CreateCharacterRequest,
  ): Promise<CreateCharacterResponse> {
    const {
      name,
      race,
      level,
      experience,
      gold,
      maximumAttack,
      minimumAttack,
      attributes,
      equipmenst,
      phobias,
      inventory,
      skill,
    } = request;

    const character = new Character({
      name,
      race,
      level,
      experience,
      gold,
      maximumAttack,
      minimumAttack,
      attributes,
      equipmenst,
      phobias,
      inventory,
      skill,
    });

    await this.characterRepository.create(character);

    return { character };
  }
}
