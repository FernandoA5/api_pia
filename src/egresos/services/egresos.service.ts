import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEgresosDto } from '../dtos/egresos.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Egresos } from '../entities/egresos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EgresosService {
  constructor(
    @InjectRepository(Egresos) private egresosRepo: Repository<Egresos>,
  ) {}

  //GET EGRESOS BY ID
  async getEgresosById(id_egreso: number): Promise<Egresos> {
    const egresos = await this.egresosRepo.findOneBy({ id: id_egreso });
    if (!egresos) {
      throw new NotFoundException(`Egresos with ID ${id_egreso} not found`);
    }
    return egresos;
  }

  //GET ALL EGRESOS
  async getEgresos(): Promise<Egresos[]> {
    const egresos = await this.egresosRepo.find();
    if (!egresos) {
      throw new NotFoundException(`Egresos not found`);
    }
    return egresos;
  }

  //CREATE EGRESOS
  async createEgresos(payload: CreateEgresosDto): Promise<Egresos> {
    const newEgresos = this.egresosRepo.create(payload);
    return await this.egresosRepo.save(newEgresos);
  }
}
