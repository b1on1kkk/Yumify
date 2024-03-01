import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma_service/prisma.service';
import { LoginDto } from './dto/login.dto';

import * as bcrypt from 'bcrypt';
import { RegistrationDto } from './dto/registration.dto';
import { TestRequestTypes } from './interfaces/interfaces';

@Injectable()
export class RegistrationService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async user_create(dto: RegistrationDto): Promise<string> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    try {
      await this.prisma.users.create({
        data: {
          email: dto.email,
          password: hashedPassword,
          nickname: dto.nickname,
        },
      });

      return this.jwtService.sign({
        email: dto.email,
      });
    } catch (error) {
      return '';
    }
  }

  async login(dto: LoginDto): Promise<string> {
    const user = await this.prisma.users.findFirst({
      where: {
        email: dto.email,
      },
    });

    if (!user) return null;

    const passwordMatch = await bcrypt.compare(dto.password, user.password);

    if (!passwordMatch) return null;

    return await this.jwtService.sign({
      email: dto.email,
    });
  }

  test(token: string): TestRequestTypes | null {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      return null;
    }
  }
}
