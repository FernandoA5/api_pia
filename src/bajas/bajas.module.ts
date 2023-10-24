import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Bajas } from './entities/bajas.entity';
import { BajasController } from './controllers/bajas.controller';
import { BajasService } from './services/bajas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bajas])],
  controllers: [BajasController],
  providers: [BajasService],
})
export class BajasModule {}
