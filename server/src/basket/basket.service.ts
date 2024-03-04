import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma_service/prisma.service';
import { ProductDto } from './dto/product.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class BasketService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async addProductToBasket(product: ProductDto, token: string) {
    try {
      const decodedToken = this.jwtService.decode(token);

      await this.prisma.basket.create({
        data: {
          user_id: decodedToken.id,
          product_id: product.product_id,
          quantity: product.quantity,
        },
      });

      return await this.usersBasketProducts(token);
    } catch (error) {
      return error;
    }
  }

  async usersBasketProducts(token: string) {
    const decodedToken = this.jwtService.decode(token);

    return await this.prisma.basket.findMany({
      where: {
        user_id: decodedToken.id,
      },
      select: {
        quantity: true,
        products: {
          select: {
            product_id: true,
            price: true,
            picture: true,
            product_title: true,
            weight: true,
            category: true,
          },
        },
      },
    });
  }

  async deleteProductFromBasket(product: ProductDto, token: string) {
    const decodedToken = this.jwtService.decode(token);

    await this.prisma.basket.deleteMany({
      where: {
        user_id: decodedToken.id,
        product_id: product.product_id,
      },
    });

    return await this.usersBasketProducts(token);
  }
}
