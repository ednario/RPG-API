-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 0,
    "maximumAttack" INTEGER NOT NULL DEFAULT 0,
    "maximumDefense" INTEGER NOT NULL DEFAULT 0,
    "attributesId" TEXT NOT NULL,
    "equipmentsId" TEXT NOT NULL,
    "phobiasId" TEXT NOT NULL,
    "inventoryId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Character_attributesId_fkey" FOREIGN KEY ("attributesId") REFERENCES "Attributes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_equipmentsId_fkey" FOREIGN KEY ("equipmentsId") REFERENCES "Equipments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_phobiasId_fkey" FOREIGN KEY ("phobiasId") REFERENCES "Phobias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Attributes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hp" INTEGER NOT NULL,
    "mp" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL,
    "agility" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Equipments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "head" TEXT,
    "chest" TEXT,
    "gloves" TEXT,
    "boots" TEXT,
    "leftGun" TEXT,
    "rightGun" TEXT,
    "characterId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Phobias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "monster" TEXT NOT NULL,
    "amountToOvercome" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "wear" TEXT NOT NULL,
    "costMP" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL
);
