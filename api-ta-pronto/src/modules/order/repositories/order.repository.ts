// src/user/repositories/prisma-user.repository.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { PrismaService } from 'src/prisma.service';
import { v4 as uuid } from 'uuid';
import { UserRepository } from 'src/modules/user/repositories/user.repository';

@Injectable()
export class OrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(order: Order): Promise<void> {
    const { orderId, user, dateHourOrder, orderStatus } = order;

    try {
      await this.prisma.order.create({
        data: {
          orderId,
          user: {
            connect: { id: user.id },
          },
          dateHourOrder,
          orderStatus,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar o pedido.');
    }
  }

  // async findAll(): Promise<User[]> {
  //     return this.prisma.user.findMany();
  // }

  // async findOne(id: string): Promise<User> {
  //     return this.prisma.user.findUnique({
  //         where: {
  //             id,
  //         },
  //     });
  // }

  // async findEmail(email: string): Promise<User> {
  //     return this.prisma.user.findUnique({
  //         where: {
  //             email,
  //         },
  //     });
  // }

  // async update(email: string, newName: string): Promise<User> {
  //     try {
  //         const updatedUser = await this.prisma.user.update({
  //             where: {
  //                 email, // Filtro para encontrar o usuário pelo email
  //             },
  //             data: {
  //                 name: newName,
  //             },
  //         });
  //         return updatedUser;
  //     } catch (error) {
  //         console.error('Erro ao atualizar usuário:', error);
  //         throw new InternalServerErrorException('Erro ao atualizar usuário');
  //     }
  // }

  // async remove(email: string): Promise<void> {
  //     await this.prisma.user.delete({
  //         where: {
  //             email,
  //         },
  //     });
  // }
}
