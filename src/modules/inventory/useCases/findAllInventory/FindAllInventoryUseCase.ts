import { Injectable } from '@nestjs/common';

import { Inventory } from '@inventory/entities/Inventory';
import { InventoryRepository } from '@inventory/repositories/InventoryRepository';

interface FindAllInventoryResponse {
  inventory: Inventory[];
}

@Injectable()
export class FindAllInventoryUseCase {
  constructor(private inventoryRepository: InventoryRepository) {}

  async execute(): Promise<FindAllInventoryResponse> {
    const inventory = await this.inventoryRepository.findAll();

    return { inventory };
  }
}
