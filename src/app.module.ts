import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeormconfig.service';
import { InventarioModule } from './inventario/inventario.module';
import { ProvedorModule } from './provedor/provedor.module';
import { EgresosModule } from './egresos/egresos.module';
import { BodegasSucursalModule } from './bodegas_sucursal/bodegas_sucursal.module';
import { ProductoModule } from './producto/producto.module';
import { ComprasModule } from './compras/compras.module';
import { ClienteModule } from './cliente/cliente.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { HistorialModule } from './historial/historial.module';
import { BajasModule } from './bajas/bajas.module';
import { IngresosModule } from './ingresos/ingresos.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    InventarioModule,
    ProvedorModule,
    EgresosModule,
    BodegasSucursalModule,
    ProductoModule,
    ComprasModule,
    ClienteModule,
    EmpleadosModule,
    HistorialModule,
    BajasModule,
    IngresosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
