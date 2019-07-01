import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('GOT example')
    .setDescription('The GOT locations API description')
    .setVersion('1.0')
    .addTag('got-locations')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
start();
