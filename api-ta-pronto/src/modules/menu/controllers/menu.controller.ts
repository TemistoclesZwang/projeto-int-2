import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { MenuService } from '../services/menu.service';
import { MenuRepository } from '../repositories/menu.repository';
import { CreateMenuDto } from '../DTO/createMenu.dto';
// import { UpdateUserDto } from '../DTO/update-user.dto';

@Controller('users')
@ApiTags('users') // Título das rotas no Swagger
export class MenuController {
  constructor(
    private readonly menuService: MenuService,
    private menuRepository: MenuRepository,
  ) {}

  @Post('menu/create')
  @ApiOperation({ summary: 'Cria um novo menu' }) // Descrição do endpoint
  @ApiResponse({ status: 201, description: 'Pedido criado com sucesso' })
  @ApiResponse({ status: 404, description: 'Pedido não foi criado' })
  @ApiBadRequestResponse({ description: 'Requisição inválida' })
  
  async create(@Body() createMenuDto: CreateMenuDto) {
    await this.menuService.create(createMenuDto);
  }

  @Get('menu/:menuId')
  @ApiOperation({ summary: 'Retorna todos os pedidos através do ID do usuário' })
  @ApiResponse({ status: 200, description: 'Pedido retornado com sucesso' })
  @ApiResponse({ status: 404, description: 'Pedido não encontrado' })
  findByMenuId(@Param('menuId') menuId: string) {
    return this.menuService.findByMenuId(menuId);
  }

  @Get('menuall')
  @ApiOperation({ summary: 'Lista todos os users' })
  @ApiResponse({
    status: 200,
    description: 'Lista de users retornada com sucesso',
  })
  findAll() {
    return this.menuService.findAll();
  }
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



