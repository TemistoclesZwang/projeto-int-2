// src/user/repositories/prisma-user.repository.ts
import { Injectable } from '@nestjs/common';
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
        const {name,email,hashSenha} = user;
        const id = generateId();
        await this.prisma.user.create({
            data: {
                id,
                name,
                email,
                hashSenha
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

    async remove(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
}
