import { JSONSchema } from 'class-validator-jsonschema';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, Length, IsNumber, IsDate, IsPositive, Validate, ValidationError, ValidateNested } from 'class-validator';
import { IsValidStatus } from '../decorators/IsValidStatus.decorator';
import { User } from 'src/modules/user/entities/user.entity';

export class CreateOrderDto {
    @ApiProperty({ description: 'Status do pedido' })
    @IsNotEmpty()
    @IsString()
    @IsValidStatus() // Use o decorator customizado
    orderStatus: string;

    @ApiProperty({ description: 'Email de quem fez o pedido' })
    @IsNotEmpty()
    @IsString()
    email: string;
}