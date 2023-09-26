import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Historial } from './entities/historial.entity';

import { HistorialController } from './controllers/historial.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Historial])],
  controllers: [HistorialController],
})
export class HistorialModule {}
