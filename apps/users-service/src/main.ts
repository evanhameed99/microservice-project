import { NestFactory } from '@nestjs/core';
import { RmqService } from 'libs/common';
import { UsersServiceModule } from './users-service.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersServiceModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('USERS'));
  await app.startAllMicroservices();
}
bootstrap();
