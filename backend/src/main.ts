import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.enableCors({
    allowedHeaders:['*'],
    origin:'http://localhost:3000',
    credentials:true
  })
  await app.listen(3030);
}
bootstrap();
