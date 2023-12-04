import { ApiProperty } from '@nestjs/swagger';

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
