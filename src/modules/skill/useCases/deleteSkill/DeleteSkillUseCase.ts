import { Injectable } from '@nestjs/common';

import { SkillRepository } from '../../repositories/SkillRepository';

interface DeleteSkillRequest {
  id: string;
}

@Injectable()
export class DeleteSkillUseCase {
  constructor(private skillRepository: SkillRepository) {}

  async execute({ id }: DeleteSkillRequest): Promise<void> {
    const skill = await this.skillRepository.findById(id);

    await this.skillRepository.delete(skill.id);
  }
}
