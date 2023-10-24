import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Ingresos } from './entities/ingresos.entity';

import { IngresosController } from './controllers/ingresos.controller';
import { IngresosService } from './services/ingresos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ingresos])],
  controllers: [IngresosController],
  providers: [IngresosService],
})
export class IngresosModule {}
