import { Injectable } from '@nestjs/common';

import { Character } from '@character/entities/Character';

import { CharacterRepository } from '@character/repositories/CharacterRepository';

interface CreateCharacterRequest {
  name: string;
  race: string;
  level: number;
  experience: number;
  gold: number;
  maximumAttack: number;
  maximumDefense: number;
  userId: string | null;
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
      maximumDefense,
      userId,
    } = request;

    const character = new Character({
      name,
      race,
      level,
      experience,
      gold,
      maximumAttack,
      maximumDefense,
      userId,
    });

    await this.characterRepository.create(character);

    return { character };
  }
}
