import { Module } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';

import { PrismaCharacterRepository } from './prisma/repositories/prisma-character.repository';
import { CharacterRepository } from '@character/repositories/CharacterRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CharacterRepository,
      useClass: PrismaCharacterRepository,
    },
  ],
  exports: [CharacterRepository],
})
export class DatabaseModule {}
