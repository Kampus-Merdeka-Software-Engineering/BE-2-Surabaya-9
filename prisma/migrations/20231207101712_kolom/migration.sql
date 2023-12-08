-- CreateTable
CREATE TABLE `saved` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `idRooms` INTEGER NOT NULL,

    UNIQUE INDEX `saved_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `saved` ADD CONSTRAINT `saved_idRooms_fkey` FOREIGN KEY (`idRooms`) REFERENCES `rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
