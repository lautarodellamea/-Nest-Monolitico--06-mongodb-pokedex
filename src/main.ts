import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  // para que todos los endpoints comiencen con /api
  app.setGlobalPrefix('api/v2');


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
