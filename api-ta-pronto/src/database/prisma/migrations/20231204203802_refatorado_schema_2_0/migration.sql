/*
  Warnings:

  - The primary key for the `Menu` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `menuId` on the `Menu` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - You are about to alter the column `nome` on the `Menu` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - You are about to alter the column `ingredientes` on the `Menu` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - You are about to alter the column `descricao` on the `Menu` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - You are about to alter the column `img` on the `Menu` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `userId` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - You are about to alter the column `orderId` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - You are about to alter the column `dateHourOrder` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - You are about to alter the column `orderStatus` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - You are about to alter the column `menuId` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `typeUser` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - You are about to alter the column `hashPass` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_menuId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- AlterTable
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_pkey",
ALTER COLUMN "menuId" SET DATA TYPE VARCHAR(191),
ALTER COLUMN "nome" SET DATA TYPE VARCHAR(191),
ALTER COLUMN "ingredientes" SET DATA TYPE VARCHAR(191),
ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(191),
ALTER COLUMN "img" SET DATA TYPE VARCHAR(191),
ADD CONSTRAINT "Menu_pkey" PRIMARY KEY ("menuId");

-- AlterTable
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
ALTER COLUMN "userId" SET DATA TYPE VARCHAR(191),
ALTER COLUMN "orderId" SET DATA TYPE VARCHAR(191),
ALTER COLUMN "dateHourOrder" SET DATA TYPE VARCHAR(191),
ALTER COLUMN "orderStatus" SET DATA TYPE VARCHAR(191),
ALTER COLUMN "menuId" SET DATA TYPE VARCHAR(191),
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "typeUser",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(191),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(191),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(191),
ALTER COLUMN "hashPass" SET DATA TYPE VARCHAR(191),
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Client" (
    "userId" VARCHAR(191) NOT NULL,
    "typeUser" VARCHAR(191) DEFAULT 'cliente',

    CONSTRAINT "Client_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Employee" (
    "userId" VARCHAR(191) NOT NULL,
    "typeUser" VARCHAR(191) NOT NULL DEFAULT 'empregado',
    "role" VARCHAR(191) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Promotion" (
    "promotionId" VARCHAR(191) NOT NULL,
    "description" VARCHAR(191) NOT NULL,

    CONSTRAINT "Promotion_pkey" PRIMARY KEY ("promotionId")
);

-- CreateTable
CREATE TABLE "PromotionMenu" (
    "promotionId" VARCHAR(191) NOT NULL,
    "menuId" VARCHAR(191) NOT NULL,
    "discountPercentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PromotionMenu_pkey" PRIMARY KEY ("promotionId","menuId")
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "restaurantId" VARCHAR(191) NOT NULL,
    "name" VARCHAR(191) NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("restaurantId")
);

-- CreateTable
CREATE TABLE "RestaurantMenu" (
    "restaurantId" VARCHAR(191) NOT NULL,
    "menuId" VARCHAR(191) NOT NULL,

    CONSTRAINT "RestaurantMenu_pkey" PRIMARY KEY ("restaurantId","menuId")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("menuId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromotionMenu" ADD CONSTRAINT "PromotionMenu_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("menuId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromotionMenu" ADD CONSTRAINT "PromotionMenu_promotionId_fkey" FOREIGN KEY ("promotionId") REFERENCES "Promotion"("promotionId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantMenu" ADD CONSTRAINT "RestaurantMenu_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("menuId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantMenu" ADD CONSTRAINT "RestaurantMenu_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("restaurantId") ON DELETE CASCADE ON UPDATE CASCADE;
