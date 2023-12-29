import { Injectable } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaSkillMapper } from '@infra/database/prisma/mappers/prisma-skill-mapper';

import { Skill } from '@skill/entities/Skill';
import { SkillRepository } from '@skill/repositories/SkillRepository';

@Injectable()
export class PrismaSkillRepository implements SkillRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<any> {
    return await this.prisma.skill.findMany();
  }

  async findById(skillId: string): Promise<Skill> {
    const skill = await this.prisma.skill.findUnique({
      where: {
        id: skillId,
      },
    });

    if (!skill) {
      throw new Error('skill not found');
    }

    return PrismaSkillMapper.toDomain(skill);
  }

  async create(skill: Skill): Promise<void> {
    const raw = PrismaSkillMapper.toPrisma(skill);

    await this.prisma.skill.create({
      data: raw,
    });
  }

  async update(skill: Skill): Promise<void> {
    const raw = PrismaSkillMapper.toPrisma(skill);

    await this.prisma.skill.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async delete(skillId: string): Promise<void> {
    await this.prisma.skill.delete({
      where: {
        id: skillId,
      },
    });
  }
}
