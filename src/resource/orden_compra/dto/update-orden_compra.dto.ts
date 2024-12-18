import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdenCompraDto } from './create-orden_compra.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { Mensajes_Generales } from 'src/common/helpers/general.helpers'; 
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrdenCompraDto extends PartialType(CreateOrdenCompraDto) {

    @ApiProperty({ description: 'Estado de la orden de compra', example: 'PAGADO-PENDIENTE-CANCELADO', uniqueItems: false, nullable: false, type: 'string', minLength: 1, maxLength: 30 })
    @IsString({ message: Mensajes_Generales.CAMPO_STRING })
    @IsNotEmpty({ message: Mensajes_Generales.CAMPO_VACIO })
    @MaxLength(30, { message: Mensajes_Generales.TAMAÑO_MAXIMO })
    orden_compra_estado: string;

}
