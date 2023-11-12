/*
  Warnings:

  - You are about to drop the column `idFromMenu` on the `Order` table. All the data in the column will be lost.
  - Added the required column `menuId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_idFromMenu_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "idFromMenu",
ADD COLUMN     "menuId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("menuId") ON DELETE RESTRICT ON UPDATE CASCADE;
