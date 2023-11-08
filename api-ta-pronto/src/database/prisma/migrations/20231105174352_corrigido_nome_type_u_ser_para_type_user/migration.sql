/*
  Warnings:

  - You are about to drop the column `typeUSer` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "typeUSer",
ADD COLUMN     "typeUser" TEXT NOT NULL DEFAULT 'cliente';
