import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { JwtModule } from '@nestjs/jwt';

import { PrismaService } from 'src/prisma_service/prisma.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1m' },
    }),
  ],
  controllers: [RegistrationController],
  providers: [RegistrationService, PrismaService],
})
export class RegistrationModule {}
