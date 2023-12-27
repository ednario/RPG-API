import { Phobias } from '@phobias/entities/Phobias';

export abstract class PhobiasRepository {
  abstract create(phobias: Phobias): Promise<void>;
  abstract listAll(): Promise<Phobias[]>;
  abstract findById(id: string): Promise<Phobias>;
  abstract update(phobias: Phobias): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
