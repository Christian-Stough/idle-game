-- CreateTable
CREATE TABLE "Items" (
    "id" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "multiplier" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "woodcutting_xp" DECIMAL(65,30) NOT NULL DEFAULT 0,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);
