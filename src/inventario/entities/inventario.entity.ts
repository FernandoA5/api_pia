import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('inventario')
export class Inventario {
  @PrimaryGeneratedColumn()
  id_producto: number;
  @Column({ type: 'number', nullable: false })
  num_producto: number;
  @Column({ type: 'text', nullable: false })
  ubicacion_producto: string;
  @Column({ type: 'numeric', nullable: false })
  cantidad_producto: number;
}
