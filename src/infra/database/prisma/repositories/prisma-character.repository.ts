import { Injectable } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaCharacterMapper } from '@infra/database/prisma/mappers/prisma-character-mapper';

import { Character } from '@character/entities/Character';
import { CharacterRepository } from '@character/repositories/CharacterRepository';

@Injectable()
export class PrismaCharacterRepository implements CharacterRepository {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<any> {
    return await this.prisma.character.findMany();
  }

  async findById(characterId: string): Promise<Character> {
    const character = await this.prisma.character.findUnique({
      where: {
        id: characterId,
      },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    return PrismaCharacterMapper.toDomain(character);
  }

  async listAll(): Promise<any> {
    return await this.prisma.character.findMany();
  }

  async create(character: Character): Promise<void> {
    const raw = PrismaCharacterMapper.toPrisma(character);

    await this.prisma.character.create({
      data: raw,
    });
  }

  async update(Character: Character): Promise<void> {
    const raw = PrismaCharacterMapper.toPrisma(Character);

    await this.prisma.character.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async delete(CharacterId: string): Promise<void> {
    await this.prisma.character.delete({
      where: {
        id: CharacterId,
      },
    });
  }
}
