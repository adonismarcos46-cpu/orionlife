import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Permite que o app mobile acesse o servidor
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Orionis Core Server running on port: ${port}`);
}
bootstrap();
