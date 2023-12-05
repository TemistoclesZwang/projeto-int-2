import { JSONSchema } from 'class-validator-jsonschema';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, Length, IsNumber, IsDate, IsPositive, Validate, ValidationError, ValidateNested } from 'class-validator';
import { ConfirmPass } from '../decorators/confirmPass-decorator';

export class CreateUserDto {
    @ApiProperty({ description: 'Nome do cliente' })
    @IsNotEmpty()
    @IsString()
    @Length(5, 42) 
    name: string;

    @ApiProperty({ description: 'Email do cliente' })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({ description: 'senha' })
    @IsNotEmpty()
    @IsString()
    // @IsNumber()
    // @IsPositive()
    password: string;

    @ApiProperty({ description: 'Confirmação da Senha' })
    @IsNotEmpty()
    @IsString()
    @ConfirmPass('password', { message: 'As senhas não são iguais.' }) // Use o decorator customizado
    passwordConfirm: string;

    @ApiProperty({ description: 'Tipo de usuário' })
    @IsNotEmpty()
    @IsString()
    typeUser: String;

}