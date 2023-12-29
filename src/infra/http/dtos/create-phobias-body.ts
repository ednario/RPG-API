import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreatePhobiasBody {
  @ApiProperty()
  @IsNotEmpty()
  monster: string;

  @ApiProperty()
  @IsNotEmpty()
  amountToOvercome: number;

  @ApiProperty()
  @IsUUID()
  characterId: string;
}
