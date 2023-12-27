import { Injectable } from '@nestjs/common';

import { Skill } from '../../entities/Skill';

import { SkillRepository } from '../../repositories/SkillRepository';

interface FindByIdSkillRequest {
  id: string;
}

interface FindByIdSkillResponse {
  skill: Skill;
}

@Injectable()
export class FindByIdSkillUseCase {
  constructor(private skillRepository: SkillRepository) {}

  async execute({ id }: FindByIdSkillRequest): Promise<FindByIdSkillResponse> {
    const skill = await this.skillRepository.findById(id);

    return { skill };
  }
}
