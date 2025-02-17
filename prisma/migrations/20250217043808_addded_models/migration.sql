/*
  Warnings:

  - The `status` column on the `Client` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('active', 'inactive');

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "status",
ADD COLUMN     "status" "Status" DEFAULT 'active';

-- DropEnum
DROP TYPE "ClientStatus";

-- CreateTable
CREATE TABLE "Station" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "website" TEXT,
    "status" "Status" DEFAULT 'active',
    "omniplayerUrl" TEXT,
    "clientId" INTEGER,
    "clientSecret" TEXT,
    "username" TEXT,
    "password" TEXT,
    "systemPrompt" TEXT,
    "hourlyPrompt0" TEXT,
    "hourlyPrompt10" TEXT,
    "hourlyPrompt20" TEXT,
    "hourlyPrompt30" TEXT,
    "hourlyPrompt40" TEXT,
    "hourlyPrompt50" TEXT,
    "hourlyPrompt55" TEXT,
    "newsPrompt" TEXT,
    "weatherPrompt" TEXT,
    "trafficPrompt" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Voice" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "voiceId" TEXT,
    "gender" TEXT,
    "language" TEXT,
    "accent" TEXT,
    "age" INTEGER,
    "category" TEXT,
    "country" TEXT,
    "status" "Status",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Voice_pkey" PRIMARY KEY ("id")
);
