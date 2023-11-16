import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProvedorDto {
    @IsNumber()
    @IsNotEmpty()
    num_provedor: number;

    @IsString()
    @IsNotEmpty()
    correo_provedor: string;

    @IsString()
    @IsNotEmpty()
    direccion_provedor: string;

    @IsNumber()
    @IsNotEmpty()
    telefono_provedor: number;

    @IsString()
    @IsNotEmpty()
    empresa_provedor: string;
}
export class UpdateProvedorDto extends PartialType(CreateProvedorDto) { }