import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
// import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { UsersService } from 'src/modules/user/services/user.service';
import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../DTO/create-order.dto';
// import { UpdateUserDto } from '../DTO/update-user.dto';
import { v4 as uuid } from 'uuid';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { OrderRepository } from '../repositories/order.repository';

function generateId(): string {
  return uuid();
}

function getCurrentDateTimeString(): string {
  const currentDate = new Date();
  const dateTimeString = currentDate
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');

  return dateTimeString;
}

@Injectable()
export class OrderService {
  constructor(
    private readonly usersRepository: UserRepository,
    private readonly orderRepository: OrderRepository,
  ) {}
  
  async create(createOrderDto: CreateOrderDto): Promise<void> {
    const { orderStatus, email, menuId } = createOrderDto;
    const dateHourOrder = getCurrentDateTimeString();
    const user = await this.usersRepository.findEmail(email);
    const userId = user.id; 

    try {
      for (const id of menuId) {
        const orderId = generateId();
        await this.orderRepository.create({
          orderId,
          user,
          userId,
          menuId: id, // Passando cada ID como uma string separada
          dateHourOrder,
          orderStatus,
        });
      }
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar o pedido.');
    }
  }

  async findByUserId(userId: string): Promise<Order[]> {
    return this.orderRepository.findByUserId(userId);
  }
  

    // async findAll(): Promise<User[]> {
  //   return this.usersRepository.findAll();
  // }

  // async update(updateUserDto: UpdateUserDto): Promise<User> {
  //   try {
  //     const user = await this.usersRepository.findEmail(updateUserDto.email);

  //     if (!user) {
  //       throw new NotFoundException('Usuário não encontrado');
  //     }

  //     const updatedUser = await this.usersRepository.update(
  //       updateUserDto.email,
  //       updateUserDto.name,
  //     );
  //     return updatedUser;
  //   } catch (error) {
  //     console.error('Erro ao atualizar usuário:', error);
  //     throw new InternalServerErrorException('Erro ao atualizar usuário');
  //   }
  // }

  // async remove(email: string): Promise<void> {
  //   return this.usersRepository.remove(email);
  // }

  // async findAll(): Promise<User[]> {
  //   return this.usersRepository.findAll();
  // }

  // async findOne(id: string): Promise<User> {
  //   return this.usersRepository.findOne(id);
  // }

  // async findEmail(email: string): Promise<User> {
  //   return this.usersRepository.findEmail(email);
  // }
}
