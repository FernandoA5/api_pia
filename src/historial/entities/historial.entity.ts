import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('historial')
export class Historial {
  @Column({ type: 'text', nullable: false })
  nombre: string;

  @PrimaryGeneratedColumn()
  id_cliente: number;

  @Column({ type: 'text', nullable: false })
  correo: string;

  @Column({ type: 'numeric', nullable: false })
  telefono: number;

  @Column({ type: 'text', nullable: false })
  empresa: string;
}
