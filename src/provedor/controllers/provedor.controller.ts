import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateProvedorDto } from '../dtos/provedor.dto';
import { ProvedorService } from '../services/provedor.service';

@Controller('provedor')
export class ProvedorController {
    constructor(private readonly provedorService: ProvedorService) {}

    @Get()
    async getAll(){
        return await this.provedorService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number){
        return await this.provedorService.findOne(id);
    }

    @Post()
    async create(@Body() provedor: CreateProvedorDto){
        return await this.provedorService.create(provedor);
    }
}
