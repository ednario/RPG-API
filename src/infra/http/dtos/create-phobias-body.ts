import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreatePhobiasBody {
  @IsNotEmpty()
  monster: string;

  @IsNotEmpty()
  amountToOvercome: number;

  @IsUUID()
  characterId: string;
}
