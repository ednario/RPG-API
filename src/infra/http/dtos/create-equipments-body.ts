import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateEquipmentBody {
  @IsNotEmpty()
  @Length(1, 255)
  head: string | null;

  @IsNotEmpty()
  @Length(1, 255)
  chest: string | null;

  @IsNotEmpty()
  @Length(1, 255)
  gloves: string | null;

  @IsNotEmpty()
  @Length(1, 255)
  boots: string | null;

  @IsNotEmpty()
  @Length(1, 255)
  leftGun: string | null;

  @IsNotEmpty()
  @Length(1, 255)
  rightGun: string | null;

  @IsUUID()
  characterId: string;
}
