import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateComprasDto {
  @IsNumber()
  @IsNotEmpty()
  id_compra: number;

  @IsString()
  @IsNotEmpty()
  producto: string;

  @IsNumber()
  @IsNotEmpty()
  cantidad: number;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsString()
  @IsNotEmpty()
  proveedor: string;

  @IsString()
  @IsNotEmpty()
  fecha: string;
}

export class UpdateComprasDto extends PartialType(CreateComprasDto) {}
