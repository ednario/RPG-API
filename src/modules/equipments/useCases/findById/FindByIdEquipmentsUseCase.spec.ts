import { EquipmentsRepositoryInMemory } from '@test/repositories/EquipmentsRepositoryInMemory';
import { CreateEquipmentsUseCase } from '../createEquipments/CreateEquipmentsUseCase';
import { FindByIdEquipmentsUseCase } from './FindByIdEquipmentsUseCase';

describe('FindByIdEquipmentsUseCase', () => {
  it('should be able to find a equipment by id', async () => {
    const equipmentsRepositoryInMemory = new EquipmentsRepositoryInMemory();
    const createEquipmentsUseCase = new CreateEquipmentsUseCase(
      equipmentsRepositoryInMemory,
    );
    const findByIdEquipmentsUseCase = new FindByIdEquipmentsUseCase(
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

    await createEquipmentsUseCase.execute({
      head: 'head',
      chest: 'chest',
      gloves: 'gloves',
      boots: 'boots',
      leftGun: 'leftGun',
      rightGun: 'rightGun',
    });

    const equipmentFound = await findByIdEquipmentsUseCase.execute({
      id: equipments.id,
    });

    console.log(equipmentFound);

    expect(equipmentFound).toHaveProperty('equipments');
    expect(equipmentFound.equipments.id).toBe(equipments.id);
  });
});
