import { Injectable } from '@nestjs/common';

import { Character } from '@character/entities/Character';

import { CharacterRepository } from '@character/repositories/CharacterRepository';

interface FindByIdCharacterRequest {
  id: string;
}

interface FindByIdCharacterResponse {
  character: Character;
}

@Injectable()
export class FindByIdCharacterUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  async execute({
    id,
  }: FindByIdCharacterRequest): Promise<FindByIdCharacterResponse> {
    const character = await this.characterRepository.findById(id);

    if (!character) {
      throw new Error('Character not found');
    }

    return { character };
  }
}
