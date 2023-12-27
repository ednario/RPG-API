import { Injectable } from '@nestjs/common';

import { CharacterRepository } from '@character/repositories/CharacterRepository';

interface DeleteCharacterRequest {
  id: string;
}

@Injectable()
export class DeleteCharacterUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  async execute({ id }: DeleteCharacterRequest): Promise<void> {
    await this.characterRepository.delete(id);
  }
}
