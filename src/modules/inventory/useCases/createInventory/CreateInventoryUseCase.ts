import { Injectable } from '@nestjs/common';

import { Inventory } from '@inventory/entities/Inventory';

import { InventoryRepository } from '@inventory/repositories/InventoryRepository';

interface CreateInventoryRequest {
  itemName: string;
  amount: number;
  characterId: string;
}

interface CreateInventoryResponse {
  inventory: Inventory;
}

@Injectable()
export class CreateInventoryUseCase {
  constructor(private inventoryRepository: InventoryRepository) {}

  async execute({
    itemName,
    amount,
    characterId,
  }: CreateInventoryRequest): Promise<CreateInventoryResponse> {
    const inventory = new Inventory({ itemName, amount, characterId });

    await this.inventoryRepository.create(inventory);

    return { inventory };
  }
}
