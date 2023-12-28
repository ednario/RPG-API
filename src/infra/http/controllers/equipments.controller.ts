import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateEquipmentBody } from '../dtos/create-equipments-body';
import { EquipmentsViewModel } from '../view-models/equipments-view-model';

import { CreateEquipmentsUseCase } from '@equipments/useCases/createEquipments/CreateEquipmentsUseCase';
import { FindByIdEquipmentsUseCase } from '@equipments/useCases/findByIdEquipments/FindByIdEquipmentsUseCase';
import { FindAllEquipmentsUseCase } from '@equipments/useCases/findAllEquipments/FindAllEquipmentsUseCase';
import { UpdateEquipmentsUseCase } from '@equipments/useCases/updateEquipments/UpdateEquipmentsUseCase';
import { DeleteEquipmentsUseCase } from '@equipments/useCases/deleteEquipments/DeleteEquipmentsUseCase';

@Controller('equipments')
export class EquipmentsController {
  constructor(
    private createEquipmentsUseCase: CreateEquipmentsUseCase,
    private findByIdEquipmentsUseCase: FindByIdEquipmentsUseCase,
    private findAllEquipmentsUseCase: FindAllEquipmentsUseCase,
    private updateEquipmentsUseCase: UpdateEquipmentsUseCase,
    private deleteEquipmentsUseCase: DeleteEquipmentsUseCase,
  ) {}

  @Get()
  async findAll() {
    const { equipments } = await this.findAllEquipmentsUseCase.execute();

    return equipments;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const { equipments } = await this.findByIdEquipmentsUseCase.execute({
      id,
    });

    return EquipmentsViewModel.toHTTP(equipments);
  }

  @Post()
  async create(@Body() body: CreateEquipmentBody) {
    const { head, chest, gloves, boots, leftGun, rightGun, characterId } = body;

    const { equipments } = await this.createEquipmentsUseCase.execute({
      head,
      chest,
      gloves,
      boots,
      leftGun,
      rightGun,
      characterId,
    });

    return EquipmentsViewModel.toHTTP(equipments);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateEquipmentBody) {
    const equipments = await this.findByIdEquipmentsUseCase.execute({ id });

    if (!equipments) {
      throw new Error('Character not found');
    }

    const newEquipments = await this.updateEquipmentsUseCase.execute({
      id,
      ...body,
    });

    return EquipmentsViewModel.toHTTP(newEquipments.equipments);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const character = await this.findByIdEquipmentsUseCase.execute({ id });

    if (!character) {
      throw new Error('Character not found');
    }

    await this.deleteEquipmentsUseCase.execute({
      id,
    });

    return { message: 'Character deleted' };
  }
}
