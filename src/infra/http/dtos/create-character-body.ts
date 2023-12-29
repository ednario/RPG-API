import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateCharacterBody {
  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  race: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  level: number;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  experience: number;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  gold: number;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  maximumAttack: number;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  maximumDefense: number;

  @ApiProperty()
  @IsUUID()
  userId: string;
}
