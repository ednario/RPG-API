import { Inventory as RawInventory } from '@prisma/client';

import { Inventory } from '@inventory/entities/Inventory';

export class PrismaInventoryMapper {
  static toPrisma(inventory: Inventory) {
    return {
      id: inventory.id,
      itemName: inventory.itemName,
      amount: inventory.amount,
      characterId: inventory.characterId,
    };
  }
  static toDomain(raw: RawInventory): Inventory {
    return new Inventory(
      {
        itemName: raw.itemName,
        amount: raw.amount,
        characterId: raw.characterId,
      },
      raw.id,
    );
  }
}
