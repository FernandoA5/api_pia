import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateBodegasSucursalDto {
  @IsNumber()
  @IsNotEmpty()
  num_bodega: number;

  @IsString()
  @IsNotEmpty()
  nombre_bodega: string;

  @IsString()
  @IsNotEmpty()
  ubicacion_bodega: string;

  @IsNumber()
  @IsNotEmpty()
  telefono_bodega: number;

  @IsString()
  @IsNotEmpty()
  empresa_bodega: string;

  @IsString()
  @IsNotEmpty()
  empleado_bodega: string;
}

export class UpdateBodegasSucursalDto extends PartialType(
  CreateBodegasSucursalDto,
) {}
