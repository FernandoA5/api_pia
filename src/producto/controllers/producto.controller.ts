import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateProductoDto } from '../dtos/producto.dto';
import { ProductoService } from '../services/producto.service';


@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) {}

    @Get()
    async getAll(){
        return await this.productoService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number){
        return await this.productoService.findOne(id);
    }

    @Post()
    async create(@Body() producto: CreateProductoDto){
        return await this.productoService.create(producto);
    }
}
