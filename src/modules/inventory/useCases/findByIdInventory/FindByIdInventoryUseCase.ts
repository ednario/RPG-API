import { Injectable } from '@nestjs/common';

import { Inventory } from '@inventory/entities/Inventory';

import { InventoryRepository } from '@inventory/repositories/InventoryRepository';

interface FindByIdInventoryRequest {
  id: string;
}

@Injectable()
export class FindByIdInventoryUseCase {
  constructor(private inventoryRepository: InventoryRepository) {}

  async execute({ id }: FindByIdInventoryRequest): Promise<Inventory> {
    const inventory = await this.inventoryRepository.findById(id);

    return inventory;
  }
}
