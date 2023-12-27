import { Injectable } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaAttributesMapper } from '@infra/database/prisma/mappers/prisma-attributes-mapper';

import { Attributes } from '@attributes/entities/attributes';
import { AttributesRepository } from '@attributes/repositories/AttributesRepository';

@Injectable()
export class PrismaAttributesRepository implements AttributesRepository {
  constructor(private prisma: PrismaService) {}

  async findById(attribustesId: string): Promise<Attributes> {
    const attributes = await this.prisma.attributes.findUnique({
      where: {
        id: attribustesId,
      },
    });

    if (!attributes) {
      throw new Error('Attributes not found');
    }

    return PrismaAttributesMapper.toDomain(attributes);
  }

  async listAll(): Promise<any> {
    return await this.prisma.attributes.findMany();
  }

  async create(attributes: Attributes): Promise<void> {
    const raw = PrismaAttributesMapper.toPrisma(attributes);

    await this.prisma.attributes.create({
      data: raw,
    });
  }

  async update(attributes: Attributes): Promise<void> {
    const raw = PrismaAttributesMapper.toPrisma(attributes);

    await this.prisma.attributes.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async delete(attributesId: string): Promise<void> {
    await this.prisma.attributes.delete({
      where: {
        id: attributesId,
      },
    });
  }
}
