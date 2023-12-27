import { Injectable } from '@nestjs/common';

import { Equipments } from '@equipments/entities/Equipments';

import { EquipmentsRepository } from '../../repositories/EquipmentsRepository';

interface FindByIdEquipmentsRequest {
  id: string;
}

interface FindByIdEquipmentsResponse {
  equipments: Equipments;
}

@Injectable()
export class FindByIdEquipmentsUseCase {
  constructor(private equipmentsRepository: EquipmentsRepository) {}

  async execute({
    id,
  }: FindByIdEquipmentsRequest): Promise<FindByIdEquipmentsResponse> {
    const equipments = await this.equipmentsRepository.findById(id);

    return { equipments };
  }
}
