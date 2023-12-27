import { CreateEquipmentsUseCase } from './CreateEquipmentsUseCase';

import { EquipmentsRepositoryInMemory } from '../../../../../test/repositories/EquipmentsRepositoryInMemory';

describe('CreateEquipmentsUseCase', () => {
  it('should be able to create a new equipment', async () => {
    const equipmentsRepositoryInMemory = new EquipmentsRepositoryInMemory();
    const createEquipmentsUseCase = new CreateEquipmentsUseCase(
      equipmentsRepositoryInMemory,
    );

    const { equipments } = await createEquipmentsUseCase.execute({
      head: 'head',
      chest: 'chest',
      gloves: 'gloves',
      boots: 'boots',
      leftGun: 'leftGun',
      rightGun: 'rightGun',
    });

    expect(equipmentsRepositoryInMemory.equipments).toHaveLength(1);
    expect(equipmentsRepositoryInMemory.equipments[0]).toEqual(equipments);
  });
});
