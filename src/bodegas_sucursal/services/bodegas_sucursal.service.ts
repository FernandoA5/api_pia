import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBodegasSucursalDto } from '../dtos/bodegas_sucursal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BodegasSucursal } from '../entities/bodegas_sucursal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BodegasSucursalService {
  constructor(
    @InjectRepository(BodegasSucursal)
    private bodegasSucursalRepo: Repository<BodegasSucursal>,
  ) {}

  //GET BODEGAS_SUCURSAL BY ID
  async getBodegasSucursalById(num_bodega: number): Promise<BodegasSucursal> {
    const bodegasSucursal = await this.bodegasSucursalRepo.findOneBy({
      num_bodega: num_bodega,
    });
    if (!bodegasSucursal) {
      throw new NotFoundException(
        `BodegasSucursal with ID ${num_bodega} not found`,
      );
    }
    return bodegasSucursal;
  }

  //GET ALL BODEGAS_SUCURSAL
  async getBodegasSucursal(): Promise<BodegasSucursal[]> {
    const bodegasSucursal = await this.bodegasSucursalRepo.find();
    if (!bodegasSucursal) {
      throw new NotFoundException(`BodegasSucursal not found`);
    }
    return bodegasSucursal;
  }

  //CREATE BODEGAS_SUCURSAL
  async createBodegasSucursal(
    payload: CreateBodegasSucursalDto,
  ): Promise<BodegasSucursal> {
    const newBodegasSucursal = this.bodegasSucursalRepo.create(payload);
    return await this.bodegasSucursalRepo.save(newBodegasSucursal);
  }
}
