import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductInput: CreateProductInput) {
    return await this.productRepository.save(createProductInput);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    return await this.productRepository.findOne(id);
  }

  async update(id: number, updateProductInput: UpdateProductInput) {
    return await this.productRepository.update(id, updateProductInput);
  }

  async remove(id: number) {
    return await this.productRepository.delete(id);
  }

  async quantity() {
    return await this.productRepository.count();
  }

  async leastQuantity() {
    return await this.productRepository.findOne({ order: { quantity: 'ASC' } });
  }

  async mostQuantity() {
    return await this.productRepository.findOne({
      order: { quantity: 'DESC' },
    });
  }

  async noQuantity() {
    const products = await this.productRepository.find({
      where: { quantity: LessThan(5) },
    });
    console.log(products);
    return products;
  }
}
