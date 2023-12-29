import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateSkillBody } from '../dtos/create-skill-body';
import { SkillViewModel } from '../view-models/skill-view-model';

import { ApiTags } from '@nestjs/swagger';

import { CreateSkillUseCase } from '@skill/useCases/createSkill/CreateSkillUseCase';
import { FindByIdSkillUseCase } from '@skill/useCases/findByIdSkill/FindByIdSkillUseCase';
import { FindAllSkillUseCase } from '@skill/useCases/findAllSkill/FindAllSkillUseCase';
import { UpdateSkillUseCase } from '@skill/useCases/updateSkill/UpdateSkillUseCase';
import { DeleteSkillUseCase } from '@skill/useCases/deleteSkill/DeleteSkillUseCase';

@ApiTags('skill')
@Controller('skill')
export class SkillController {
  constructor(
    private createSkillUseCase: CreateSkillUseCase,
    private findByIdSkillUseCase: FindByIdSkillUseCase,
    private findAllSkillUseCase: FindAllSkillUseCase,
    private updateSkillUseCase: UpdateSkillUseCase,
    private deleteSkillUseCase: DeleteSkillUseCase,
  ) {}

  @Get()
  async findAll() {
    try {
      const skill = await this.findAllSkillUseCase.execute();

      return skill.skills.map((skill) => SkillViewModel.toHTTP(skill));
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const { skill } = await this.findByIdSkillUseCase.execute({
        id,
      });

      return SkillViewModel.toHTTP(skill);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Post()
  async create(@Body() body: CreateSkillBody) {
    try {
      const { name, wear, costMp, characterId } = body;

      const { skill } = await this.createSkillUseCase.execute({
        name,
        wear,
        costMp,
        characterId,
      });

      return SkillViewModel.toHTTP(skill);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateSkillBody) {
    try {
      const newskill = await this.updateSkillUseCase.execute({
        id,
        ...body,
      });

      return SkillViewModel.toHTTP(newskill.skill);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const skill = await this.findByIdSkillUseCase.execute({ id });

      if (!skill) {
        throw new Error('skill not found');
      }

      await this.deleteSkillUseCase.execute({
        id,
      });

      return { message: 'skill deleted' };
    } catch (error: any) {
      return { message: error.message };
    }
  }
}
