-- CreateEnum
CREATE TYPE "ClientStatus" AS ENUM ('active', 'inactive');

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT DEFAULT '',
    "email" TEXT,
    "company" TEXT DEFAULT '',
    "website" TEXT DEFAULT '',
    "logo" TEXT DEFAULT '',
    "status" "ClientStatus" DEFAULT 'active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT DEFAULT '',
    "code" TEXT,
    "country" TEXT DEFAULT '',
    "city" TEXT DEFAULT '',
    "timezone" TEXT DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Location_code_key" ON "Location"("code");
