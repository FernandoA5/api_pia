import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('provedor')
export class Provedor {
  @PrimaryGeneratedColumn()
  id_provedor: number;
  @Column({ type: 'numeric', nullable: false })
  num_provedor: number;
  @Column({ type: 'text', nullable: false })
  correo_provedor: string;
  @Column({ type: 'text', nullable: false })
  direccion_provedor: string;
  @Column({ type: 'numeric', nullable: false })
  telefono_provedor: number;
  @Column({ type: 'text', nullable: false })
  empresa_provedor: string;
}
