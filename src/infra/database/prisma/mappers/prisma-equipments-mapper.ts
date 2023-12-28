import { Equipments as RawEquipments } from '@prisma/client';

import { Equipments } from '@equipments/entities/Equipments';

export class PrismaEquipmentsMapper {
  static toPrisma(equipments: Equipments) {
    return {
      id: equipments.id,
      head: equipments.head,
      chest: equipments.chest,
      gloves: equipments.gloves,
      boots: equipments.boots,
      leftGun: equipments.leftGun,
      rightGun: equipments.rightGun,
      characterId: equipments.characterId,
    };
  }

  static toDomain(raw: RawEquipments): Equipments {
    return new Equipments(
      {
        head: raw.head,
        chest: raw.chest,
        gloves: raw.gloves,
        boots: raw.boots,
        leftGun: raw.leftGun,
        rightGun: raw.rightGun,
        characterId: raw.characterId,
      },
      raw.id,
    );
  }
}
