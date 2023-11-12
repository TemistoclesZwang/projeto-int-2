import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
// import { User } from 'src/modules/user/entities/user.entity';
import { Menu } from 'src/modules/menu/entities/menu.entity';

export class Order {
  id?: string //. retirar essas duas variáveis
  user?: User
  orderId: string  
  userId: string
  menuId: string 
  menu?: Menu        
  dateHourOrder:string
  orderStatus: string

}

