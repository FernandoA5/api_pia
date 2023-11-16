import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import exp from 'constants';

export class CreateProductoDto {
    @IsString()
    @IsNotEmpty()
    nombre_producto: string;

    @IsNumber()
    @IsNotEmpty()
    precio_producto: number;

    @IsString()
    @IsNotEmpty()
    provedor_producto: string;

    @IsNumber()
    @IsNotEmpty()
    num_bodega: number;
}
export class UpdateProductoDto extends PartialType(CreateProductoDto) { }