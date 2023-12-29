import { Injectable } from '@nestjs/common';

import { Skill } from '@skill/entities/Skill';

import { SkillRepository } from '@skill/repositories/SkillRepository';

interface FindAllSkillResponse {
  skills: Skill[];
}

@Injectable()
export class FindAllSkillUseCase {
  constructor(private skillRepository: SkillRepository) {}

  async execute(): Promise<FindAllSkillResponse> {
    const skills = await this.skillRepository.findAll();

    return { skills };
  }
}
