import { ApiProperty } from '@nestjs/swagger';

export class User {

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  hashPass: string;

  @ApiProperty()
  typeUser: string;

}
