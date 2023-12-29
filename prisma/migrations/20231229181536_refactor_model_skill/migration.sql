/*
  Warnings:

  - You are about to alter the column `wear` on the `Skill` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "wear" INTEGER NOT NULL,
    "costMP" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL,
    CONSTRAINT "Skill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Skill" ("characterId", "costMP", "id", "name", "wear") SELECT "characterId", "costMP", "id", "name", "wear" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
