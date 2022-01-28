import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int, { description: 'Product Unique Identifier' })
  id: number;

  @Column()
  @Field(() => String, { description: 'Product Name' })
  name: string;

  @Column()
  @Field(() => String, { description: 'Product Manufacturer' })
  manufacturer: string;

  @Column()
  @Field(() => Int, { description: 'Product Quantity' })
  quantity: number;

  @Column()
  @Field(() => Float, { description: 'Product Price' })
  price: number;
}
