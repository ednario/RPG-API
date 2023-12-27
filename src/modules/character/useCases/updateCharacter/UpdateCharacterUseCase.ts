import { Injectable } from '@nestjs/common';

import { Character } from '@character/entities/Character';
import { Attributes } from '@attributes/entities/attributes';
import { Equipments } from '@equipments/entities/Equipments';
import { Phobias } from '@phobias/entities/Phobias';
import { Inventory } from '@inventory/entities/Inventory';
import { Skill } from '@skill/entities/Skill';

import { CharacterRepository } from '@character/repositories/CharacterRepository';

interface UpdateCharacterRequest {
  id: string;
  name: string;
  race: string;
  level: number;
  experience: number;
  gold: number;
  maximumAttack: number;
  minimumAttack: number;
  attributes: Attributes;
  equipments: Equipments;
  phobias: Phobias;
  inventory: Inventory[];
  skill: Skill[];
}

interface UpdateCharacterResponse {
  character: Character;
}

@Injectable()
export class UpdateCharacterUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(
    request: UpdateCharacterRequest,
  ): Promise<UpdateCharacterResponse> {
    const {
      id,
      name,
      race,
      level,
      experience,
      gold,
      maximumAttack,
      minimumAttack,
      attributes,
      equipments,
      phobias,
      inventory,
      skill,
    } = request;

    const characterExists = await this.characterRepository.findById(id);

    if (!characterExists) {
      throw new Error('Character not found');
    }

    characterExists.name = name;
    characterExists.race = race;
    characterExists.level = level;
    characterExists.experience = experience;
    characterExists.gold = gold;
    characterExists.maximumAttack = maximumAttack;
    characterExists.minimumAttack = minimumAttack;
    characterExists.attributes = attributes;
    characterExists.equipments = equipments;
    characterExists.phobias = phobias;
    characterExists.inventory = inventory;
    characterExists.skill = skill;

    await this.characterRepository.update(characterExists);

    return { character: characterExists };
  }
}
