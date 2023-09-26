import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleados } from './entities/empleados.entity';

import { EmpleadosController } from './controllers/empleados.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Empleados])],
  controllers: [EmpleadosController],
})
export class EmpleadosModule {}
