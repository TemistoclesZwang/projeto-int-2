// src/user/repositories/prisma-user.repository.ts
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { PrismaService } from 'src/prisma.service';
import { v4 as uuid } from 'uuid';


function generateId():string{
    return uuid()
    
}


@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) { }


    async create(user: {
        name: string;
        email: string;
        hashPass: string;
        typeUser: string;
      }): Promise<void> {
        const { name, email, hashPass, typeUser } = user;
        const id = generateId();
        await this.prisma.user.create({
          data: {
            id,
            name,
            email,
            hashPass,
            typeUser,
          },
        });
      }

    async addOrderToUser(userId: string, orderId: string): Promise<void> { //! não funciona
        const userExists = await this.prisma.user.findUnique({
            where: { id: userId },
        });
    
        if (!userExists) {
            throw new NotFoundException('Usuário não encontrado.');
        }
    
        try {
            await this.prisma.user.update({
                where: { id: userId },
                data: {
                    orders: {
                        connect: [{ orderId }],
                    },
                },
            });
        } catch (error) {
            throw new InternalServerErrorException('Erro ao adicionar pedido ao usuário.');
        }
    }
    
      
    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async findOne(id: string): Promise<User> {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }

    async findEmail(email: string): Promise<User> {
        return this.prisma.user.findUnique({
            where: {
                email,
            },
        });
    }

    async update(email: string, newName: string): Promise<User> {
        try {
            const updatedUser = await this.prisma.user.update({
                where: {
                    email, // Filtro para encontrar o usuário pelo email
                },
                data: {
                    name: newName, 
                },
            });
            return updatedUser;
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            throw new InternalServerErrorException('Erro ao atualizar usuário');
        }
    }
    
    async remove(email: string): Promise<void> {
        await this.prisma.user.delete({
            where: {
                email,
            },
        });
    }
}
