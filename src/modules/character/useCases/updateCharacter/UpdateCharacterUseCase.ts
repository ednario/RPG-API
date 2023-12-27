import { Injectable } from '@nestjs/common';

import { Character } from '@character/entities/Character';

import { CharacterRepository } from '@character/repositories/CharacterRepository';

interface UpdateCharacterRequest {
  id: string;
  name: string;
  race: string;
  level: number;
  experience: number;
  gold: number;
  maximumAttack: number;
  maximumDefense: number;
  userId: string;
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
      maximumDefense,
      userId,
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
    characterExists.maximumDefense = maximumDefense;
    characterExists.userId = userId;

    await this.characterRepository.update(characterExists);

    return { character: characterExists };
  }
}
