import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBajasDto } from '../dtos/bajas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bajas } from '../entities/bajas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BajasService {
  constructor(@InjectRepository(Bajas) private bajasRepo: Repository<Bajas>) {}

  //GET BAJAS BY ID
  async getBajasById(id_venta: number): Promise<Bajas> {
    const bajas = await this.bajasRepo.findOneBy({ id_venta: id_venta });
    if (!bajas) {
      throw new NotFoundException(`Bajas with ID ${id_venta} not found`);
    }
    return bajas;
  }

  //GET ALL BAJAS
  async getBajas(): Promise<Bajas[]> {
    const bajas = await this.bajasRepo.find();
    if (!bajas) {
      throw new NotFoundException(`Bajas not found`);
    }
    return bajas;
  }

  //CREATE BAJAS
  async createBajas(payload: CreateBajasDto): Promise<Bajas> {
    const newBajas = this.bajasRepo.create(payload);
    return await this.bajasRepo.save(newBajas);
  }
}
