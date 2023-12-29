import { Injectable } from '@nestjs/common';

import { Phobias } from '@phobias/entities/Phobias';

import { PhobiasRepository } from '@phobias/repositories/PhobiasRepository';

interface UpdatePhobiasRequest {
  id: string;
  monster: string;
  amountToOvercome: number;
  characterId: string;
}

interface UpdatePhobiasResponse {
  phobias: Phobias;
}

@Injectable()
export class UpdatePhobiasUseCase {
  constructor(private phobiasRepository: PhobiasRepository) {}

  async execute({
    id,
    monster,
    amountToOvercome,
  }: UpdatePhobiasRequest): Promise<UpdatePhobiasResponse> {
    const phobias = await this.phobiasRepository.findById(id);

    phobias.monster = monster;
    phobias.amountToOvercome = amountToOvercome;
    phobias.characterId = phobias.characterId;

    await this.phobiasRepository.update(phobias);

    return { phobias };
  }
}
