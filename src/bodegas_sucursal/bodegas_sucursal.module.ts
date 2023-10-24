import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BodegasSucursal } from './entities/bodegas_sucursal.entity';

import { BodegasSucursalController } from './controllers/bodegas_sucursal.controller';
import { BodegasSucursalService } from './services/bodegas_sucursal.service';

@Module({
  imports: [TypeOrmModule.forFeature([BodegasSucursal])],
  controllers: [BodegasSucursalController],
  providers: [BodegasSucursalService],
})
export class BodegasSucursalModule {}
