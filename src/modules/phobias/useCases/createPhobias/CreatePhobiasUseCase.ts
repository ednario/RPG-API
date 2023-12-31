import { Injectable } from '@nestjs/common';

import { Phobias } from '@phobias/entities/Phobias';

import { PhobiasRepository } from '@phobias/repositories/PhobiasRepository';

interface CreatePhobiasRequest {
  monster: string;
  amountToOvercome: number;
  characterId: string;
}

interface CreatePhobiasResponse {
  phobias: Phobias;
}

@Injectable()
export class CreatePhobiasUseCase {
  constructor(private phobiasRepository: PhobiasRepository) {}

  async execute({
    monster,
    amountToOvercome,
    characterId,
  }: CreatePhobiasRequest): Promise<CreatePhobiasResponse> {
    const phobias = new Phobias({ monster, amountToOvercome, characterId });

    await this.phobiasRepository.create(phobias);

    return { phobias };
  }
}
