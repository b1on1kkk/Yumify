import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

import { SharedModulesModule } from 'src/shared-modules/shared-modules.module';

@Module({
  imports: [SharedModulesModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
