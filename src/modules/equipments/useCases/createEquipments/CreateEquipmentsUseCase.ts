import { Injectable } from '@nestjs/common';

import { Equipments } from '@equipments/entities/Equipments';

import { EquipmentsRepository } from '@equipments/repositories/EquipmentsRepository';

interface CreateEquipmentRequest {
  head?: string;
  chest?: string;
  gloves?: string;
  boots?: string;
  leftGun?: string;
  rightGun?: string;
}

interface CreateEquipmentResponse {
  equipments: Equipments;
}

@Injectable()
export class CreateEquipmentsUseCase {
  constructor(private equipmentsRepository: EquipmentsRepository) {}

  async execute(
    request: CreateEquipmentRequest,
  ): Promise<CreateEquipmentResponse> {
    const { head, chest, gloves, boots, leftGun, rightGun } = request;

    const equipments = new Equipments({
      head,
      chest,
      gloves,
      boots,
      leftGun,
      rightGun,
    });

    await this.equipmentsRepository.create(equipments);

    return { equipments };
  }
}
