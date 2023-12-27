import { Injectable } from '@nestjs/common';

import { Phobias } from '@phobias/entities/Phobias';

import { PhobiasRepository } from '@phobias/repositories/PhobiasRepository';

interface UpdatePhobiasRequest {
  id: string;
  monster: string;
  amountToOvercome: number;
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

    await this.phobiasRepository.update(phobias);

    return { phobias };
  }
}
