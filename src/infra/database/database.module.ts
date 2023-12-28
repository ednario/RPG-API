import { Module } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';

import { PrismaCharacterRepository } from './prisma/repositories/prisma-character.repository';
import { CharacterRepository } from '@character/repositories/CharacterRepository';
import { AttributesRepository } from '@attributes/repositories/AttributesRepository';
import { PrismaAttributesRepository } from './prisma/repositories/prisma-attributes.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CharacterRepository,
      useClass: PrismaCharacterRepository,
    },
    {
      provide: AttributesRepository,
      useClass: PrismaAttributesRepository,
    },
  ],
  exports: [CharacterRepository, AttributesRepository],
})
export class DatabaseModule {}
