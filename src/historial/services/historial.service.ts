import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Historial } from '../entities/historial.entity';
import { CreateHistorialDto } from '../dtos/historial.dto';

@Injectable()
export class HistorialService {
    constructor(
        @InjectRepository(Historial)
        private readonly historialRepository: Repository<Historial>,
    ) {}

    //GET HISTORIAL BY ID
    async findOne(id_cliente: number): Promise<Historial> {
        const historial = await this.historialRepository.findOneBy({id_cliente});
        if (!historial) throw new NotFoundException('Historial does not exist');
        return historial;
    }

    //GET ALL HISTORIAL
    async findAll(): Promise<Historial[]> {
        return await this.historialRepository.find();
    }

    //CREATE HISTORIAL
    async create(data: CreateHistorialDto) {
        const newHistorial = this.historialRepository.create(data);
        return await this.historialRepository.save(newHistorial);
    }
}
