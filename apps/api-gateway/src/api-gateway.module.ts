import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import * as Joi from 'joi';
import { DatabaseModule, RmqModule } from 'libs/common';
import { USERS_SERVICE } from './constants/services';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
      envFilePath: './apps/api-gateway/.env',
    }),
    // DatabaseModule,
    RmqModule.register({
      name: USERS_SERVICE,
    }),
    UsersModule,
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
