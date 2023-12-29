import { NestFactory } from '@nestjs/core';

import { SwaggerModule } from '@nestjs/swagger';
import { configSwagger } from './swagger';

import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
