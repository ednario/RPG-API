import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';
import { CharacterController } from '@infra/http/controllers/character.controller';

import { CreateCharacterUseCase } from '@character/useCases/createCharacter/CreateCharacterUseCase';
import { FindByIdCharacterUseCase } from '@character/useCases/findByIdCharacter/FindByIdCharacterUseCase';
import { FindAllCharacterUseCase } from '@character/useCases/findAllCharacter/FindAllCharacterUseCase';
import { UpdateCharacterUseCase } from '@character/useCases/updateCharacter/UpdateCharacterUseCase';
import { DeleteCharacterUseCase } from '@character/useCases/deleteCharacter/DeleteCharacterUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [CharacterController],
  providers: [
    CreateCharacterUseCase,
    FindByIdCharacterUseCase,
    FindAllCharacterUseCase,
    UpdateCharacterUseCase,
    DeleteCharacterUseCase,
  ],
})
export class HttpModule {}
