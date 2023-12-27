import { Injectable } from '@nestjs/common';

import { InventoryRepository } from '@inventory/repositories/InventoryRepository';

interface DeleteInventoryRequest {
  id: string;
}

@Injectable()
export class DeleteInventoryUseCase {
  constructor(private inventoryRepository: InventoryRepository) {}

  async execute({ id }: DeleteInventoryRequest): Promise<void> {
    const inventory = await this.inventoryRepository.findById(id);

    await this.inventoryRepository.delete(inventory.id);
  }
}
