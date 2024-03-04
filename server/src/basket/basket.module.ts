import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { SharedModulesModule } from 'src/shared-modules/shared-modules.module';

@Module({
  imports: [SharedModulesModule],
  controllers: [BasketController],
  providers: [BasketService],
})
export class BasketModule {}
