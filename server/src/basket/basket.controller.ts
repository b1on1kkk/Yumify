import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { Request } from 'express';

import { AuthGuard } from 'src/auth/auth.guard';
import { BasketService } from './basket.service';

import { ProductDto } from './dto/product.dto';

@Controller('basket')
@UseGuards(AuthGuard)
export class BasketController {
  constructor(private readonly productsService: BasketService) {}

  @Post('/add_product')
  async addProductToBasket(@Body() product: ProductDto, @Req() req: Request) {
    return this.productsService.addProductToBasket(
      product,
      req.cookies.login_jwt,
    );
  }

  @Get('/products')
  async usersBasketProducts(@Req() req: Request) {
    return this.productsService.usersBasketProducts(req.cookies.login_jwt);
  }

  @Delete('/delete_product')
  async deleteProductFromBasket(
    @Body() product: ProductDto,
    @Req() req: Request,
  ) {
    return this.productsService.deleteProductFromBasket(
      product,
      req.cookies.login_jwt,
    );
  }
}
