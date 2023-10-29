import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, Length, IsNumber, IsDate, IsPositive, Validate } from 'class-validator';

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

    @ApiProperty({ description: 'senha' })
    @IsNotEmpty()
    @IsString()
    // @IsNumber()
    // @IsPositive()
    password: string;

    @ApiProperty({ description: 'Confirmação da senha' })
    @IsNotEmpty()
    @IsString()
    @Validate( (value, args) => value === args.object.password )
    // .valida se a senha é igual a confirmação
    passwordConfirm: string;

}
