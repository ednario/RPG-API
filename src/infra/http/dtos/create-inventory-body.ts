import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateInventoryBody {
  @ApiProperty()
  @IsNotEmpty()
  itemName: string;

  @ApiProperty()
  @IsNotEmpty()
  amount: number;

  @ApiProperty()
  @IsUUID()
  characterId: string;
}
