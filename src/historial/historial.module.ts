import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Historial } from './entities/historial.entity';

import { HistorialController } from './controllers/historial.controller';
import { HistorialService } from './services/historial.service';

@Module({
  imports: [TypeOrmModule.forFeature([Historial])],
  controllers: [HistorialController],
  providers: [HistorialService],
})
export class HistorialModule {}
