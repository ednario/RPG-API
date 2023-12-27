import { Phobias, PhobiasProps } from '@phobias/entities/Phobias';

type Override = Partial<PhobiasProps>;

export function makePhobias(override: Override = {}): Phobias {
  const phobias = new Phobias({
    monster: 'monster',
    amountToOvercome: 35,
    ...override,
  });

  return phobias;
}
