import { NestFactory } from '@nestjs/core';
import { UsersServiceModule } from './users-service.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersServiceModule);
  await app.listen(3000);
}
bootstrap();
