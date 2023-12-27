import { EquipmentsRepositoryInMemory } from '@test/repositories/EquipmentsRepositoryInMemory';

import { CreateEquipmentsUseCase } from '../createEquipments/CreateEquipmentsUseCase';
import { UpdateEquipmentsUseCase } from './UpdateEquipmentsUseCase';

describe('UpdateEquipmentsUseCase', () => {
  it('should be able to update a equipment', async () => {
    const equipmentsRepositoryInMemory = new EquipmentsRepositoryInMemory();
    const createEquipmentsUseCase = new CreateEquipmentsUseCase(
      equipmentsRepositoryInMemory,
    );

    const updateEquipmentsUseCase = new UpdateEquipmentsUseCase(
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

    const equipmentUpdated = await updateEquipmentsUseCase.execute({
      id: equipments.id,
      head: 'head2',
      chest: 'chest2',
      gloves: 'gloves2',
      boots: 'boots2',
      leftGun: 'leftGun2',
      rightGun: 'rightGun2',
    });

    expect(equipmentUpdated).toHaveProperty('equipments');
    expect(equipmentUpdated.equipments.head).toBe('head2');
  });
});
