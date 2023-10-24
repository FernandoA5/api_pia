import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleados } from './entities/empleados.entity';

import { EmpleadosController } from './controllers/empleados.controller';
import { EmpleadosService } from './services/empleados.service';

@Module({
  imports: [TypeOrmModule.forFeature([Empleados])],
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
})
export class EmpleadosModule {}
