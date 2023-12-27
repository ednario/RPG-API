import { Character } from '@character/entities/Character';

export abstract class CharacterRepository {
  abstract create(character: Character): Promise<void>;
  abstract findAll(): Promise<Character[]>;
  abstract findById(id: string): Promise<Character | undefined>;
  abstract update(character: Character): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
