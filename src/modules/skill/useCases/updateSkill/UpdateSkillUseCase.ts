import { Injectable } from '@nestjs/common';

import { Skill } from '../../entities/Skill';

import { SkillRepository } from '../../repositories/SkillRepository';

interface UpdateSkillRequest {
  id: string;
  name: string;
  wear: number;
  costMp: number;
}

interface UpdateSkillResponse {
  skill: Skill;
}

@Injectable()
export class UpdateSkillUseCase {
  constructor(private skillRepository: SkillRepository) {}

  async execute({
    id,
    name,
    wear,
    costMp,
  }: UpdateSkillRequest): Promise<UpdateSkillResponse> {
    const skill = await this.skillRepository.findById(id);

    skill.name = name;
    skill.wear = wear;
    skill.costMp = costMp;

    await this.skillRepository.update(skill);

    return { skill };
  }
}
