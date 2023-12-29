import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateEquipmentBody {
  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  head: string | null;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  chest: string | null;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  gloves: string | null;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  boots: string | null;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  leftGun: string | null;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 255)
  rightGun: string | null;

  @ApiProperty()
  @IsUUID()
  characterId: string;
}
