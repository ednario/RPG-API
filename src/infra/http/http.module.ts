import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';

import { CharacterController } from '@infra/http/controllers/character.controller';
import { AttributesController } from '@infra/http/controllers/attributes.controller';
import { EquipmentsController } from '@infra/http/controllers/equipments.controller';

import { CreateCharacterUseCase } from '@character/useCases/createCharacter/CreateCharacterUseCase';
import { FindByIdCharacterUseCase } from '@character/useCases/findByIdCharacter/FindByIdCharacterUseCase';
import { FindAllCharacterUseCase } from '@character/useCases/findAllCharacter/FindAllCharacterUseCase';
import { UpdateCharacterUseCase } from '@character/useCases/updateCharacter/UpdateCharacterUseCase';
import { DeleteCharacterUseCase } from '@character/useCases/deleteCharacter/DeleteCharacterUseCase';
import { CreateAttributesUseCase } from '@attributes/useCases/createAttributes/CreateAttributesUseCase';
import { FindByIdAttributesUseCase } from '@attributes/useCases/findByIdAttributes/FindByIdAttributesUseCase';
import { FindAllAttributesUseCase } from '@attributes/useCases/findAllAttributes/FindAllAttributesUseCase';
import { UpdateAttributesUseCase } from '@attributes/useCases/updateAttributes/UpdateAttributesUseCase';
import { DeleteAttributesUseCase } from '@attributes/useCases/deleteAttributes/DeleteAttributesUseCase';
import { FindAllEquipmentsUseCase } from '@equipments/useCases/findAllEquipments/FindAllEquipmentsUseCase';
import { FindByIdEquipmentsUseCase } from '@equipments/useCases/findByIdEquipments/FindByIdEquipmentsUseCase';
import { CreateEquipmentsUseCase } from '@equipments/useCases/createEquipments/CreateEquipmentsUseCase';
import { UpdateEquipmentsUseCase } from '@equipments/useCases/updateEquipments/UpdateEquipmentsUseCase';
import { DeleteEquipmentsUseCase } from '@equipments/useCases/deleteEquipments/DeleteEquipmentsUseCase';
import { InventoryController } from './controllers/inventory.controller';
import { FindAllInventoryUseCase } from '@inventory/useCases/findAllInventory/FindAllInventoryUseCase';
import { FindByIdInventoryUseCase } from '@inventory/useCases/findByIdInventory/FindByIdInventoryUseCase';
import { CreateInventoryUseCase } from '@inventory/useCases/createInventory/CreateInventoryUseCase';
import { UpdateInventoryUseCase } from '@inventory/useCases/updateInventory/UpdateInventoryUseCase';
import { DeleteInventoryUseCase } from '@inventory/useCases/deleteInventory/DeleteInventoryUseCase';
import { PhobiasController } from './controllers/phobias.controller';
import { FindAllPhobiasUseCase } from '@phobias/useCases/findAllPhobias/FindAllPhobiasUseCase';
import { FindByIdPhobiasUseCase } from '@phobias/useCases/findByIdPhobias/FindByIdPhobiasUseCase';
import { CreatePhobiasUseCase } from '@phobias/useCases/createPhobias/CreatePhobiasUseCase';
import { UpdatePhobiasUseCase } from '@phobias/useCases/updatePhobias/UpdatePhobiasUseCase';
import { DeletePhobiasUseCase } from '@phobias/useCases/deletePhobias/DeletePhobiasUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CharacterController,
    AttributesController,
    EquipmentsController,
    InventoryController,
    PhobiasController,
  ],
  providers: [
    CreateCharacterUseCase,
    FindByIdCharacterUseCase,
    FindAllCharacterUseCase,
    UpdateCharacterUseCase,
    DeleteCharacterUseCase,
    CreateAttributesUseCase,
    FindByIdAttributesUseCase,
    FindAllAttributesUseCase,
    UpdateAttributesUseCase,
    DeleteAttributesUseCase,
    FindAllEquipmentsUseCase,
    FindByIdEquipmentsUseCase,
    CreateEquipmentsUseCase,
    UpdateEquipmentsUseCase,
    DeleteEquipmentsUseCase,
    FindAllInventoryUseCase,
    FindByIdInventoryUseCase,
    CreateInventoryUseCase,
    UpdateInventoryUseCase,
    DeleteInventoryUseCase,
    FindAllPhobiasUseCase,
    FindByIdPhobiasUseCase,
    CreatePhobiasUseCase,
    UpdatePhobiasUseCase,
    DeletePhobiasUseCase,
  ],
})
export class HttpModule {}
