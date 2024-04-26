import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/commands/user.command.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';



@Module({
  imports: [
    CqrsModule,
    ConfigModule.forRoot(
      {
        envFilePath: '.env',
        isGlobal: true
      }
    ),
    MongooseModule.forRoot(process.env.DB_URL),
    MongooseModule.forRoot(process.env.DB_URL2),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
