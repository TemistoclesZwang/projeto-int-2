import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
// import { User } from 'src/modules/user/entities/user.entity';

export class Order {

  id?: string //. retirar essas duas variáveis
  user?: User
  orderId: string  
  // userId: User.id vai ser acessado através do User
  // menuId: string vai ser acessado através do Menu
  //! menu: Menu        
  dateHourOrder:string
  orderStatus: string

}

