import { Injectable } from '@nestjs/common';

import { Equipments } from '../../entities/Equipments';

import { EquipmentsRepository } from '@equipments/repositories/EquipmentsRepository';

interface CreateEquipmentRequest {
  head: string | null;
  chest: string | null;
  gloves: string | null;
  boots: string | null;
  leftGun: string | null;
  rightGun: string | null;
  characterId: string;
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
    const { head, chest, gloves, boots, leftGun, rightGun, characterId } =
      request;

    const equipments = new Equipments({
      head,
      chest,
      gloves,
      boots,
      leftGun,
      rightGun,
      characterId,
    });

    await this.equipmentsRepository.create(equipments);

    return { equipments };
  }
}
