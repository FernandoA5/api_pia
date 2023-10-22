import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { Inventario } from 'src/inventario/entities/inventario.entity';
import { Provedor } from 'src/provedor/entities/provedor.entity';
import { Egresos } from 'src/egresos/entities/egresos.entity';
import { BodegasSucursal } from 'src/bodegas_sucursal/entities/bodegas_sucursal.entity';
import { Producto } from 'src/producto/entities/producto.entity';
import { Compras } from 'src/compras/entities/compras.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Empleados } from 'src/empleados/entities/empleados.entity';
import { Historial } from 'src/historial/entities/historial.entity';
import { Bajas } from 'src/bajas/entities/bajas.entity';
import { Ingresos } from 'src/ingresos/entities/ingresos.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  //   private readonly config: Configuration;

  constructor(/*private readonly configService: ConfigService*/) {
    // this.config = this.configService.get<Configuration>('config');
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'erp',
      schema: 'public',
      entities: {
        Inventario,
        Provedor,
        Egresos,
        BodegasSucursal,
        Producto,
        Compras,
        Cliente,
        Empleados,
        Historial,
        Bajas,
        Ingresos,
      },
      synchronize: true,
      migrations: ['../src/db/migrations'],
      migrationsRun: false,
      autoLoadEntities: true,
      retryAttempts: 3,
      keepConnectionAlive: true,
      logging: true,
    };
  }
}
