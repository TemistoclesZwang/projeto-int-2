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
      img:'https://source.unsplash.com/800x600/?pizza,margherita',
    },
    {
      nome: 'Hambúrguer Cheeseburguer',
      ingredientes: 'Carne de hambúrguer, queijo, alface, tomate, maionese',
      descricao: 'Hambúrguer suculento com queijo, alface, tomate e maionese',
      preco: 15.99,
      img:'https://source.unsplash.com/800x600/?burger,cheeseburger',
    },
    {
      nome: 'Frango à Parmegiana',
      ingredientes: 'Peito de frango, molho de tomate, queijo parmesão',
      descricao: 'Peito de frango empanado com molho de tomate e queijo parmesão',
      preco: 18.99,
      img:'https://source.unsplash.com/800x600/?chicken,parmesan',
    },
    {
      nome: 'Lasanha à Bolonhesa',
      ingredientes: 'Massa de lasanha, carne moída, molho de tomate, queijo',
      descricao: 'Camadas de massa de lasanha intercaladas com carne moída, molho de tomate e queijo',
      preco: 22.99,
      img:'https://source.unsplash.com/800x600/?lasagna,bolognese',
    },
    {
      nome: 'Batata Frita Crocante',
      ingredientes: 'Batatas, óleo, sal',
      descricao: 'Batatas cortadas em palitos crocantes, fritas até dourar e temperadas com sal',
      preco: 8.99,
      img:'https://source.unsplash.com/800x600/?fries,potato',
    },
    {
      nome: 'Cachorro-Quente Tradicional',
      ingredientes: 'Pão de cachorro-quente, salsicha, molho de tomate, mostarda, ketchup, cebola',
      descricao: 'Cachorro-quente clássico com salsicha, molho de tomate, mostarda, ketchup e cebola',
      preco: 10.99,
      img:'https://source.unsplash.com/800x600/?hotdog,classic',
    },
    {
      nome: 'Sushi de Salmão',
      ingredientes: 'Arroz de sushi, alga nori, salmão fresco, abacate',
      descricao: 'Rolinho de sushi com arroz, alga nori, salmão fresco e abacate',
      preco: 30.99,
      img:'https://source.unsplash.com/800x600/?sushi,salmon',
    },
    {
      nome: 'Tacos de Carne Asada',
      ingredientes: 'Tortillas de milho, carne asada, cebola, coentro, molho de tomate',
      descricao: 'Tacos autênticos com carne asada, cebola, coentro e molho de tomate',
      preco: 17.99,
      img:'https://source.unsplash.com/800x600/?tacos,carne',
    },
    {
      nome: 'Macarrão Carbonara',
      ingredientes: 'Espaguete, bacon, ovos, queijo parmesão',
      descricao: 'Espaguete cozido al dente com molho à base de ovos, bacon e queijo parmesão',
      preco: 20.99,
      img:'https://source.unsplash.com/800x600/?pasta,carbonara',
    },
    {
      nome: 'Salada Caesar com Frango Grelhado',
      ingredientes: 'Alface romana, frango grelhado, croutons, queijo parmesão, molho Caesar',
      descricao: 'Salada clássica com alface romana, frango grelhado, croutons, queijo parmesão e molho Caesar',
      preco: 15.99,
      img:'https://source.unsplash.com/800x600/?salad,caesar,chicken',
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
    const img = dish.img

    
    await prisma.menu.create({
      data: {
        menuId,
        nome,
        ingredientes,
        descricao,
        preco,
        img
    }
    });
  }

  await prisma.$disconnect();
}

seed();

