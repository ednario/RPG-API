import { CreateEquipmentsUseCase } from './CreateEquipmentsUseCase';

import { EquipmentsRepositoryInMemory } from '../../../../../test/repositories/EquipmentsRepositoryInMemory';

describe('CreateEquipmentsUseCase', () => {
  let equipmentsRepositoryInMemory: EquipmentsRepositoryInMemory;
  let createEquipmentsUseCase: CreateEquipmentsUseCase;

  beforeEach(() => {
    equipmentsRepositoryInMemory = new EquipmentsRepositoryInMemory();
    createEquipmentsUseCase = new CreateEquipmentsUseCase(
      equipmentsRepositoryInMemory,
    );
  });

  it('should create equipments', async () => {
    const equipments = await createEquipmentsUseCase.execute({
      head: 'head',
      chest: 'chest',
      gloves: 'gloves',
      boots: 'boots',
      leftGun: 'leftGun',
      rightGun: 'rightGun',
    });

    expect(equipments).toBeDefined();
  });
});
