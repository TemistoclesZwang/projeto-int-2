import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
// import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { UsersService } from 'src/modules/user/services/user.service';
// import { Order } from '../entities/menu.entity';
// import { CreateOrderDto } from '../DTO/findMenu.dto';
// import { UpdateUserDto } from '../DTO/update-user.dto';
import { v4 as uuid } from 'uuid';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
// import { OrderRepository } from '../repositories/menu.repository';
import { MenuRepository } from '../repositories/menu.repository';
function generateId(): string {
  return uuid();
}


@Injectable()
export class MenuService {
  constructor(
    private readonly usersRepository: UserRepository,
    private readonly menuRepository: MenuRepository,
  ) {}

  // async create(
  //   createOrderDto: CreateOrderDto,
  // ): Promise<void> {

  //   const orderId = generateId();
  //   const dateHourOrder = getCurrentDateTimeString();
  //   const user = await this.usersRepository.findEmail(createOrderDto.email);
  //   const orderStatus = createOrderDto.orderStatus

  //   const id = user.id; 
  //   const order = {
  //     orderId,
  //     user,
  //     id,
  //     dateHourOrder,
  //     orderStatus,
  //   };
  //   return this.orderRepository.create(order);
  // }

    async findByMenuId(menuId: string): Promise<any[]> {
    return this.menuRepository.findByMenuId(menuId);
  }

    async findAll(): Promise<any[]> {
    return this.menuRepository.findAll();
  }

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
