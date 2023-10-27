import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  senha: string;

  @ApiProperty()
  prazo: Date;
}
