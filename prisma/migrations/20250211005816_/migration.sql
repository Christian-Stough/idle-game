/*
  Warnings:

  - You are about to drop the column `woodcutting_level` on the `Skills` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Skills" DROP COLUMN "woodcutting_level",
ADD COLUMN     "woodcutting_xp" INTEGER NOT NULL DEFAULT 0;
