import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateEgresosDto {
  @IsNumber()
  @IsNotEmpty()
  compras: number;

  @IsString()
  @IsNotEmpty()
  producto: string;

  @IsNumber()
  @IsNotEmpty()
  ventas: number;

  @IsNumber()
  @IsNotEmpty()
  exportaciones: number;
}

export class UpdateEgresosDto extends PartialType(CreateEgresosDto) {}
