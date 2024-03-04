import { Module } from '@nestjs/common';
import { RegistrationModule } from './registration/registration.module';
import { ProductsModule } from './products/products.module';
import { SharedModulesModule } from './shared-modules/shared-modules.module';
import { BasketModule } from './basket/basket.module';

@Module({
  imports: [RegistrationModule, ProductsModule, SharedModulesModule, BasketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
