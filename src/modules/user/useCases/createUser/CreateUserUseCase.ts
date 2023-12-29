import { Injectable } from '@nestjs/common';

import { User } from '@user/entities/User';
import { UserRepository } from '@user/repositories/UserRepository';

interface CreateUserRequest {
  userName: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ userName }: CreateUserRequest): Promise<CreateUserResponse> {
    const user = new User({ userName });

    await this.userRepository.create(user);

    return { user };
  }
}
