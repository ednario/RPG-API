import { Injectable } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaInventoryMapper } from '../mappers/prisma-inventory-mapper';

import { Inventory } from '@inventory/entities/Inventory';
import { InventoryRepository } from '@inventory/repositories/InventoryRepository';

@Injectable()
export class PrismaInventoryRepository implements InventoryRepository {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<Inventory[]> {
    const inventory = await this.prisma.inventory.findMany();

    return inventory.map((inventory) =>
      PrismaInventoryMapper.toDomain(inventory),
    );
  }

  async findById(inventoryId: string): Promise<Inventory> {
    const inventory = await this.prisma.inventory.findUnique({
      where: {
        id: inventoryId,
      },
    });

    if (!inventory) {
      throw new Error('Inventory not found');
    }

    return PrismaInventoryMapper.toDomain(inventory);
  }

  async create(inventory: Inventory): Promise<void> {
    const raw = PrismaInventoryMapper.toPrisma(inventory);

    await this.prisma.inventory.create({
      data: raw,
    });
  }

  async update(inventory: Inventory): Promise<void> {
    const raw = PrismaInventoryMapper.toPrisma(inventory);

    await this.prisma.inventory.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async delete(inventoryId: string): Promise<void> {
    await this.prisma.inventory.delete({
      where: {
        id: inventoryId,
      },
    });
  }
}
