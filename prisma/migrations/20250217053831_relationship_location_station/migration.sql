-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "stationId" INTEGER;

-- AlterTable
ALTER TABLE "Station" ADD COLUMN     "locationId" INTEGER;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE SET NULL ON UPDATE CASCADE;
