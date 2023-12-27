import { CreateEquipmentsUseCase } from '../createEquipments/CreateEquipmentsUseCase';
import { DeleteEquipmentsUseCase } from './DeleteEquipments';

import { EquipmentsRepositoryInMemory } from '@test/repositories/EquipmentsRepositoryInMemory';

describe('DeleteEquipmentsUseCase', () => {
  it('should be able to delete a equipment', async () => {
    const equipmentsRepositoryInMemory = new EquipmentsRepositoryInMemory();
    const createEquipmentsUseCase = new CreateEquipmentsUseCase(
      equipmentsRepositoryInMemory,
    );

    const deleteEquipmentsUseCase = new DeleteEquipmentsUseCase(
      equipmentsRepositoryInMemory,
    );

    const equipments = await createEquipmentsUseCase.execute({
      head: 'head',
      chest: 'chest',
      gloves: 'gloves',
      boots: 'boots',
      leftGun: 'leftGun',
      rightGun: 'rightGun',
    });

    await deleteEquipmentsUseCase.execute({ id: equipments.equipments.id });

    expect(equipmentsRepositoryInMemory.equipments).toHaveLength(0);
  });
});
