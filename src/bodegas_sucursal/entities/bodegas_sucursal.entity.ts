import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('bodegas_sucursal')
export class BodegasSucursal {
  @PrimaryColumn()
  num_bodega: number;

  @Column({ type: 'text', nullable: false })
  nombre_bodega: string;

  @Column({ type: 'text', nullable: false })
  ubicacion_bodega: string;

  @Column({ type: 'numeric', nullable: false })
  telefono_bodega: number;

  @Column({ type: 'text', nullable: false })
  empresa_bodega: string;

  @Column({ type: 'text', nullable: false })
  empleado_bodega: string;
}
