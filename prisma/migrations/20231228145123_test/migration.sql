/*
  Warnings:

  - You are about to drop the column `attributesId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `equipmentsId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `inventoryId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `phobiasId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `skillId` on the `Character` table. All the data in the column will be lost.
  - Added the required column `characterId` to the `Attributes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attributes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hp" INTEGER NOT NULL,
    "mp" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL,
    "agility" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL,
    CONSTRAINT "Attributes_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Attributes" ("agility", "constitution", "dexterity", "hp", "id", "intelligence", "mp", "strength") SELECT "agility", "constitution", "dexterity", "hp", "id", "intelligence", "mp", "strength" FROM "Attributes";
DROP TABLE "Attributes";
ALTER TABLE "new_Attributes" RENAME TO "Attributes";
CREATE TABLE "new_Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 0,
    "maximumAttack" INTEGER NOT NULL DEFAULT 0,
    "maximumDefense" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT,
    CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Character" ("experience", "gold", "id", "level", "maximumAttack", "maximumDefense", "name", "race", "userId") SELECT "experience", "gold", "id", "level", "maximumAttack", "maximumDefense", "name", "race", "userId" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE TABLE "new_Inventory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL,
    CONSTRAINT "Inventory_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Inventory" ("amount", "characterId", "id", "itemName") SELECT "amount", "characterId", "id", "itemName" FROM "Inventory";
DROP TABLE "Inventory";
ALTER TABLE "new_Inventory" RENAME TO "Inventory";
CREATE TABLE "new_Phobias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "monster" TEXT NOT NULL,
    "amountToOvercome" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL,
    CONSTRAINT "Phobias_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Phobias" ("amountToOvercome", "characterId", "id", "monster") SELECT "amountToOvercome", "characterId", "id", "monster" FROM "Phobias";
DROP TABLE "Phobias";
ALTER TABLE "new_Phobias" RENAME TO "Phobias";
CREATE TABLE "new_Equipments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "head" TEXT,
    "chest" TEXT,
    "gloves" TEXT,
    "boots" TEXT,
    "leftGun" TEXT,
    "rightGun" TEXT,
    "characterId" TEXT NOT NULL,
    CONSTRAINT "Equipments_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Equipments" ("boots", "characterId", "chest", "gloves", "head", "id", "leftGun", "rightGun") SELECT "boots", "characterId", "chest", "gloves", "head", "id", "leftGun", "rightGun" FROM "Equipments";
DROP TABLE "Equipments";
ALTER TABLE "new_Equipments" RENAME TO "Equipments";
CREATE TABLE "new_Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "wear" TEXT NOT NULL,
    "costMP" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL,
    CONSTRAINT "Skill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Skill" ("characterId", "costMP", "id", "name", "wear") SELECT "characterId", "costMP", "id", "name", "wear" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
