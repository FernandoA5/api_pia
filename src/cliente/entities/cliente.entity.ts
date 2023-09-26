import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cliente')
export class Cliente {
  @PrimaryColumn()
  id_cliente: number;

  @Column({ type: 'text', nullable: false })
  nombre_cliente: string;

  @Column({ type: 'text', nullable: false })
  correo_cliente: string;

  @Column({ type: 'text', nullable: false })
  telefono_cliente: number;

  @Column({ type: 'text', nullable: false })
  empresa_cliente: string;
}
