/*
  Warnings:

  - You are about to drop the column `woodcutting_xp` on the `Skills` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Skills" DROP COLUMN "woodcutting_xp",
ADD COLUMN     "woodcutting" INTEGER NOT NULL DEFAULT 0;
