import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { CreateClienteDto } from '../dtos/cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Get()
  async getAll() {
    return await this.clienteService.getCliente();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.clienteService.getClienteById(id);
  }

  @Post()
  async create(@Body() payload: CreateClienteDto) {
    return await this.clienteService.createCliente(payload);
  }
}
