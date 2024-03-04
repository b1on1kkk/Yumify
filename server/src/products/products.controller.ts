import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { products_category } from '@prisma/client';

import { AuthGuard } from 'src/auth/auth.guard';
import { ProductsService } from './products.service';

@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/recommended_products')
  async recommendedProducts() {
    return await this.productsService.recommendedProducts();
  }

  @Get('/all_products')
  async allProducts() {
    return await this.productsService.allProducts();
  }

  @Get('/all_products/:product_type')
  async productsByType(@Param('product_type') type: products_category) {
    return await this.productsService.productsByType(type);
  }

  @Get('/all_products/:product_type/:product_id')
  async productsById(
    @Param('product_type') type: products_category,
    @Param('product_id') id: products_category,
  ) {
    return await this.productsService.productsById(type, +id);
  }
}
