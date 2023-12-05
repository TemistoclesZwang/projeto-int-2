import { JSONSchema } from 'class-validator-jsonschema';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString,  IsNumber,  IsArray } from 'class-validator';

export class CreateMenuDto {
    @ApiProperty({ description: 'Status do pedido' })
    @IsNotEmpty()
    @IsString()
    nome: string;

    @ApiProperty({ description: 'Email de quem fez o pedido' })
    @IsNotEmpty()
    @IsString()
    ingredientes: string;

    @ApiProperty({ description: 'Id do prato escolhido no pedido' })
    @IsNotEmpty()
    @IsString()
    // @IsString()
    descricao: string;

    @ApiProperty({ description: 'Preço do prato' })
    @IsNotEmpty()
    @IsNumber()
    preco: number;

    @ApiProperty({ description: 'CDN da imagem do prato' })
    @IsNotEmpty()
    @IsString()
    img: string;

    
}