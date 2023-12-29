import { Skill } from '@skill/entities/Skill';

export class SkillViewModel {
  static toHTTP(skill: Skill) {
    return {
      id: skill.id,
      name: skill.name,
      wear: skill.wear,
      costMp: skill.costMp,
    };
  }
}
