import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BodegasSucursalService } from '../services/bodegas_sucursal.service';
import { CreateBodegasSucursalDto } from '../dtos/bodegas_sucursal.dto';
@Controller('bodegas-sucursal')
export class BodegasSucursalController {
  constructor(private bodegasSucursalService: BodegasSucursalService) {}

  @Get()
  async getAll() {
    return await this.bodegasSucursalService.getBodegasSucursal();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.bodegasSucursalService.getBodegasSucursalById(id);
  }

  @Post()
  async create(@Body() payload: CreateBodegasSucursalDto) {
    return await this.bodegasSucursalService.createBodegasSucursal(payload);
  }
}
