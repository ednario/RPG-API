import { Injectable } from '@nestjs/common';

import { EquipmentsRepository } from '@equipments/repositories/EquipmentsRepository';

interface DeleteEquipmentsRequest {
  id: string;
}

@Injectable()
export class DeleteEquipmentsUseCase {
  constructor(private equipmentsRepository: EquipmentsRepository) {}

  async execute({ id }: DeleteEquipmentsRequest): Promise<void> {
    const equipments = await this.equipmentsRepository.findById(id);

    if (!equipments) {
      throw new Error('Equipments not found');
    }

    await this.equipmentsRepository.delete(id);
  }
}
