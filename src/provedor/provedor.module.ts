import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Provedor } from './entities/provedor.entity';
import { ProvedorController } from './controllers/provedor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Provedor])],
  controllers: [ProvedorController],
})
export class ProvedorModule {}
