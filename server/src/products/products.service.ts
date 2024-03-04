import { Injectable } from '@nestjs/common';
import { products_category } from '@prisma/client';

import { PrismaService } from 'src/prisma_service/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async recommendedProducts() {
    const totalCount = await this.prisma.products.count();

    return await this.prisma.products.findMany({
      take: 4,
      skip: Math.floor(Math.random() * totalCount),
    });
  }

  async allProducts() {
    return await this.prisma.products.findMany();
  }

  async productsByType(type: products_category) {
    return await this.prisma.products.findMany({
      where: {
        category: type,
      },
    });
  }

  async productsById(type: products_category, id: number) {
    return await this.prisma.products.findMany({
      where: {
        product_id: id,
        category: type,
      },
    });
  }
}
