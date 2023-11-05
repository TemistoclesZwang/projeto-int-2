import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'Email do usuário' })
    email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'Senha do usuário' })
    password: string;
}
