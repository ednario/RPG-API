import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateUserBody } from '../dtos/create-user-body';
import { UserViewModel } from '../view-models/user-view-model';

import { ApiTags } from '@nestjs/swagger';

import { CreateUserUseCase } from '@user/useCases/createUser/CreateUserUseCase';
import { FindByIdUserUseCase } from '@user/useCases/findByIdUser/FindByIdUserUseCase';
import { FindAllUserUseCase } from '@user/useCases/findAllUser/FindAllUserUseCase';
import { UpdateUserUseCase } from '@user/useCases/updateUser/UpdateUserUseCase';
import { DeleteUserUseCase } from '@user/useCases/deleteUser/DeleteUserUseCase';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private findByIdUserUseCase: FindByIdUserUseCase,
    private findAllUserUseCase: FindAllUserUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Get()
  async findAll() {
    try {
      const user = await this.findAllUserUseCase.execute();

      return user.users.map((user) => UserViewModel.toHTTP(user));
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const { user } = await this.findByIdUserUseCase.execute({
        id,
      });

      return UserViewModel.toHTTP(user);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Post()
  async create(@Body() body: CreateUserBody) {
    try {
      const { userName } = body;

      const { user } = await this.createUserUseCase.execute({
        userName,
      });

      return UserViewModel.toHTTP(user);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateUserBody) {
    try {
      const newUser = await this.updateUserUseCase.execute({
        id,
        ...body,
      });

      return UserViewModel.toHTTP(newUser.user);
    } catch (error: any) {
      return { message: error.message };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const user = await this.findByIdUserUseCase.execute({ id });

      if (!user) {
        throw new Error('User not found');
      }

      await this.deleteUserUseCase.execute({
        id,
      });

      return { message: 'User deleted' };
    } catch (error: any) {
      return { message: error.message };
    }
  }
}
