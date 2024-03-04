import { Module } from '@nestjs/common';

import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';

import { SharedModulesModule } from 'src/shared-modules/shared-modules.module';

@Module({
  imports: [SharedModulesModule],
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
