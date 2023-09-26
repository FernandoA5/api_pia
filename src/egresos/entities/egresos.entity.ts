import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('egresos')
export class Egresos {
  @PrimaryColumn()
  id: number;
  @Column({ type: 'numeric', nullable: false })
  compras: number;
  @Column({ type: 'text', nullable: false })
  producto: string;
  @Column({ type: 'numeric', nullable: false })
  ventas: number;
  @Column({ type: 'numeric', nullable: false })
  exportaciones: number;
}
