import { Equipments } from '@equipments/entities/Equipments';

export class EquipmentsViewModel {
  static toHTTP(equipments: Equipments) {
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
}
