import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('compras')
export class Compras {
  @PrimaryColumn({ type: 'numeric', nullable: false })
  id_compra: number;

  @Column({ type: 'text', nullable: false })
  producto: string;

  @Column({ type: 'numeric', nullable: false })
  cantidad: number;

  @Column({ type: 'numeric', nullable: false })
  precio: number;

  @Column({ type: 'text', nullable: false })
  provedor: string;

  @Column({ type: 'text', nullable: false })
  fecha: string;
}
