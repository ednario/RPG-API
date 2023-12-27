import { Equipments } from 'src/modules/equipments/entities/Equipments';
import { EquipmentsRepository } from 'src/modules/equipments/repositories/EquipmentsRepository';

export class EquipmentsRepositoryInMemory implements EquipmentsRepository {
  equipments: Equipments[] = [];

  async create(equipments: Equipments): Promise<void> {
    this.equipments.push(equipments);
  }

  async listAll(): Promise<Equipments[]> {
    return this.equipments;
  }

  async findById(id: string): Promise<Equipments> {
    return this.equipments.find((equipment) => equipment.id === id);
  }

  async update(equipments: Equipments): Promise<void> {
    const index = this.equipments.findIndex(
      (equipment) => equipment.id === equipments.id,
    );

    this.equipments[index] = equipments;
  }

  async delete(id: string): Promise<void> {
    const index = this.equipments.findIndex((equipment) => equipment.id === id);

    this.equipments.splice(index, 1);
  }
}
