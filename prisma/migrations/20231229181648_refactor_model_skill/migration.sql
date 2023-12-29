/*
  Warnings:

  - You are about to drop the column `costMP` on the `Skill` table. All the data in the column will be lost.
  - Added the required column `costMp` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "wear" INTEGER NOT NULL,
    "costMp" INTEGER NOT NULL,
    "characterId" TEXT NOT NULL,
    CONSTRAINT "Skill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Skill" ("characterId", "id", "name", "wear") SELECT "characterId", "id", "name", "wear" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
