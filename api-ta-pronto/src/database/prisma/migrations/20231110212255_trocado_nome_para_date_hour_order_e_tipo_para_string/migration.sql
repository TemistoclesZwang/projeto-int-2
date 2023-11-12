/*
  Warnings:

  - You are about to drop the column `dataHoraPedido` on the `Order` table. All the data in the column will be lost.
  - Added the required column `dateHourOrder` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "dataHoraPedido",
ADD COLUMN     "dateHourOrder" TEXT NOT NULL;
