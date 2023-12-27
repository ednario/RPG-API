/*
  Warnings:

  - You are about to drop the column `agility` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `constitution` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `dexterity` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `hp` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `intelligence` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `mp` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `strength` on the `Character` table. All the data in the column will be lost.
  - Added the required column `race` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 0,
    "maximumAtack" INTEGER NOT NULL DEFAULT 0,
    "maximumDefense" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT,
    CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Character" ("experience", "id", "level", "name", "userId") SELECT "experience", "id", "level", "name", "userId" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
