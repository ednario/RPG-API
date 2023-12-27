/*
  Warnings:

  - You are about to drop the column `maximumAtack` on the `Character` table. All the data in the column will be lost.

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
    "maximumAttack" INTEGER NOT NULL DEFAULT 0,
    "maximumDefense" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT,
    CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Character" ("experience", "gold", "id", "level", "maximumDefense", "name", "race", "userId") SELECT "experience", "gold", "id", "level", "maximumDefense", "name", "race", "userId" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
