import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateIngresosDto } from '../dtos/ingresos.dto';
import { IngresosService } from '../services/ingresos.service';

@Controller('ingresos')
export class IngresosController {
    constructor(private readonly ingresosService: IngresosService) {}

    @Get()
    async getAll(){
        return await this.ingresosService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number){
        return await this.ingresosService.findOne(id);
    }

    @Post()
    async create(@Body() ingreso: CreateIngresosDto){
        return await this.ingresosService.create(ingreso);
    }
}
