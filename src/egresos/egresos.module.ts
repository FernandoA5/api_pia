import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Egresos } from './entities/egresos.entity';
import { EgresosController } from './controllers/egresos.controller';
import { EgresosService } from './services/egresos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Egresos])],
  controllers: [EgresosController],
  providers: [EgresosService],
})
export class EgresosModule {}
