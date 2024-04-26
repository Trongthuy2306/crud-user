import { Module } from '@nestjs/common';
import { UserController } from './user.query.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/user.schema';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { UserEvent } from './event';
import { UtilsService } from '../utils/utils.service';
import { UserService } from './user.qurey.service';
import { UserQueryRepository } from './repositorys/user.query.repository';
import { UserQueyHandler } from './handler';


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
    UserQueryRepository, UserService, UtilsService,
    ...UserQueyHandler,
    ...UserEvent
  ]
})
export class UserModuleQuery { }
