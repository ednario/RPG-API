import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateInventoryBody } from '../dtos/create-inventory-body';
import { InventoryViewModel } from '../view-models/inventory-view-model';

import { CreateInventoryUseCase } from '@inventory/useCases/createInventory/CreateInventoryUseCase';
import { FindByIdInventoryUseCase } from '@inventory/useCases/findByIdInventory/FindByIdInventoryUseCase';
import { FindAllInventoryUseCase } from '@inventory/useCases/findAllInventory/FindAllInventoryUseCase';
import { UpdateInventoryUseCase } from '@inventory/useCases/updateInventory/UpdateInventoryUseCase';
import { DeleteInventoryUseCase } from '@inventory/useCases/deleteInventory/DeleteInventoryUseCase';

@Controller('inventory')
export class InventoryController {
  constructor(
    private createInventoryUseCase: CreateInventoryUseCase,
    private findByIdInventoryUseCase: FindByIdInventoryUseCase,
    private findAllInventoryUseCase: FindAllInventoryUseCase,
    private updateInventoryUseCase: UpdateInventoryUseCase,
    private deleteInventoryUseCase: DeleteInventoryUseCase,
  ) {}

  @Get()
  async findAll() {
    try {
      const inventory = await this.findAllInventoryUseCase.execute();

      return inventory.inventory.map((inventory) =>
        InventoryViewModel.toHTTP(inventory),
      );
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const inventory = await this.findByIdInventoryUseCase.execute({
        id,
      });

      return InventoryViewModel.toHTTP(inventory);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Post()
  async create(@Body() body: CreateInventoryBody) {
    try {
      const { itemName, amount, characterId } = body;

      const { inventory } = await this.createInventoryUseCase.execute({
        itemName,
        amount,
        characterId,
      });

      return InventoryViewModel.toHTTP(inventory);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateInventoryBody) {
    try {
      const newinventory = await this.updateInventoryUseCase.execute({
        id,
        ...body,
      });

      return InventoryViewModel.toHTTP(newinventory.inventory);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const inventory = await this.findByIdInventoryUseCase.execute({ id });

      if (!inventory) {
        throw new Error('inventory not found');
      }

      await this.deleteInventoryUseCase.execute({
        id,
      });

      return { message: 'inventory deleted' };
    } catch (error: any) {
      return { message: error.message };
    }
  }
}
