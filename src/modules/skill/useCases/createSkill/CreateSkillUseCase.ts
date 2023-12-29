import { Injectable } from '@nestjs/common';

import { Skill } from '../../entities/Skill';

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
  async execute({
    name,
    wear,
    costMp,
    characterId,
  }: CreateSkillRequest): Promise<CreateSkillResponse> {
    const skill = new Skill({ name, wear, costMp, characterId });

    return { skill };
  }
}
