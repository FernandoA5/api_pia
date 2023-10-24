import { IsNumber, IsString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateBajasDto {
  @IsString()
  producto: string;

  @IsNumber()
  cantidad: number;

  @IsNumber()
  precio: number;

  @IsString()
  cliente: string;

  @IsString()
  fecha: string;
}

export class UpdateBajasDto extends PartialType(CreateBajasDto) {}
