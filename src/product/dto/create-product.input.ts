import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => Int, { description: 'Product Unique Identifier' })
  id: number;

  @Field(() => String, { description: 'Product Name' })
  name: string;

  @Field(() => String, { description: 'Product Manufacturer' })
  manufacturer: string;

  @Field(() => Int, { description: 'Product Quantity' })
  quantity: number;

  @Field(() => Float, { description: 'Product Price' })
  price: number;
}
