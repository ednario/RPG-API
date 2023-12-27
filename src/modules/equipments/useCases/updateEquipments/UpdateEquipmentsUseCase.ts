import { Injectable } from '@nestjs/common';

import { Equipments } from '@equipments/entities/Equipments';

import { EquipmentsRepository } from '../../repositories/EquipmentsRepository';

interface UpdateEquipmentsRequest {
  id: string;
  head?: string;
  chest?: string;
  gloves?: string;
  boots?: string;
  leftGun?: string;
  rightGun?: string;
}

interface UpdateEquipmentsResponse {
  equipments: Equipments;
}

@Injectable()
export class UpdateEquipmentsUseCase {
  constructor(private equipmentsRepository: EquipmentsRepository) {}

  async execute(
    request: UpdateEquipmentsRequest,
  ): Promise<UpdateEquipmentsResponse> {
    const equipments = await this.equipmentsRepository.findById(request.id);

    if (!equipments) {
      throw new Error('Equipments not found');
    }

    if (request.head) {
      equipments.head = request.head;
    }

    if (request.chest) {
      equipments.chest = request.chest;
    }

    if (request.gloves) {
      equipments.gloves = request.gloves;
    }

    if (request.boots) {
      equipments.boots = request.boots;
    }

    if (request.leftGun) {
      equipments.leftGun = request.leftGun;
    }

    if (request.rightGun) {
      equipments.rightGun = request.rightGun;
    }

    await this.equipmentsRepository.update(equipments);

    return { equipments };
  }
}
