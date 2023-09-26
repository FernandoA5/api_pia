import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Ingresos } from './entities/ingresos.entity';

import { IngresosController } from './controllers/ingresos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ingresos])],
  controllers: [IngresosController],
})
export class IngresosModule {}
