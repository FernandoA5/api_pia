import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateEmpleadosDto {
  @IsString()
  @IsNotEmpty()
  nombre_empleado: string;

  @IsNumber()
  @IsNotEmpty()
  telefono_empleado: number;

  @IsString()
  @IsNotEmpty()
  domicilio_empleado: string;
}
export	class	UpdateClienteDto	extends	PartialType(CreateEmpleadosDto)	{}