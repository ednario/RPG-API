import { Inventory } from '@inventory/entities/Inventory';

export class InventoryViewModel {
  static toHTTP(inventory: Inventory) {
    return {
      id: inventory.id,
      itemName: inventory.itemName,
      amount: inventory.amount,
      characterId: inventory.characterId,
    };
  }
}
