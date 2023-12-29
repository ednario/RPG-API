import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateCharacterBody {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  race: string;

  @ApiProperty()
  @IsNotEmpty()
  level: number;

  @ApiProperty()
  @IsNotEmpty()
  experience: number;

  @ApiProperty()
  @IsNotEmpty()
  gold: number;

  @ApiProperty()
  @IsNotEmpty()
  maximumAttack: number;

  @ApiProperty()
  @IsNotEmpty()
  maximumDefense: number;

  @ApiProperty()
  @IsUUID()
  userId: string;
}
