import { Attributes } from '../entities/attributes';

export abstract class AttributesRepository {
  abstract create(attributes: Attributes): Promise<void>;
  abstract findAll(): Promise<Attributes[]>;
  abstract findById(id: string): Promise<Attributes>;
  abstract update(attributes: Attributes): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
