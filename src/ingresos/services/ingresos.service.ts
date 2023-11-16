import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingresos } from '../entities/ingresos.entity';
import { CreateIngresosDto } from '../dtos/ingresos.dto';

@Injectable()
export class IngresosService {
    constructor(
        @InjectRepository(Ingresos) 
        private readonly ingresosRepository: Repository<Ingresos>,
    ){}

    //GET INGRESOS BY ID
    async findOne(id: number): Promise<Ingresos> {
        const ingreso = await this.ingresosRepository.findOneBy({id});
        if (!ingreso) throw new NotFoundException('Ingreso does not exist');
        return ingreso;
    }

    //GET ALL INGRESOS
    async findAll(): Promise<Ingresos[]> {
        return await this.ingresosRepository.find();
    }

    //CREATE INGRESO
    async create(data: CreateIngresosDto) {
        const newIngreso = this.ingresosRepository.create(data);
        return await this.ingresosRepository.save(newIngreso);
    }
}
