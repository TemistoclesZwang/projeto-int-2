import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, Length, IsNumber, IsDate, IsPositive } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ description: 'Nome do cliente' })
    @IsNotEmpty()
    @IsString()
    @Length(5, 32) 
    name: string;

    @ApiProperty({ description: 'Email do cliente' })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({ description: 'hash da senha' })
    //. não pode vir do usuário. Tem que ser gerado pelo back
    @IsNotEmpty()
    @IsString()

    // @IsNumber()
    // @IsPositive()
    hashSenha: string;

}
