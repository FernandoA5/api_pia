import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Bajas } from './entities/bajas.entity';
import { BajasController } from './controllers/bajas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bajas])],
  controllers: [BajasController],
})
export class BajasModule {}
