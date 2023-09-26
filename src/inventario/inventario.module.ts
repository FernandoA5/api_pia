import { Module } from '@nestjs/common';

import { InventarioController } from './controllers/inventario.controller';

@Module({
  controllers: [InventarioController],
})
export class InventarioModule {}
