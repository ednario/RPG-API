import { Injectable } from '@nestjs/common';

import { Phobias } from '@phobias/entities/Phobias';
import { PhobiasRepository } from '@phobias/repositories/PhobiasRepository';

interface FindAllPhobiasResponse {
  phobias: Phobias[];
}

@Injectable()
export class FindAllPhobiasUseCase {
  constructor(private phobiasRepository: PhobiasRepository) {}

  async execute(): Promise<FindAllPhobiasResponse> {
    const phobias = await this.phobiasRepository.findAll();

    return { phobias };
  }
}
