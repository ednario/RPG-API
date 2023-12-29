import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreatePhobiasBody } from '../dtos/create-phobias-body';
import { PhobiasViewModel } from '../view-models/phobias-view-model';

import { CreatePhobiasUseCase } from '@phobias/useCases/createPhobias/CreatePhobiasUseCase';
import { FindByIdPhobiasUseCase } from '@phobias/useCases/findByIdPhobias/FindByIdPhobiasUseCase';
import { FindAllPhobiasUseCase } from '@phobias/useCases/findAllPhobias/FindAllPhobiasUseCase';
import { UpdatePhobiasUseCase } from '@phobias/useCases/updatePhobias/UpdatePhobiasUseCase';
import { DeletePhobiasUseCase } from '@phobias/useCases/deletePhobias/DeletePhobiasUseCase';

@Controller('phobias')
export class PhobiasController {
  constructor(
    private createPhobiasUseCase: CreatePhobiasUseCase,
    private findByIdPhobiasUseCase: FindByIdPhobiasUseCase,
    private findAllPhobiasUseCase: FindAllPhobiasUseCase,
    private updatePhobiasUseCase: UpdatePhobiasUseCase,
    private deletePhobiasUseCase: DeletePhobiasUseCase,
  ) {}

  @Get()
  async findAll() {
    try {
      const phobias = await this.findAllPhobiasUseCase.execute();

      return phobias.phobias.map((phobias) => PhobiasViewModel.toHTTP(phobias));
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const { phobias } = await this.findByIdPhobiasUseCase.execute({
        id,
      });

      return PhobiasViewModel.toHTTP(phobias);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Post()
  async create(@Body() body: CreatePhobiasBody) {
    try {
      const { monster, amountToOvercome, characterId } = body;

      const { phobias } = await this.createPhobiasUseCase.execute({
        monster,
        amountToOvercome,
        characterId,
      });

      return PhobiasViewModel.toHTTP(phobias);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreatePhobiasBody) {
    try {
      const newphobias = await this.updatePhobiasUseCase.execute({
        id,
        ...body,
      });

      return PhobiasViewModel.toHTTP(newphobias.phobias);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const phobias = await this.findByIdPhobiasUseCase.execute({ id });

      if (!phobias) {
        throw new Error('phobias not found');
      }

      await this.deletePhobiasUseCase.execute({
        id,
      });

      return { message: 'phobias deleted' };
    } catch (error: any) {
      return { message: error.message };
    }
  }
}
