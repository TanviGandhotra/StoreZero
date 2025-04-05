import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from '../repositories/product.repository';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productRepository.findById(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: number): Promise<Product> {
    return this.productRepository.remove(id);
  }
}
