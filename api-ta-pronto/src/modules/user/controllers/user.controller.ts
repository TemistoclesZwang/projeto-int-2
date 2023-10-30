import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from '../services/user.service';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDto } from '../DTO/create-user.dto';
import {
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { UpdateUserDto } from '../DTO/update-user.dto';

@Controller('users')
@ApiTags('users') // Título das rotas no Swagger
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private userRepository: UserRepository,
  ) {}

  @Post('novo')
  @ApiOperation({ summary: 'Cria um novo user' }) // Descrição do endpoint
  @ApiResponse({ status: 201, description: 'User criado com sucesso' })
  @ApiBadRequestResponse({ description: 'Requisição inválida' })
  async create(@Body() createUserDto: CreateUserDto) {
    // Converta a string de prazo em um objeto Date
    // createUserDto.prazo = new Date(createUserDto.prazo);

    await this.usersService.create(createUserDto);
  }

  @Patch('update')
  @ApiOperation({ summary: 'Atualiza um user pelo email' })
  @ApiResponse({ status: 200, description: 'User atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'User não encontrado' })
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }

  @Delete('deleteAccount/:email')
  @ApiOperation({ summary: 'Remove um user pelo ID' })
  @ApiResponse({ status: 200, description: 'User removido com sucesso' })
  @ApiResponse({ status: 404, description: 'User não encontrado' })
  remove(@Param('email') email: string) {
    return this.usersService.remove(email);
  }
}

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



