import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Provedor } from './entities/provedor.entity';
import { ProvedorController } from './controllers/provedor.controller';
import { ProvedorService } from './services/provedor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Provedor])],
  controllers: [ProvedorController],
  providers: [ProvedorService],
})
export class ProvedorModule {}
