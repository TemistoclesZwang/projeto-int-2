/*
  Warnings:

  - The `menuId` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_menuId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "menuId",
ADD COLUMN     "menuId" TEXT;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("menuId") ON DELETE SET NULL ON UPDATE CASCADE;
