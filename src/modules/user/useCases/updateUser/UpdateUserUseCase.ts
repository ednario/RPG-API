import { Injectable } from '@nestjs/common';

import { User } from '../../entities/User';

import { UserRepository } from '../../repositories/UserRepository';

interface UpdateUserRequest {
  id: string;
  userName: string;
}

interface UpdateUserResponse {
  user: User;
}

@Injectable()
export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    id,
    userName,
  }: UpdateUserRequest): Promise<UpdateUserResponse> {
    const user = await this.userRepository.findById(id);

    user.userName = userName;

    await this.userRepository.update(user);

    return { user };
  }
}
