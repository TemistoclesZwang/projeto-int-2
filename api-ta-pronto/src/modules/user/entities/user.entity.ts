import { ApiProperty } from '@nestjs/swagger';
import { Order } from '@prisma/client';

export class User {
  @ApiProperty()
  id: string;
  //.poderia ser opcional esse id

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  hashPass: string;

  @ApiProperty()
  typeUser: string;

}
