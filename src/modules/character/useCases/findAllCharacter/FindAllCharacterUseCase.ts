import { Injectable } from '@nestjs/common';

import { Character } from '@character/entities/Character';

import { CharacterRepository } from '@character/repositories/CharacterRepository';

@Injectable()
export class FindAllCharacterUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(): Promise<Array<Character>> {
    const character = await this.characterRepository.findAll();

    return character;
  }
}
