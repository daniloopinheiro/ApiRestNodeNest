import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // HelloServer;
  // HelloValidator();
  app.useGlobalPipes(
      new ValidationPipe(
          {
              transform: true,
              whitelist: true,
              forbidNonWhitelisted: true,
            })
        );

    useContainer(app.select(AppModule), { fallbackOnErrors: true });
        
    await app.listen(3000);
}

bootstrap().catch(err => console.error('Erro ao iniciar o servidor:', err));