import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Compras } from './entities/compras.entity';

import { ComprasController } from './controllers/compras.controller';
import { ComprasService } from './services/compras.service';

@Module({
  imports: [TypeOrmModule.forFeature([Compras])],
  controllers: [ComprasController],
  providers: [ComprasService],
})
export class ComprasModule {}
