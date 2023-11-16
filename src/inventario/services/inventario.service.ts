import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventario } from '../entities/inventario.entity';
import { CreateInventarioDto } from '../dtos/inventario.dto';


@Injectable()
export class InventarioService {
    constructor(
        @InjectRepository(Inventario)
        private readonly inventarioRepository: Repository<Inventario>,
    ) {}

    //GET INVENTARIO BY ID
    async findOne(id_producto: number): Promise<Inventario> {
        const inventario = await this.inventarioRepository.findOneBy({id_producto});
        if (!inventario) throw new NotFoundException('Inventario does not exist');
        return inventario;
    }

    //GET ALL INVENTARIO
    async findAll(): Promise<Inventario[]> {
        return await this.inventarioRepository.find();
    }

    //CREATE INVENTARIO
    async create(data: CreateInventarioDto) {
        const newInventario = this.inventarioRepository.create(data);
        return await this.inventarioRepository.save(newInventario);
    }
}
