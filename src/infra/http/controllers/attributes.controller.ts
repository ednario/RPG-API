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

import { CreateAttributesUseCase } from '@attributes/useCases/createAttributes/CreateAttributesUseCase';
import { FindByIdAttributesUseCase } from '@attributes/useCases/findByIdAttributes/FindByIdAttributesUseCase';
import { FindAllAttributesUseCase } from '@attributes/useCases/findAllAttributes/FindAllAttributesUseCase';
import { UpdateAttributesUseCase } from '@attributes/useCases/updateAttributes/UpdateAttributesUseCase';
import { DeleteAttributesUseCase } from '@attributes/useCases/deleteAttributes/DeleteAttributesUseCase';

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
    const { Attributes } = await this.findAllAttributesUseCase.execute();

    return Attributes;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const { attributes } = await this.findByIdAttributesUseCase.execute({
      id,
    });

    return AttributesViewModel.toHTTP(attributes);
  }

  @Post()
  async create(@Body() body: CreateAttributesBody) {
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
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateAttributesBody) {
    const Attributes = await this.findByIdAttributesUseCase.execute({ id });

    if (!Attributes) {
      throw new Error('Attributes not found');
    }

    const newAttributes = await this.updateAttributesUseCase.execute({
      id,
      ...body,
    });

    return AttributesViewModel.toHTTP(newAttributes.attributes);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const Attributes = await this.findByIdAttributesUseCase.execute({ id });

    if (!Attributes) {
      throw new Error('Attributes not found');
    }

    await this.deleteAttributesUseCase.execute({
      id,
    });

    return { message: 'Attributes deleted' };
  }
}
