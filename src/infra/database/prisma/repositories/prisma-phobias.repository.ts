import { Injectable } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaPhobiasMapper } from '../mappers/prisma-phobias-mapper';

import { Phobias } from '@phobias/entities/Phobias';
import { PhobiasRepository } from '@phobias/repositories/PhobiasRepository';

@Injectable()
export class PrismaPhobiasRepository implements PhobiasRepository {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<Phobias[]> {
    const phobias = await this.prisma.phobias.findMany();

    return phobias.map((phobias) => PrismaPhobiasMapper.toDomain(phobias));
  }

  async findById(phobiasId: string): Promise<Phobias> {
    const phobias = await this.prisma.phobias.findUnique({
      where: {
        id: phobiasId,
      },
    });

    if (!phobias) {
      throw new Error('phobias not found');
    }

    return PrismaPhobiasMapper.toDomain(phobias);
  }

  async create(phobias: Phobias): Promise<void> {
    const raw = PrismaPhobiasMapper.toPrisma(phobias);

    await this.prisma.phobias.create({
      data: raw,
    });
  }

  async update(phobias: Phobias): Promise<void> {
    const raw = PrismaPhobiasMapper.toPrisma(phobias);

    await this.prisma.phobias.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async delete(phobiasId: string): Promise<void> {
    await this.prisma.phobias.delete({
      where: {
        id: phobiasId,
      },
    });
  }
}
