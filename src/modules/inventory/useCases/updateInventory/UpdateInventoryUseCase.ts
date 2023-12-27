import { Injectable } from '@nestjs/common';

import { Inventory } from '@inventory/entities/Inventory';

import { InventoryRepository } from '@inventory/repositories/InventoryRepository';

interface UpdateInventoryRequest {
  id: string;
  itemName: string;
  amount: number;
}

interface UpdateInventoryResponse {
  inventory: Inventory;
}

@Injectable()
export class UpdateInventoryUseCase {
  constructor(private inventoryRepository: InventoryRepository) {}

  async execute({
    id,
    itemName,
    amount,
  }: UpdateInventoryRequest): Promise<UpdateInventoryResponse> {
    const inventory = await this.inventoryRepository.findById(id);

    inventory.itemName = itemName;
    inventory.amount = amount;

    await this.inventoryRepository.update(inventory);

    return { inventory };
  }
}
