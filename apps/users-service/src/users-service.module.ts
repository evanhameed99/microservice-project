import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { DatabaseModule, RmqModule } from 'libs/common';
import { User, userSchema } from './schemas/user.schema';
import { UsersServiceController } from './users-service.controller';
import { UsersServiceService } from './users-service.service';
import { UsersRepository } from './users/users.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/users-service/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    RmqModule,
  ],
  controllers: [UsersServiceController],
  providers: [UsersServiceService, UsersRepository],
})
export class UsersServiceModule {}
