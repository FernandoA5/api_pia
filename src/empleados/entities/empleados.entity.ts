import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('empleados')
export class Empleados {
  @Column({ type: 'text', nullable: false })
  nombre_empleado: string;

  @PrimaryColumn()
  id_empleado: number;

  @Column({ type: 'text', nullable: false })
  correo_empleado: string;

  @Column({ type: 'numeric', nullable: false })
  telefono_empleado: number;

  @Column({ type: 'text', nullable: false })
  domicilio_empleado: string;
}
