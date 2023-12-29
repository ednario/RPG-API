import { Inventory } from '../entities/Inventory';

export abstract class InventoryRepository {
  abstract create(inventory: Inventory): Promise<void>;
  abstract findById(id: string): Promise<Inventory>;
  abstract findAll(): Promise<Inventory[]>;
  abstract update(inventory: Inventory): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
