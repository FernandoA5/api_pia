import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateEmpleadosDto } from '../dtos/empleados.dto';
import { EmpleadosService } from '../services/empleados.service';


@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly empleadosService: EmpleadosService) {}

    @Get()
    async getAll(){
        return await this.empleadosService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number){
        return await this.empleadosService.findOne(id);
    }

    @Post()
    async create(@Body() empleado: CreateEmpleadosDto){
        return await this.empleadosService.create(empleado);
    }

}
