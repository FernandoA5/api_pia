import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateInventarioDto } from '../dtos/inventario.dto';
import { InventarioService } from '../services/inventario.service';

@Controller('inventario')
export class InventarioController {
    constructor(private readonly inventarioService: InventarioService) {}

    @Get()
    async getAll(){
        return await this.inventarioService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number){
        return await this.inventarioService.findOne(id);
    }

    @Post()
    async create(@Body() inventario: CreateInventarioDto){
        return await this.inventarioService.create(inventario);
    }
}
