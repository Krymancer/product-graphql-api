import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  AdicionarProduto(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productService.create(createProductInput);
  }

  @Query(() => [Product])
  BuscarProdutos() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  BuscarProduto(@Args('id', { type: () => Int }) id: number) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  AlterarProduto(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation(() => Product)
  DeletarProduto(@Args('id', { type: () => Int }) id: number) {
    return this.productService.remove(id);
  }

  @Query(() => Int)
  ObterQuantidadeProdutos() {
    return this.productService.quantity();
  }

  @Query(() => Product)
  ObterProdutoComMenorEstoque() {
    return this.productService.leastQuantity();
  }

  @Query(() => Product)
  ObterProdutoComMaiorEstoque() {
    return this.productService.mostQuantity();
  }

  @Query(() => [Product])
  ObterProdutosSemEstoque() {
    return this.productService.noQuantity();
  }
}
