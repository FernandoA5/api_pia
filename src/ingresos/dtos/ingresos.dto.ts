import { IsNotEmpty, IsNumber, IsString } from "class-validator";

import { PartialType } from "@nestjs/mapped-types";

export class CreateIngresosDto {
    @IsNumber()
    @IsNotEmpty()
    venta: number;

    @IsString()
    @IsNotEmpty()
    producto: string;

    @IsNumber()
    @IsNotEmpty()
    exportaciones: number;

    @IsNumber()
    @IsNotEmpty()
    importaciones: number;
}
export class UpdateHistorialDto extends PartialType(CreateIngresosDto) { }