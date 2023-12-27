import { Skill } from '../entities/Skill';

export abstract class SkillRepository {
  abstract create(skill: Skill): Promise<void>;
  abstract findAll(): Promise<Skill[]>;
  abstract findById(id: string): Promise<Skill>;
  abstract update(skill: Skill): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
