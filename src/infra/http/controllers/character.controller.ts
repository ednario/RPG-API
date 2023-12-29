import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCharacterBody } from '../dtos/create-character-body';
import { CharacterViewModel } from '../view-models/character-view-model';

import { CreateCharacterUseCase } from '@character/useCases/createCharacter/CreateCharacterUseCase';
import { FindByIdCharacterUseCase } from '@character/useCases/findByIdCharacter/FindByIdCharacterUseCase';
import { FindAllCharacterUseCase } from '@character/useCases/findAllCharacter/FindAllCharacterUseCase';
import { UpdateCharacterUseCase } from '@character/useCases/updateCharacter/UpdateCharacterUseCase';
import { DeleteCharacterUseCase } from '@character/useCases/deleteCharacter/DeleteCharacterUseCase';

@Controller('characters')
export class CharacterController {
  constructor(
    private createCharacterUseCase: CreateCharacterUseCase,
    private findByIdCharacterUseCase: FindByIdCharacterUseCase,
    private findAllCharacterUseCase: FindAllCharacterUseCase,
    private updateCharacterUseCase: UpdateCharacterUseCase,
    private deleteCharacterUseCase: DeleteCharacterUseCase,
  ) {}

  @Get()
  async findAll() {
    try {
      const characters = await this.findAllCharacterUseCase.execute();

      return { characters };
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const { character } = await this.findByIdCharacterUseCase.execute({
        id,
      });

      return CharacterViewModel.toHTTP(character);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Post()
  async create(@Body() body: CreateCharacterBody) {
    try {
      const {
        name,
        race,
        level,
        experience,
        gold,
        maximumAttack,
        maximumDefense,
        userId,
      } = body;

      const { character } = await this.createCharacterUseCase.execute({
        name,
        race,
        level,
        experience,
        gold,
        maximumAttack,
        maximumDefense,
        userId,
      });

      return CharacterViewModel.toHTTP(character);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateCharacterBody) {
    try {
      const newCharacter = await this.updateCharacterUseCase.execute({
        id,
        ...body,
      });

      return CharacterViewModel.toHTTP(newCharacter.character);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      await this.deleteCharacterUseCase.execute({
        id,
      });

      return { message: 'Character deleted' };
    } catch (error: any) {
      return { message: error.message };
    }
  }
}
