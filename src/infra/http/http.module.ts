import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';

import { CharacterController } from '@infra/http/controllers/character.controller';
import { AttributesController } from '@infra/http/controllers/attributes.controller';
import { EquipmentsController } from '@infra/http/controllers/equipments.controller';
import { InventoryController } from './controllers/inventory.controller';
import { PhobiasController } from './controllers/phobias.controller';
import { SkillController } from './controllers/skill.controller';
import { UserController } from './controllers/user.controller';

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

import { FindAllInventoryUseCase } from '@inventory/useCases/findAllInventory/FindAllInventoryUseCase';
import { FindByIdInventoryUseCase } from '@inventory/useCases/findByIdInventory/FindByIdInventoryUseCase';
import { CreateInventoryUseCase } from '@inventory/useCases/createInventory/CreateInventoryUseCase';
import { UpdateInventoryUseCase } from '@inventory/useCases/updateInventory/UpdateInventoryUseCase';
import { DeleteInventoryUseCase } from '@inventory/useCases/deleteInventory/DeleteInventoryUseCase';

import { FindAllPhobiasUseCase } from '@phobias/useCases/findAllPhobias/FindAllPhobiasUseCase';
import { FindByIdPhobiasUseCase } from '@phobias/useCases/findByIdPhobias/FindByIdPhobiasUseCase';
import { CreatePhobiasUseCase } from '@phobias/useCases/createPhobias/CreatePhobiasUseCase';
import { UpdatePhobiasUseCase } from '@phobias/useCases/updatePhobias/UpdatePhobiasUseCase';
import { DeletePhobiasUseCase } from '@phobias/useCases/deletePhobias/DeletePhobiasUseCase';

import { FindAllSkillUseCase } from '@skill/useCases/findAllSkill/FindAllSkillUseCase';
import { FindByIdSkillUseCase } from '@skill/useCases/findByIdSkill/FindByIdSkillUseCase';
import { CreateSkillUseCase } from '@skill/useCases/createSkill/CreateSkillUseCase';
import { UpdateSkillUseCase } from '@skill/useCases/updateSkill/UpdateSkillUseCase';
import { DeleteSkillUseCase } from '@skill/useCases/deleteSkill/DeleteSkillUseCase';

import { FindAllUserUseCase } from '@user/useCases/findAllUser/FindAllUserUseCase';
import { FindByIdUserUseCase } from '@user/useCases/findByIdUser/FindByIdUserUseCase';
import { UpdateUserUseCase } from '@user/useCases/updateUser/UpdateUserUseCase';
import { DeleteUserUseCase } from '@user/useCases/deleteUser/DeleteUserUseCase';
import { CreateUserUseCase } from '@user/useCases/createUser/CreateUserUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CharacterController,
    AttributesController,
    EquipmentsController,
    InventoryController,
    PhobiasController,
    SkillController,
    UserController,
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
    FindAllSkillUseCase,
    FindByIdSkillUseCase,
    CreateSkillUseCase,
    UpdateSkillUseCase,
    DeleteSkillUseCase,
    FindAllUserUseCase,
    FindByIdUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    CreateUserUseCase,
  ],
})
export class HttpModule {}
