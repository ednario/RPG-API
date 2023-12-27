import { Injectable } from '@nestjs/common';

import { PhobiasRepository } from '@phobias/repositories/PhobiasRepository';

interface DeletePhobiasRequest {
  id: string;
}

@Injectable()
export class DeletePhobiasUseCase {
  constructor(private phobiasRepository: PhobiasRepository) {}

  async execute({ id }: DeletePhobiasRequest): Promise<void> {
    const phobias = await this.phobiasRepository.findById(id);

    await this.phobiasRepository.delete(phobias.id);
  }
}
