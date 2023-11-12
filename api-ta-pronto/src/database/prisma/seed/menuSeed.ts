// prisma/seed/menuSeed.ts
import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from 'uuid';

const prisma = new PrismaClient();

async function seed() {
  const dishes = [
    {
      nome: 'Pizza Margherita',
      ingredientes: 'Molho de tomate, mussarela, manjericão',
      descricao: 'Pizza clássica italiana com molho de tomate, mussarela e manjericão',
      preco: 25.99,
    },
    {
      nome: 'Hambúrguer Cheeseburguer',
      ingredientes: 'Carne de hambúrguer, queijo, alface, tomate, maionese',
      descricao: 'Hambúrguer suculento com queijo, alface, tomate e maionese',
      preco: 15.99,
    },
    {
      nome: 'Frango à Parmegiana',
      ingredientes: 'Peito de frango, molho de tomate, queijo parmesão',
      descricao: 'Peito de frango empanado com molho de tomate e queijo parmesão',
      preco: 18.99,
    },
  ];
  function generateId(): string {
    return uuid();
  }
  
  for (const dish of dishes) {
    const menuId = generateId()
    const nome = dish.nome
    const ingredientes = dish.ingredientes
    const descricao = dish.descricao
    const preco = dish.preco

    
    await prisma.menu.create({
      data: {
        menuId,
        nome,
        ingredientes,
        descricao,
        preco
    }
    });
  }

  await prisma.$disconnect();
}

seed();
