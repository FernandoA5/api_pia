import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BodegasSucursal } from './entities/bodegas_sucursal.entity';

import { BodegasSucursalController } from './controllers/bodegas_sucursal.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BodegasSucursal])],
  controllers: [BodegasSucursalController],
})
export class BodegasSucursalModule {}
