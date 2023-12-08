-- CreateTable
CREATE TABLE `payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalPrice` INTEGER NOT NULL,
    `discount` INTEGER NOT NULL,
    `paymentTotal` INTEGER NOT NULL,

    UNIQUE INDEX `payment_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
