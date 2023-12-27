import { Injectable } from '@nestjs/common';

import { Skill } from '../../entities/Skill';

interface CreateSkillRequest {
  name: string;
  wear: number;
  costMp: number;
}

interface CreateSkillResponse {
  skill: Skill;
}

@Injectable()
export class CreateSkillUseCase {
  async execute({
    name,
    wear,
    costMp,
  }: CreateSkillRequest): Promise<CreateSkillResponse> {
    const skill = new Skill({ name, wear, costMp });

    return { skill };
  }
}
