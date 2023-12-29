import { Module } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';

import { PrismaCharacterRepository } from './prisma/repositories/prisma-character.repository';
import { PrismaAttributesRepository } from './prisma/repositories/prisma-attributes.repository';
import { PrismaEquipmentsRepository } from './prisma/repositories/prisma-equipments.reposity';
import { PrismaInventoryRepository } from './prisma/repositories/prisma-inventory.repository';
import { PrismaPhobiasRepository } from './prisma/repositories/prisma-phobias.repository';
import { PrismaSkillRepository } from './prisma/repositories/prisma-skill.repository';

import { CharacterRepository } from '@character/repositories/CharacterRepository';
import { AttributesRepository } from '@attributes/repositories/AttributesRepository';
import { EquipmentsRepository } from '@equipments/repositories/EquipmentsRepository';
import { InventoryRepository } from '@inventory/repositories/InventoryRepository';
import { PhobiasRepository } from '@phobias/repositories/PhobiasRepository';
import { SkillRepository } from '@skill/repositories/SkillRepository';

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
    {
      provide: EquipmentsRepository,
      useClass: PrismaEquipmentsRepository,
    },
    {
      provide: InventoryRepository,
      useClass: PrismaInventoryRepository,
    },
    {
      provide: PhobiasRepository,
      useClass: PrismaPhobiasRepository,
    },
    {
      provide: SkillRepository,
      useClass: PrismaSkillRepository,
    },
  ],
  exports: [
    CharacterRepository,
    AttributesRepository,
    EquipmentsRepository,
    InventoryRepository,
    PhobiasRepository,
    SkillRepository,
  ],
})
export class DatabaseModule {}
