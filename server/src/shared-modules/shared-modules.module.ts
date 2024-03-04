import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma_service/prisma.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '3d' },
    }),
  ],
  providers: [PrismaService],
  exports: [JwtModule, PrismaService],
})
export class SharedModulesModule {}
