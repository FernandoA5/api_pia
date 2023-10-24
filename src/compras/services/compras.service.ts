import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateComprasDto } from '../dtos/compras.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Compras } from '../entities/compras.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(Compras) private comprasRepo: Repository<Compras>,
  ) {}

  //GET COMPRAS BY ID
  async getComprasById(id_compra: number): Promise<Compras> {
    const compras = await this.comprasRepo.findOneBy({ id_compra: id_compra });
    if (!compras) {
      throw new NotAcceptableException(
        `Compras with ID ${id_compra} not found`,
      );
    }
    return compras;
  }

  //GET ALL COMPRAS
  async getCompras(): Promise<Compras[]> {
    const compras = await this.comprasRepo.find();
    if (!compras) {
      throw new NotAcceptableException(`Compras not found`);
    }
    return compras;
  }

  //CREATE COMPRAS
  async createCompras(payload: CreateComprasDto): Promise<Compras> {
    const newCompras = this.comprasRepo.create(payload);
    return await this.comprasRepo.save(newCompras);
  }
}
