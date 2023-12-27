import { Injectable } from '@nestjs/common';

import { Inventory } from '@inventory/entities/Inventory';

import { InventoryRepository } from '@inventory/repositories/InventoryRepository';

interface CreateInventoryRequest {
  itemName: string;
  amount: number;
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
  }: CreateInventoryRequest): Promise<CreateInventoryResponse> {
    const inventory = new Inventory({ itemName, amount });

    await this.inventoryRepository.create(inventory);

    return { inventory };
  }
}
