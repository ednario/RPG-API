import { Equipments } from '../entities/Equipments';

export abstract class EquipmentsRepository {
  abstract create(equipments: Equipments): Promise<void>;
  abstract findAll(): Promise<Equipments[]>;
  abstract findById(id: string): Promise<Equipments>;
  abstract update(equipments: Equipments): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
