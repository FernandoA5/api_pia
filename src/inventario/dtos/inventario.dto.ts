import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateInventarioDto {
    @IsNumber()
    @IsNotEmpty()
    num_producto: number;

    @IsString()
    @IsNotEmpty()
    ubicacion_producto: string;

    @IsNumber()
    @IsNotEmpty()
    cantidad_producto: number;
}
export class UpdateInventarioDto extends PartialType(CreateInventarioDto) { }