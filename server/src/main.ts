import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.use(cookieParser());
  app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
      allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    }),
  );

  await app.listen(3000);
}
bootstrap();
