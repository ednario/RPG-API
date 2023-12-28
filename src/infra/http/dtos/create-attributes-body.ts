import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateAttributesBody {
  @IsNotEmpty()
  hp: number;

  @IsNotEmpty()
  mp: number;

  @IsNotEmpty()
  strength: number;

  @IsNotEmpty()
  agility: number;

  @IsNotEmpty()
  dexterity: number;

  @IsNotEmpty()
  constitution: number;

  @IsNotEmpty()
  intelligence: number;

  @IsUUID()
  characterId: string;
}
