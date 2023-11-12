import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateOrderDto } from '../DTO/create-order.dto';
import { OrderService } from '../services/order.service';
import { OrderRepository } from '../repositories/order.repository';
import {
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
// import { UpdateUserDto } from '../DTO/update-user.dto';

@Controller('users')
@ApiTags('users') // Título das rotas no Swagger
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private orderRepository: OrderRepository,
  ) {}

  @Post('order')
  @ApiOperation({ summary: 'Cria um novo pedido' }) // Descrição do endpoint
  @ApiResponse({ status: 201, description: 'Pedido criado com sucesso' })
  @ApiResponse({ status: 404, description: 'Pedido não foi criado' })
  @ApiBadRequestResponse({ description: 'Requisição inválida' })
  
  async create(@Body() createOrderDto: CreateOrderDto) {
    await this.orderService.create(createOrderDto);
  }

  // @Get('orders/:userId')
  // @ApiOperation({ summary: 'Retorna todos os pedidos através do ID do usuário' })
  // @ApiResponse({ status: 200, description: 'Pedido retornado com sucesso' })
  // @ApiResponse({ status: 404, description: 'Pedido não encontrado' })
  // findOne(@Param('userId') userId: string) {
  //   return this.orderService.findByUserId(userId);
  // }
}

//   @Patch('update')
//   @ApiOperation({ summary: 'Atualiza um user pelo email' })
//   @ApiResponse({ status: 200, description: 'User atualizado com sucesso' })
//   @ApiResponse({ status: 404, description: 'User não encontrado' })
//   update(@Body() updateUserDto: UpdateUserDto) {
//     return this.usersService.update(updateUserDto);
//   }

//   @Delete('deleteAccount/:email')
//   @ApiOperation({ summary: 'Remove um user pelo ID' })
//   @ApiResponse({ status: 200, description: 'User removido com sucesso' })
//   @ApiResponse({ status: 404, description: 'User não encontrado' })
//   remove(@Param('email') email: string) {
//     return this.usersService.remove(email);
//   }
// }

//   @Get('lista')
//   @ApiOperation({ summary: 'Lista todos os users' })
//   @ApiResponse({
//     status: 200,
//     description: 'Lista de users retornada com sucesso',
//   })
//   findAll() {
//     return this.usersService.findAll();
//   }

//   @Get('lista/:id')
//   @ApiOperation({ summary: 'Retorna um user pelo ID' })
//   @ApiResponse({ status: 200, description: 'User retornado com sucesso' })
//   @ApiResponse({ status: 404, description: 'User não encontrado' })
//   findOne(@Param('id') id: string) {
//     return this.usersService.findOne(+id);
//   }



