import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateCharacterBody {
  @IsNotEmpty()
  @Length(1, 255)
  name: string;

  @IsNotEmpty()
  @Length(1, 255)
  race: string;

  @IsNotEmpty()
  @Length(1, 255)
  level: number;

  @IsNotEmpty()
  @Length(1, 255)
  experience: number;

  @IsNotEmpty()
  @Length(1, 255)
  gold: number;

  @IsNotEmpty()
  @Length(1, 255)
  maximumAttack: number;

  @IsNotEmpty()
  @Length(1, 255)
  maximumDefense: number;

  @IsUUID()
  userId: string;
}
