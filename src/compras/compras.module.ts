import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Compras } from './entities/compras.entity';

import { ComprasController } from './controllers/compras.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Compras])],
  controllers: [ComprasController],
})
export class ComprasModule {}
