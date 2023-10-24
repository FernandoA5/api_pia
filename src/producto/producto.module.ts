import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { ProductoController } from './controllers/producto.controller';
import { ProductoService } from './services/producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
