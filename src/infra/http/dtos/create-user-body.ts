import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserBody {
  @ApiProperty()
  @IsNotEmpty()
  userName: string;
}
