import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';

import { ClienteController } from './controllers/cliente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClienteController],
})
export class ClienteModule {}
