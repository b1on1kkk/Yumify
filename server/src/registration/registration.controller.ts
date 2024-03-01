import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  Post,
  Req,
  Res,
} from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { RegistrationDto } from './dto/registration.dto';
import { RegistrationService } from './registration.service';

import { Response, Request } from 'express';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post('/user_create')
  async user_create(@Body() dto: RegistrationDto, @Res() res: Response) {
    const token = await this.registrationService.user_create(dto);

    if (!token) throw new HttpException('error occur!', 500);

    return res
      .cookie('login_jwt', token, { httpOnly: true, maxAge: 60000 })
      .json({ text: 'Logged in!', status: 201 });
  }

  @HttpCode(200)
  @Post('/login')
  async login(@Body() dto: LoginDto, @Res() res: Response) {
    const user_jwt = await this.registrationService.login(dto);

    if (!user_jwt) throw new HttpException('invalid credentials!', 401);

    return res
      .cookie('login_jwt', user_jwt, { httpOnly: true, maxAge: 60000 })
      .json({ text: 'Logged in!', status: 200 });
  }

  @Get('/test')
  async test(@Req() req: Request, @Res() res: Response) {
    const data = this.registrationService.test(req.cookies.login_jwt);

    if (data)
      return res.json({ message: 'Data is reachable', statusCode: 200 });

    throw new HttpException('invalid credentials!', 500);
  }
}
