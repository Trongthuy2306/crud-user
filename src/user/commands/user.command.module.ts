import { Module } from '@nestjs/common';
import { UserController } from './user.command.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schemas/user.schema';
import { UserRepository } from './repositorys/user.repository';
import { ConfigModule } from '@nestjs/config';
import { CommandBus, CqrsModule, EventPublisher } from '@nestjs/cqrs';
import { UserCommandHandler } from './handler';
import { UserEvent } from './event';
import { UtilsService } from '../utils/utils.service';
import { UserService } from './user.command.service';


@Module({
  imports: [
    ConfigModule.forRoot(
      {
        envFilePath: '.env',
        isGlobal: true
      }
    ),
    MongooseModule.forRoot(process.env.DB_URL, {
      connectionName: 'DB1'
    }),
    MongooseModule.forRoot(process.env.DB_URL2, {
      connectionName: 'DB2'
    }),
    MongooseModule.forFeature([{ name: 'DB1', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'DB2', schema: UserSchema }]),
    CqrsModule,

  ],
  controllers: [UserController],
  providers: [
    UserRepository, UserService, UtilsService,
    ...UserCommandHandler,
    ...UserEvent
  ]
})
export class UserModule { }
