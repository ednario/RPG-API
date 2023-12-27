import { Equipments } from './Equipments';

let equipments: Equipments;

describe('Equipments', () => {
  beforeEach(() => {
    equipments = new Equipments({
      head: 'head',
      chest: 'chest',
      gloves: 'gloves',
      boots: 'boots',
      leftGun: 'leftGun',
      rightGun: 'rightGun',
    });
  });

  it('should create equipments', () => {
    expect(equipments).toBeDefined();
  });
});
