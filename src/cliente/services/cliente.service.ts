import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from '../dtos/cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from '../entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente) private clienteRepo: Repository<Cliente>,
  ) {}

  //GET CLIENTE BY ID
  async getClienteById(id_cliente: number): Promise<Cliente> {
    const cliente = await this.clienteRepo.findOneBy({
      id_cliente: id_cliente,
    });
    if (!cliente) {
      throw new NotFoundException(`Cliente with ID ${id_cliente} not found`);
    }
    return cliente;
  }

  //GET ALL CLIENTE
  async getCliente(): Promise<Cliente[]> {
    const cliente = await this.clienteRepo.find();
    if (!cliente) {
      throw new NotFoundException(`Cliente not found`);
    }
    return cliente;
  }

  //CREATE CLIENTE
  async createCliente(payload: CreateClienteDto): Promise<Cliente> {
    const newCliente = this.clienteRepo.create(payload);
    return await this.clienteRepo.save(newCliente);
  }
}
