import { Injectable } from '@nestjs/common';

import { User } from '../../entities/User';

import { UserRepository } from '../../repositories/UserRepository';

interface FindByIdUserRequest {
  id: string;
}

interface FindByIdUserResponse {
  user: User;
}

@Injectable()
export class FindByIdUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ id }: FindByIdUserRequest): Promise<FindByIdUserResponse> {
    const user = await this.userRepository.findById(id);

    return { user };
  }
}
