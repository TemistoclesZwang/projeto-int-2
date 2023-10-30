import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ConfirmPass } from '../decorators/confirmPass-decorator';

export class UpdateUserDto {
    @ApiProperty({ description: 'Nome do cliente' })
    @IsNotEmpty()
    @IsString()
    @Length(5, 42) 
    name?: string;

    @ApiProperty({ description: 'Email do cliente' })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({ description: 'senha' })
    @IsNotEmpty()
    @IsString()
    password?: string;

    @ApiProperty({ description: 'Confirmação da Senha' })
    @IsNotEmpty()
    @IsString()
    @ConfirmPass('password', { message: 'As senhas não são iguais.' }) 
    //decorator customizado
    passwordConfirm?: string;

}