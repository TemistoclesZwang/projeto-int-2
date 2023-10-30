// src/user/repositories/prisma-user.repository.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { PrismaService } from 'src/prisma.service';
import { v4 as uuid } from 'uuid';

function generateId():string{
    return uuid()
    
}

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(user: User): Promise<void> {
        const {name,email,hashPass} = user;
        const id = generateId();
        await this.prisma.user.create({
            data: {
                id,
                name,
                email,
                hashPass
            }
        });
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
