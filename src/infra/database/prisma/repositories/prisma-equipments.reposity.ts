import { Injectable } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaEquipmentsMapper } from '../mappers/prisma-equipments-mapper';

import { Equipments } from '@equipments/entities/Equipments';
import { EquipmentsRepository } from '@equipments/repositories/EquipmentsRepository';

@Injectable()
export class PrismaEquipmentsRepository implements EquipmentsRepository {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<Equipments[]> {
    const equipments = await this.prisma.equipments.findMany();

    return equipments.map((equipment) =>
      PrismaEquipmentsMapper.toDomain(equipment),
    );
  }

  async findById(equipmentsId: string): Promise<Equipments> {
    const equipments = await this.prisma.equipments.findUnique({
      where: {
        id: equipmentsId,
      },
    });

    if (!equipments) {
      throw new Error('Equipments not found');
    }

    return PrismaEquipmentsMapper.toDomain(equipments);
  }

  async create(equipments: Equipments): Promise<void> {
    const raw = PrismaEquipmentsMapper.toPrisma(equipments);

    await this.prisma.equipments.create({
      data: raw,
    });
  }

  async update(equipments: Equipments): Promise<void> {
    const raw = PrismaEquipmentsMapper.toPrisma(equipments);

    await this.prisma.equipments.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async delete(equipmentsId: string): Promise<void> {
    await this.prisma.equipments.delete({
      where: {
        id: equipmentsId,
      },
    });
  }
}
