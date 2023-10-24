import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ComprasService } from '../services/compras.service';
import { CreateComprasDto } from '../dtos/compras.dto';

@Controller('compras')
export class ComprasController {
  constructor(private comprasService: ComprasService) {}

  @Get()
  async getAll() {
    return await this.comprasService.getCompras();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.comprasService.getComprasById(id);
  }

  @Post()
  async create(@Body() payload: CreateComprasDto) {
    return await this.comprasService.createCompras(payload);
  }
}
