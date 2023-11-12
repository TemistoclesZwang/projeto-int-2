// src/user/repositories/prisma-user.repository.ts
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
// import { Order } from '../entities/menu.entity';
import { PrismaService } from 'src/prisma.service';
import { v4 as uuid } from 'uuid';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { Menu } from '../entities/menu.entity';

@Injectable()
export class MenuRepository {
  constructor(private readonly prisma: PrismaService,
    private readonly usersRepository: UserRepository
    ) 
  {}

  async findByMenuId(menuId: string): Promise<any> { //.corrigir esse tipo
    const menu = await this.prisma.menu.findUnique({
      where: {
        menuId,
      },
    });
  
    return menu;
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
