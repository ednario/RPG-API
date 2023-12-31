import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAttributesBody } from '../dtos/create-attributes-body';
import { AttributesViewModel } from '../view-models/attributes-view-model';

import { ApiTags } from '@nestjs/swagger';

import { CreateAttributesUseCase } from '@attributes/useCases/createAttributes/CreateAttributesUseCase';
import { FindByIdAttributesUseCase } from '@attributes/useCases/findByIdAttributes/FindByIdAttributesUseCase';
import { FindAllAttributesUseCase } from '@attributes/useCases/findAllAttributes/FindAllAttributesUseCase';
import { UpdateAttributesUseCase } from '@attributes/useCases/updateAttributes/UpdateAttributesUseCase';
import { DeleteAttributesUseCase } from '@attributes/useCases/deleteAttributes/DeleteAttributesUseCase';

@ApiTags('attributes')
@Controller('attributes')
export class AttributesController {
  constructor(
    private createAttributesUseCase: CreateAttributesUseCase,
    private findByIdAttributesUseCase: FindByIdAttributesUseCase,
    private findAllAttributesUseCase: FindAllAttributesUseCase,
    private updateAttributesUseCase: UpdateAttributesUseCase,
    private deleteAttributesUseCase: DeleteAttributesUseCase,
  ) {}

  @Get()
  async findAll() {
    try {
      const { Attributes } = await this.findAllAttributesUseCase.execute();

      return Attributes;
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const { attributes } = await this.findByIdAttributesUseCase.execute({
        id,
      });

      return AttributesViewModel.toHTTP(attributes);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Post()
  async create(@Body() body: CreateAttributesBody) {
    try {
      const {
        hp,
        mp,
        strength,
        agility,
        dexterity,
        constitution,
        intelligence,
        characterId,
      } = body;

      const { attributes } = await this.createAttributesUseCase.execute({
        hp,
        mp,
        strength,
        agility,
        dexterity,
        constitution,
        intelligence,
        characterId,
      });

      return AttributesViewModel.toHTTP(attributes);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateAttributesBody) {
    try {
      const newAttributes = await this.updateAttributesUseCase.execute({
        id,
        ...body,
      });

      return AttributesViewModel.toHTTP(newAttributes.attributes);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      await this.deleteAttributesUseCase.execute({
        id,
      });

      return { message: 'Attributes deleted' };
    } catch (error: any) {
      return { message: error.message };
    }
  }
}
