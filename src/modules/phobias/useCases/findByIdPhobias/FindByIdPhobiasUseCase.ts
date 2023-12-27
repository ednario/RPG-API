import { Injectable } from '@nestjs/common';

import { Phobias } from '@phobias/entities/Phobias';

import { PhobiasRepository } from '@phobias/repositories/PhobiasRepository';

interface FindByIdPhobiasRequest {
  id: string;
}

interface FindByIdPhobiasResponse {
  phobias: Phobias;
}

@Injectable()
export class FindByIdPhobiasUseCase {
  constructor(private phobiasRepository: PhobiasRepository) {}

  async execute({
    id,
  }: FindByIdPhobiasRequest): Promise<FindByIdPhobiasResponse> {
    const phobias = await this.phobiasRepository.findById(id);

    return { phobias };
  }
}
