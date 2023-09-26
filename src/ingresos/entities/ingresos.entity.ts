import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('ingresos')
export class Ingresos {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  ventas: number;

  @Column({ type: 'text', nullable: false })
  productos: string;

  @Column({ type: 'numeric', nullable: false })
  exportaciones: number;

  @Column({ type: 'numeric', nullable: false })
  importaciones: number;
}
