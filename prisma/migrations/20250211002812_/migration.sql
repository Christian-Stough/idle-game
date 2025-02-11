/*
  Warnings:

  - You are about to drop the column `woodcutting_xp` on the `Skills` table. All the data in the column will be lost.
  - Added the required column `woodcutting_level` to the `Skills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Skills" DROP COLUMN "woodcutting_xp",
ADD COLUMN     "woodcutting_level" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Levels" (
    "level" INTEGER NOT NULL,
    "xp" INTEGER NOT NULL,

    CONSTRAINT "Levels_pkey" PRIMARY KEY ("level")
);
