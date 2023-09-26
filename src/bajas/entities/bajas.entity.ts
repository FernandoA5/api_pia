import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bajas')
export class Bajas {
  @PrimaryGeneratedColumn()
  id_venta: number;

  @Column({ type: 'text', nullable: false })
  producto: string;

  @Column({ type: 'numeric', nullable: false })
  cantidad: number;

  @Column({ type: 'numeric', nullable: false })
  precio: number;

  @Column({ type: 'text', nullable: false })
  cliente: string;

  @Column({ type: 'text', nullable: false })
  fecha: string;
}
