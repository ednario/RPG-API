import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateAttributesBody {
  @ApiProperty()
  @IsNotEmpty()
  hp: number;

  @ApiProperty()
  @IsNotEmpty()
  mp: number;

  @ApiProperty()
  @IsNotEmpty()
  strength: number;

  @ApiProperty()
  @IsNotEmpty()
  agility: number;

  @ApiProperty()
  @IsNotEmpty()
  dexterity: number;

  @ApiProperty()
  @IsNotEmpty()
  constitution: number;

  @ApiProperty()
  @IsNotEmpty()
  intelligence: number;

  @ApiProperty()
  @IsUUID()
  characterId: string;
}
