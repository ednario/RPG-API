import { Phobias } from '@phobias/entities/Phobias';

export class PhobiasViewModel {
  static toHTTP(phobias: Phobias) {
    return {
      id: phobias.id,
      monster: phobias.monster,
      amountToOvercome: phobias.amountToOvercome,
      characterId: phobias.characterId,
    };
  }
}
