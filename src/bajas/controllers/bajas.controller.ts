import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BajasService } from '../services/bajas.service';
import { CreateBajasDto } from '../dtos/bajas.dto';

@Controller('bajas')
export class BajasController {
  constructor(private bajasService: BajasService) {}

  @Get()
  async getAll() {
    return await this.bajasService.getBajas();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.bajasService.getBajasById(id);
  }

  @Post()
  async create(@Body() payload: CreateBajasDto) {
    return await this.bajasService.createBajas(payload);
  }
}
