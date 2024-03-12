-- CreateTable
CREATE TABLE `Trainer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `surname` VARCHAR(50) NOT NULL,
    `StarterId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Starters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `type` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FavouritePokemon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TrainerId` INTEGER NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `type` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `FavouritePokemon_TrainerId_key`(`TrainerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Badges` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Badges_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TrainersBadges` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TrainerId` INTEGER NOT NULL,
    `BadgeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Trainer` ADD CONSTRAINT `Trainer_StarterId_fkey` FOREIGN KEY (`StarterId`) REFERENCES `Starters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FavouritePokemon` ADD CONSTRAINT `FavouritePokemon_TrainerId_fkey` FOREIGN KEY (`TrainerId`) REFERENCES `Trainer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrainersBadges` ADD CONSTRAINT `TrainersBadges_TrainerId_fkey` FOREIGN KEY (`TrainerId`) REFERENCES `Trainer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrainersBadges` ADD CONSTRAINT `TrainersBadges_BadgeId_fkey` FOREIGN KEY (`BadgeId`) REFERENCES `Badges`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
