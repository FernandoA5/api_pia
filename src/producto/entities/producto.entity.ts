import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('producto')
export class Producto {
  @Column({ type: 'text', nullable: false })
  nombre_producto: string;

  @PrimaryColumn()
  id_producto: number;

  @Column({ type: 'numeric', nullable: false })
  precio_producto: number;

  @Column({ type: 'text', nullable: false })
  provedor_producto: string;

  @Column({ type: 'numeric', nullable: false })
  num_bodega: number;
}
