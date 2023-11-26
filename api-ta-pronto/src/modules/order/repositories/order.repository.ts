// src/user/repositories/prisma-user.repository.ts
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { PrismaService } from 'src/prisma.service';
import { v4 as uuid } from 'uuid';
import { UserRepository } from 'src/modules/user/repositories/user.repository';

@Injectable()
export class OrderRepository {
  constructor(private readonly prisma: PrismaService,
    private readonly usersRepository: UserRepository
    ) 
  {}

  async create(order: Order): Promise<void> {
    const { orderId, userId,menuId, dateHourOrder, orderStatus } = order;
    try {
      await this.prisma.order.create({
        data: {
          orderId,
          user: {
            connect: { id: userId },
          },
          menu: {
            connect: { menuId: menuId },
          },
          dateHourOrder,
          orderStatus,
        },
      });

    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar o pedido.');
    }
  }
  

  async findByUserId(userId: string): Promise<Order[]> {
    const orders = await this.prisma.order.findMany({
      where: {
        userId,
      },
    });
  
    const convertedOrders: Order[] = orders.map((order) => {
      return {
        // id: order.id,
        // user: order.user,
        userId: order.userId,
        orderId: order.orderId,
        menuId: order.menuId,
        dateHourOrder: order.dateHourOrder,
        orderStatus: order.orderStatus,
      };
    });
  
    return convertedOrders;
  }
  

// .!testar update e remove
  // async update(orderId: string, updatedOrder: Order): Promise<void> {
  //   try {
  //     await this.prisma.order.update({
  //       where: { orderId },
  //       data: {
  //         dateHourOrder: updatedOrder.dateHourOrder,
  //         orderStatus: updatedOrder.orderStatus,
  //       },
  //     });
  //   } catch (error) {
  //     throw new InternalServerErrorException('Erro ao atualizar o pedido.');
  //   }
  // }

  // async remove(orderId: string): Promise<void> {
  //   try {
  //     await this.prisma.order.delete({
  //       where: { orderId },
  //     });
  //   } catch (error) {
  //     throw new NotFoundException('Pedido não encontrado.');
  //   }
  // }
}

