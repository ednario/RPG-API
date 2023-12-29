import { Injectable } from '@nestjs/common';

import { User } from '@user/entities/User';

import { UserRepository } from '@user/repositories/UserRepository';

interface FindAllUserResponse {
  users: User[];
}

@Injectable()
export class FindAllUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<FindAllUserResponse> {
    const users = await this.userRepository.findAll();

    return { users };
  }
}
