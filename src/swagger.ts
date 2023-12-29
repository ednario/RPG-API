import { DocumentBuilder } from '@nestjs/swagger';

export const configSwagger = new DocumentBuilder()
  .setTitle('RPG API')
  .setDescription('The RPG API description')
  .setVersion('1.0')
  .build();
