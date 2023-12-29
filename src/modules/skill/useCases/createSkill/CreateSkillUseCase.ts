import { Injectable } from '@nestjs/common';

import { Skill } from '../../entities/Skill';
import { SkillRepository } from '@skill/repositories/SkillRepository';

interface CreateSkillRequest {
  name: string;
  wear: number;
  costMp: number;
  characterId: string;
}

interface CreateSkillResponse {
  skill: Skill;
}

@Injectable()
export class CreateSkillUseCase {
  constructor(private skillRepository: SkillRepository) {}

  async execute({
    name,
    wear,
    costMp,
    characterId,
  }: CreateSkillRequest): Promise<CreateSkillResponse> {
    const skill = new Skill({ name, wear, costMp, characterId });

    await this.skillRepository.create(skill);

    return { skill };
  }
}
