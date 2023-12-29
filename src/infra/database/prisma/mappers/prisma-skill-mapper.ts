import { Skill as RawSkill } from '@prisma/client';

import { Skill } from '@skill/entities/Skill';

export class PrismaSkillMapper {
  static toPrisma(skill: Skill) {
    return {
      id: skill.id,
      name: skill.name,
      wear: skill.wear,
      costMp: skill.costMp,
      characterId: skill.characterId,
    };
  }
  static toDomain(raw: RawSkill): Skill {
    return new Skill(
      {
        name: raw.name,
        wear: raw.wear,
        costMp: raw.costMp,
        characterId: raw.characterId,
      },
      raw.id,
    );
  }
}
