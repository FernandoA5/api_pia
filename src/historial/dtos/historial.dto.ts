import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateHistorialDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    correo: string;

    @IsNumber()
    @IsNotEmpty()
    telefono: number;

    @IsString()
    @IsNotEmpty()
    empresa: string;
}
export class UpdateHistorialDto extends PartialType(CreateHistorialDto) { }