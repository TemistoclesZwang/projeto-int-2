-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "idFromMenu" TEXT NOT NULL DEFAULT 'id';

-- CreateTable
CREATE TABLE "Menu" (
    "menuId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ingredientes" TEXT[],
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("menuId")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_idFromMenu_fkey" FOREIGN KEY ("idFromMenu") REFERENCES "Menu"("menuId") ON DELETE RESTRICT ON UPDATE CASCADE;
