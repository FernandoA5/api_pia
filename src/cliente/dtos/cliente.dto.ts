import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  nombre_cliente: string;

  @IsString()
  @IsNotEmpty()
  correo_cliente: string;

  @IsNumber()
  @IsNotEmpty()
  telefono_cliente: number;

  @IsString()
  @IsNotEmpty()
  empresa_cliente: string;
}
