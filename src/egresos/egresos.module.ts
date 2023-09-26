import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Egresos } from './entities/egresos.entity';
import { EgresosController } from './controllers/egresos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Egresos])],
  controllers: [EgresosController],
})
export class EgresosModule {}
