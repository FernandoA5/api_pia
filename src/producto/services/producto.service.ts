import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../entities/producto.entity';
import { CreateProductoDto } from '../dtos/producto.dto';


@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
    ) {}

    //GET PRODUCTO BY ID
    async findOne(id_producto: number): Promise<Producto> {
        const producto = await this.productoRepository.findOneBy({id_producto});
        if (!producto) throw new NotFoundException('Producto does not exist');
        return producto;
    }

    //GET ALL PRODUCTO
    async findAll(): Promise<Producto[]> {
        return await this.productoRepository.find();
    }

    //CREATE PRODUCTO
    async create(data: CreateProductoDto) {
        const newProducto = this.productoRepository.create(data);
        return await this.productoRepository.save(newProducto);
    }
}
