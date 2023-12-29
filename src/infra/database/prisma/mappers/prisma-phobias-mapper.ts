import { Phobias as RawPhobias } from '@prisma/client';

import { Phobias } from '@phobias/entities/Phobias';

export class PrismaPhobiasMapper {
  static toPrisma(phobias: Phobias) {
    return {
      id: phobias.id,
      monster: phobias.monster,
      amountToOvercome: phobias.amountToOvercome,
      characterId: phobias.characterId,
    };
  }
  static toDomain(raw: RawPhobias): Phobias {
    return new Phobias(
      {
        monster: raw.monster,
        amountToOvercome: raw.amountToOvercome,
        characterId: raw.characterId,
      },
      raw.id,
    );
  }
}
