import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
// import { User } from 'src/modules/user/entities/user.entity';

export class Menu {
  menuId?: string //. como só vou buscar não preciso dos outros atributos
}

