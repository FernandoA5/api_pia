import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateHistorialDto } from '../dtos/historial.dto';
import { HistorialService } from '../services/historial.service';

@Controller('historial')
export class HistorialController {
    constructor(private readonly historialService: HistorialService) {}

    @Get()
    async getAll(){
        return await this.historialService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number){
        return await this.historialService.findOne(id);
    }

    @Post()
    async create(@Body() historial: CreateHistorialDto){
        return await this.historialService.create(historial);
    }
}
