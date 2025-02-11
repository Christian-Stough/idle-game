/*
  Warnings:

  - The primary key for the `Items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `multiplier` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `skill` on the `Items` table. All the data in the column will be lost.
  - Added the required column `description` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Items" DROP CONSTRAINT "Items_pkey",
DROP COLUMN "id",
DROP COLUMN "multiplier",
DROP COLUMN "skill",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "item_id" SERIAL NOT NULL,
ADD CONSTRAINT "Items_pkey" PRIMARY KEY ("item_id");

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,
    "item_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);
