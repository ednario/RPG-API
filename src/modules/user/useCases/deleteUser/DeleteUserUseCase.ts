import { Injectable } from '@nestjs/common';

import { UserRepository } from '@user/repositories/UserRepository';

interface DeleteUserRequest {
  id: string;
}

@Injectable()
export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ id }: DeleteUserRequest): Promise<void> {
    const user = await this.userRepository.findById(id);

    await this.userRepository.delete(user.id);
  }
}
