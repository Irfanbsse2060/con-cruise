-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'CRUISER');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,
    "numberOfRides" DOUBLE PRECISION NOT NULL,
    "averageRating" DOUBLE PRECISION NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'CUSTOMER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_fullName_key" ON "users"("fullName");
