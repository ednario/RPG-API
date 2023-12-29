import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateInventoryBody {
  @IsNotEmpty()
  itemName: string;

  @IsNotEmpty()
  amount: number;

  @IsUUID()
  characterId: string;
}
