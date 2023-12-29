import { User } from '../entities/User';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findAll(): Promise<User[]>;
  abstract findById(id: string): Promise<User>;
  abstract update(user: User): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
