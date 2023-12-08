/*
  Warnings:

  - Added the required column `idRooms` to the `booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `booking` ADD COLUMN `idRooms` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_idRooms_fkey` FOREIGN KEY (`idRooms`) REFERENCES `rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
