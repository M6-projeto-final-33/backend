import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserController } from './User/user.controller';
import { UserService } from './User/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class AppModule { }
