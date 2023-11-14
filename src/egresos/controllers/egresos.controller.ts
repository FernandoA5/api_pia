import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EgresosService } from '../services/egresos.service';
import { CreateEgresosDto } from '../dtos/egresos.dto';

@Controller('egresos')
export class EgresosController {
  constructor(private egresosService: EgresosService) {}

  @Get()
  async getAll() {
    return await this.egresosService.getEgresos();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.egresosService.getEgresosById(id);
  }

  @Post()
  async create(@Body() payload: CreateEgresosDto) {
    return await this.egresosService.createEgresos(payload);
  }
}
