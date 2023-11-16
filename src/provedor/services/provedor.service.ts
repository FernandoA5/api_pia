import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provedor } from '../entities/provedor.entity';
import { CreateProvedorDto } from '../dtos/provedor.dto';

@Injectable()
export class ProvedorService {
    constructor(
        @InjectRepository(Provedor)
        private readonly provedorRepository: Repository<Provedor>,
    ) {}

    //GET PROVEDOR BY ID
    async findOne(id_provedor: number): Promise<Provedor> {
        const provedor = await this.provedorRepository.findOneBy({id_provedor});
        if (!provedor) throw new NotFoundException('Provedor does not exist');
        return provedor;
    }

    //GET ALL PROVEDOR
    async findAll(): Promise<Provedor[]> {
        return await this.provedorRepository.find();
    }

    //CREATE PROVEDOR
    async create(data: CreateProvedorDto) {
        const newProvedor = this.provedorRepository.create(data);
        return await this.provedorRepository.save(newProvedor);
    }
}
