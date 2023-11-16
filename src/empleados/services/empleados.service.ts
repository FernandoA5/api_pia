import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadosDto } from '../dtos/empleados.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleados } from '../entities/empleados.entity';

@Injectable()
export class EmpleadosService {
    constructor(
        @InjectRepository(Empleados)
        private readonly empleadosRepository: Repository<Empleados>,
    ) {}

    //GET EMPELADOS BY ID
    async findOne(id_empleado: number): Promise<Empleados> {
        const empleado = await this.empleadosRepository.findOneBy({id_empleado});
        if (!empleado) throw new NotFoundException('Empleado does not exist');
        return empleado;
    }

    //GET ALL EMPLEADOS
    async findAll(): Promise<Empleados[]> {
        return await this.empleadosRepository.find();
    }

    //CREATE EMPLEADO
    async create(data: CreateEmpleadosDto) {
        const newEmpleado = this.empleadosRepository.create(data);
        return await this.empleadosRepository.save(newEmpleado);
    }
}
