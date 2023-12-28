import { Injectable } from '@nestjs/common';

import { Equipments } from '@equipments/entities/Equipments';
import { EquipmentsRepository } from '@equipments/repositories/EquipmentsRepository';

interface FindAllEquipmentsResponse {
  equipments: Equipments[];
}

@Injectable()
export class FindAllEquipmentsUseCase {
  constructor(private equipmentsRepository: EquipmentsRepository) {}

  async execute(): Promise<FindAllEquipmentsResponse> {
    const equipments = await this.equipmentsRepository.findAll();

    return { equipments };
  }
}
